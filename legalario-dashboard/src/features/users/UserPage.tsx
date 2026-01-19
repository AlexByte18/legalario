import { Box, Heading } from "@radix-ui/themes";
import { UserForm } from "./components/UserForm";
import PublicLayout from "../shared/PublicLayout";

const UserPage = () => {

  return (
    <PublicLayout>
      <h1>Create new user</h1>
      <Box p="5">
        <UserForm />
      </Box>
    </PublicLayout>
  );
}

export {
  UserPage as default
};
