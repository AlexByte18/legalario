import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../actions/get-users";

export const useUsers = () => {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: ( ) => getUsers()
  })
  
  return {
    usersQuery
  }
}
