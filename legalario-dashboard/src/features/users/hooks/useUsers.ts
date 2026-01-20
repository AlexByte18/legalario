import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../actions/get-users";

interface UseUsersParams {
  search?: string;
}

export const useUsers = ({ search }: UseUsersParams = {}) => {
  const usersQuery = useQuery({
    queryKey: ['users', search],
    queryFn: () => getUsers({ search })
  })
  
  return {
    usersQuery
  }
}
