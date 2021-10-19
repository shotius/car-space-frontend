import { Center } from '@chakra-ui/layout';
import { Container } from 'src/components/atoms/Container';
import { LoginForm } from 'src/components/organizms/LoginForm';


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
