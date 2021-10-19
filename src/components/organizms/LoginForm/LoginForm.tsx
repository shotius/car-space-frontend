import { Button } from '@chakra-ui/button';
import { Flex, Heading, Text, VStack } from '@chakra-ui/layout';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { Form, Formik } from 'formik';

import { Link as RouteLink } from 'react-router-dom';
import { useAppDispatch } from "src/redux/app/hook";
import { loginUser } from "src/redux/features/auth/authSlice";

interface LoginFormProps {}

export const LoginForm: React.FC<LoginFormProps> = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        const credentials = {
          username: values.username,
          password: values.password,
        };
        dispatch(loginUser(credentials));
      }}
    >
      {() => (
        <Form>
          <Heading w="full" textAlign="center" mb={4}>
            Login
          </Heading>
          <VStack spacing={4}>
            <FormikInput name="username" label="Username" placeholder="username"/>
            <FormikInput name="password" label="Password" placeholder="password" type="password"/>
            <Button variant="solid" w="full" colorScheme="blue" type="submit">
              Login
            </Button>
            <Flex color="gray.500" as="sub">
              <Text>if you aren't car dealer or an admin go to </Text>
              <Text color="blue.500" as="u" pl={1}>
                <RouteLink to="/home">Home</RouteLink>
              </Text>
            </Flex>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
