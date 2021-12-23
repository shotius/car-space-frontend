import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Center, Flex } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../Forms/RegisterForm';
import { ForgotPasswordForm } from '../Forms/ForgotPasswordForm';

interface LoginRegisterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginRegisterDrawer: React.FC<LoginRegisterDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState<'login' | 'register' | 'forget-password'>(
    'login'
  );

  const chooseForm = () => {
    switch (form) {
      case 'forget-password':
        return <ForgotPasswordForm closeForgetPassword={onClose} />;

      case 'login':
        return (
          <LoginForm
            onClose={onClose}
            openRegister={() => setForm('register')}
            openForgetPassword={() => setForm('forget-password')}
          />
        );

      case 'register':
        return (
          <RegisterForm onClose={onClose} openLogin={() => setForm('login')} />
        );
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <Center h={form == 'login' ? 'md' : '2xl'} mt="50px">
            <Flex direction="column" maxW="450px" w="full" justify="center">
              {chooseForm()}
            </Flex>
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
