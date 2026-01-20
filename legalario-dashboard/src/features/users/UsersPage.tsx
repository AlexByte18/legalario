
import { Box } from '@radix-ui/themes';
import PublicLayout from '../shared/PublicLayout'
import { UsersTable } from './components/UsersTable'
import { useUsers } from './hooks/useUsers';

const UsersPage = () => {
  const { usersQuery } = useUsers();

  return (
    <PublicLayout >
      <Box p="5">
        <h1>Users page</h1>
        <UsersTable users={usersQuery.data?.data ?? []} />
      </Box>
    </PublicLayout>
  )
}

export default UsersPage
