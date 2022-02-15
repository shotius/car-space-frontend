import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';
import { useAuthModal } from 'src/utils/hooks/useAuthModal';

interface AuthModalProps {}

export const AuthModal: React.FC<AuthModalProps> = ({}) => {
  const { isOpen, onClose, getForm } = useAuthModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p="32px 48px" w="460px">
        <ModalCloseButton top="30px" right="48px" />
        <ModalBody p="0">{getForm()}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
