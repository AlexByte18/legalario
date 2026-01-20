import { useForm } from '../../shared/hooks/useForm';
import { Box, Button, Flex, TextField, Text } from '@radix-ui/themes';
import type { FormEvent } from 'react';
import { useUser } from '../hooks/useUser';
import { useNavigate } from 'react-router';
import { useState } from 'react';

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
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  
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
      setErrors({});
      event.preventDefault();
      userMutation.mutate({
        ...formData,
        age: Number(formData.age)
      }, {
        onError: (error: any) => {
          console.error("Error creating new user");
          if (error.errors) {
            setErrors(error.errors);
          }
        },
        onSuccess: () => {
          navigate('/');
        }
      });
    }

  return (
    <Box width="full" p="5">
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="3">
          <Flex direction="column" >
            <TextField.Root
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            {errors.name && (
              <Text size="2" color="red" mt="1" align="left">
                {errors.name[0]}
              </Text>
            )}
          </Flex>
          <Flex direction="column">
            <TextField.Root
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
            {errors.email && (
              <Text size="2" color="red" mt="1" align="left">
                {errors.email[0]}
              </Text>
            )}
          </Flex>
          <Flex direction="column">
            <TextField.Root
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
            {errors.password && (
              <Text size="2" color="red" mt="1" align="left">
                {errors.password[0]}
              </Text>
            )}
          </Flex>
          <Flex direction="column">
            <TextField.Root
              name="age"
              type="text"
              placeholder="Age"
              value={age}
              onChange={onChange}
            />
            {errors.age && (
              <Text size="2" color="red" mt="1" align="left">
                {errors.age[0]}
              </Text>
            )}
          </Flex>
          <Flex direction="column">
            <TextField.Root
              name="country"
              type="text"
              placeholder="Country"
              value={country}
              onChange={onChange}
            />
            {errors.country && (
              <Text size="2" color="red" mt="1" align="left">
                {errors.country[0]}
              </Text>
            )}
          </Flex>
        </Flex>
        <Button type="submit" mt="5">Save user</Button>
      </form>
    </Box>
  )
}
