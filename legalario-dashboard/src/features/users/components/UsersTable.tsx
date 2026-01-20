import type { User } from "@/core/interfaces/user.interface"
import { CardStackPlusIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Avatar, Box, Button, Card, Flex, Table, TextField } from "@radix-ui/themes"
import { NavLink } from "react-router"
import { useState, useEffect } from "react"

interface Props {
  users: User[]
  onSearch: (search: string) => void
}

export const UsersTable = ({ users, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm, onSearch])

  return (
    <Card>
      <Box p="5" width="full">
        <Flex justify="between" align="center" mb="5">

        <TextField.Root 
          placeholder="Search by name or email" 
          size="3" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <NavLink to="/users/new">
          <Button size="3">
            <CardStackPlusIcon />
            Create new user
          </Button>
        </NavLink>
        </Flex>
      <Table.Root >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            users?.map((user: User) => (
              <Table.Row key={user.id}>
                <Table.RowHeaderCell>
                  {user.id}
                </Table.RowHeaderCell>
                <Table.Cell>
                  <Avatar fallback={`${user.name[0]}`}/>
                  {user.name}
                </Table.Cell>
                <Table.Cell>
                  {user.email}
                </Table.Cell>
                <Table.Cell>
                  {user.age }
                </Table.Cell>
                <Table.Cell>
                  {user.country}
                </Table.Cell>
              </Table.Row>
            ))
          }

        </Table.Body>
      </Table.Root>
      </Box>
    </Card>
  )
}
