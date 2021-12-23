import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';
import { useState } from 'react';
import { ForgotPassword } from '../Forms/ForgotPassword';
import { LoginForm } from '../LoginForm';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  openRegister: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  openRegister,
}) => {
  const [isForgotPasswordShown, setIsForgotPasswordShown] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p="32px 48px" w="460px">
        <ModalCloseButton top="30px" right="48px" />
        <ModalBody p="0">
          {isForgotPasswordShown ? (
            <ForgotPassword closeForgetPassword={onClose} />
          ) : (
            <LoginForm
              onClose={onClose}
              openRegister={openRegister}
              openForgetPassword={() => setIsForgotPasswordShown(true)}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
