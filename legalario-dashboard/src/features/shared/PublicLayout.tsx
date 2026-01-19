import { Flex, Heading } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Menu } from "./components/Menu";

interface Props {
  children?: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  return (
    <Flex gap="3" width="100vw" >
      <Flex direction="column" width="20rem" p="5">
        <Flex gap="3" align="center" justify="center"  my="5">
          <Heading size="8">Legalario</Heading>
        </Flex>
      <Menu />
      </Flex>
      <Flex width="100%" direction="column" p="5">
      { children }
      </Flex>
    </Flex>
  );
}

export {
  PublicLayout as default
}
