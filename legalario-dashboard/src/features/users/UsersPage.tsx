
import PublicLayout from '../shared/PublicLayout'
import { UsersTable } from './components/UsersTable'
import { useUsers } from './hooks/useUsers';

const UsersPage = () => {
  const { usersQuery } = useUsers();

  return (
    <PublicLayout >
      <h1>Users Page</h1>

      <UsersTable users={usersQuery.data?.data ?? []} />
    </PublicLayout>
  )
}

export default UsersPage
