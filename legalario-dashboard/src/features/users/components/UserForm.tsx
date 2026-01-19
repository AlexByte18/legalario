import { useForm } from '../../shared/hooks/useForm';
import { Box, Button, Flex, TextField } from '@radix-ui/themes';
import type { FormEvent } from 'react';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router';

interface FormProps {
  id: string;
  name: string;
  email: string;
  password: string;
  age: string;
  country: string;
}

export const UserForm = () => {
  const navigate = useNavigate();
  
  const { 
    name,
    email,
    password,
    age,
    country,
    onChange,
    formData,
  } = useForm<FormProps>({
    id: 'new',
    name: '',
    email: '',
    password: '',
    age: '',
    country: '',
  });

  const { userMutation } = useUser()

  const onSubmit = (event: FormEvent<HTMLFormElement> ) => {
      event.preventDefault();
      userMutation.mutate({
        ...formData,
        age: Number(formData.age)
      }, {
        onError: () => {
          console.error("Error creating new user");
        },
        onSuccess: () => {
          navigate('/users');
        }
      });
    }

  return (
    <Box width="full" p="5">
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="3">
          <TextField.Root
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />
          <TextField.Root
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <TextField.Root
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
          />
          <TextField.Root
            name="age"
            type="text"
            placeholder="Age"
            value={age}
            onChange={onChange}
          />
          <TextField.Root
            name="country"
            type="text"
            placeholder="Country"
            value={country}
            onChange={onChange}
          />
        </Flex>
        <Button type="submit" mt="5">Save user</Button>
      </form>
    </Box>
  )
}
