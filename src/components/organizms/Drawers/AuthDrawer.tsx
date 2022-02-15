import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Center, Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../Forms/RegisterForm';
import { ForgotPasswordForm } from '../Forms/ForgotPasswordForm';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  chooseAuthForm,
  closeAuthModal,
} from 'src/redux/features/global/gloabalSlice';
import { AuthForm } from 'src/redux/features/auth/types';

interface AuthDrawerProps {}

export const AuthDrawer: React.FC<AuthDrawerProps> = ({}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const form = useAppSelector((state) => state.globalAppState.chosenAuthForm);
  const isOpen = useAppSelector((state) => state.globalAppState.isAuthFormOpen);

  const dispatch = useAppDispatch();

  const onClose = () => dispatch(closeAuthModal());
  const setForm = (form: AuthForm) => dispatch(chooseAuthForm(form));

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
          <RegisterForm openLogin={() => setForm('login')} />
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
