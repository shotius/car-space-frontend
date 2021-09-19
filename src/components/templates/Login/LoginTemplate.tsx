import { Center } from '@chakra-ui/layout';
import { Container } from 'components/atoms/Container';
import { LoginForm } from 'components/organizms/LoginForm';
import React from 'react';

interface LoginTemplateProps {}

export const LoginTemplate: React.FC<LoginTemplateProps> = () => {
  return (
    <Center h="100vh">
      <Container variant="small" >
        <LoginForm />
      </Container>
    </Center>
  );
};
