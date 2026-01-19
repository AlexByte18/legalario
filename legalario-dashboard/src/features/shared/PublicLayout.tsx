import { Box } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode
}

const PublicLayout = ({ children }: Props) => {
  return (
    <Box width="100vw" height="100vh">
      { children }
    </Box>
  );
}

export {
  PublicLayout as default
}
