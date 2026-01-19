import { CubeIcon } from "@radix-ui/react-icons";
import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router";

export const Menu = () => {
  const navigate = useNavigate();
  
  return (
    <Flex direction="column" gap="3" pt="9" align="stretch" >
        <Button size="4" onClick={() => {
          navigate('/users');
        }}> 
          <CubeIcon />
          <Text>Users</Text>
        </Button>
        <Card mt="9">
          <Flex direction="column" gap="2" p="4">
            <Heading align="center">La legaltech #1 en México.</Heading>
            <Text align="center">El software para hacer flujos legales ágiles y fáciles.</Text>
            <Button mt="5">Learn more</Button>
          </Flex>
        </Card>
    </Flex>
  )
}
