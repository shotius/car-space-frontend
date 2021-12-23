import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from '@chakra-ui/modal';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { AuthForm } from 'src/redux/features/auth/types';
import { chooseAuthForm, closeAuthModal, toggleAuthModal } from 'src/redux/features/global/gloabalSlice';
import { ForgotPassword } from '../Forms/ForgotPassword';
import { RegisterForm } from '../Forms/RegisterForm';
import { LoginForm } from '../LoginForm';

interface AuthModalProps {}

export const AuthModal: React.FC<AuthModalProps> = ({}) => {
  const { chosenAuthForm: form, isAuthFormOpen: isOpen } = useAppSelector(
    (state) => state.globalAppState
  );

  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggleAuthModal())
  const setForm = (form: AuthForm) => dispatch(chooseAuthForm(form));

  // choose which form to display on a modal
  const getForm = () => {
    switch (form) {
      case 'login':
        return (
          <LoginForm
            onClose={onToggle}
            openRegister={() => setForm('register')}
            openForgetPassword={() => setForm('forget-password')}
          />
        );
      case 'forget-password':
        return <ForgotPassword closeForgetPassword={() => setForm('login')} />;
      case 'register':
        return (
          <RegisterForm onClose={onToggle} openLogin={() => setForm('login')} />
        );
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => dispatch(closeAuthModal())} isCentered>
      <ModalOverlay />
      <ModalContent p="32px 48px" w="460px">
        <ModalCloseButton top="30px" right="48px" />
        <ModalBody p="0">{getForm()}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
