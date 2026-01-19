import type { User } from "../../../core/interfaces/user.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../actions/create-user";

export const useUser = () => {
  const queryClient = useQueryClient();

  const userMutation = useMutation({
    mutationFn: async (data: User) => {
      const response = await createUser(data);
      return response.data
    },
    onSuccess: (data: User) => {
      queryClient.invalidateQueries({
        queryKey: ['users']
      })
    }
  })

  return {
    userMutation,
  }
}
