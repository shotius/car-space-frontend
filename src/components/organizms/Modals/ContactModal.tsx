import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ContactForm } from 'src/components/organizms/Forms/ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="32px 48px">
        <ModalHeader p="0" w="80%">
          Need help?
          <br /> We’re here to answer any questions.
        </ModalHeader>
        <ModalCloseButton top="32px" right="48px" />
        <ModalBody p="0" mt="48px">
          <ContactForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
