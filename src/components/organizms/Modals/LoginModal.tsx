import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalOverlay
} from '@chakra-ui/modal';
import { LoginForm } from '../Forms/LoginForm';

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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="32px 48px" w="460px">
        <ModalCloseButton top="30px" right="48px" />
        <ModalBody p="0">
          <LoginForm onClose={onClose} openRegister={openRegister} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
