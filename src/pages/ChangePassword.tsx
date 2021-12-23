import { Center } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { ChangePasswordForm } from 'src/components/organizms/Forms/ChangePasswordForm';

interface ChangePasswordProps {}

export const ChangePasswordPage: React.FC<ChangePasswordProps> = ({}) => {
  return (
    <ContainerOuter>
      <Center h="70vh">
        <Card p={['32px', null, '42px 64px']} w="full" maxW="450px">
          <ChangePasswordForm />
        </Card>
      </Center>
    </ContainerOuter>
  );
};

export default ChangePasswordPage;
