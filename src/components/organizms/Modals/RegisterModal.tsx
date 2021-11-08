import {
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay
} from '@chakra-ui/react';
import { RegisterForm } from '../Forms/RegisterForm';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  openLogin,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="38px 48px" w="460px">
        <ModalCloseButton top="35px" right="48px" />
        <ModalBody p="0">
          <RegisterForm onClose={onClose} openLogin={openLogin} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
