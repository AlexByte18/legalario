
import { Box } from '@radix-ui/themes';
import PublicLayout from '../shared/PublicLayout'
import { UsersTable } from './components/UsersTable'
import { useUsers } from './hooks/useUsers';
import { useState } from 'react';

const UsersPage = () => {
  const [search, setSearch] = useState('');
  const { usersQuery } = useUsers({ search });

  return (
    <PublicLayout >
      <Box p="5">
        <h1>Users page</h1>
        <UsersTable 
          users={usersQuery.data?.data ?? []} 
          onSearch={setSearch}
        />
      </Box>
    </PublicLayout>
  )
}

export default UsersPage
