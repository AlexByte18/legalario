import type { User } from "@/core/interfaces/user.interface"
import { CardStackPlusIcon } from "@radix-ui/react-icons"
import { Avatar, Box, Button, Card, Flex, Heading, Table } from "@radix-ui/themes"
import { NavLink } from "react-router"

interface Props {
  users: User[]
}

export const UsersTable = ({ users }: Props) => {

  return (
    <Card>
      <Box p="5">
        <Flex justify="between" align="center" mb="5">

        <Heading>Users</Heading>
        <NavLink to="/users/new">
          <Button size="3">
            <CardStackPlusIcon />
            Agregar nuevo usuario
          </Button>
        </NavLink>
        </Flex>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            users?.map((user: User) => (
              <Table.Row>
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
