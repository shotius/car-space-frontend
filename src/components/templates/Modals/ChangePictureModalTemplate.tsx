import {
  Center,
  Drawer,
  DrawerBody, DrawerContent,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack
} from '@chakra-ui/react';
import { ChangeProfilePicContent } from 'src/components/organizms/Modals/ChangeProfilePicContent';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleProfilePictureChangeModal } from 'src/redux/features/global/gloabalSlice';

interface Props {}

export const ChangePictureModalTemplate: React.FC<Props> = ({}) => {
  const { isChangeProfilePictureOpen: isOpen, screen } = useAppSelector(
    (state) => state.globalAppState
  );
  const { isDesktop } = screen;
  const dispatch = useAppDispatch();

  const onClose = () => dispatch(toggleProfilePictureChangeModal());

  return (
    <>
      {isDesktop ? (
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          blockScrollOnMount={true}
        >
          <ModalOverlay />
          <ModalContent p="32px 48px" w="450px">
            <ModalCloseButton top="30px" right="48px" />
            <ChangeProfilePicContent />
            <ModalBody p="0"></ModalBody>
          </ModalContent>
        </Modal>
      ) : (
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent maxH="100%">
            <DrawerBody>
              <Center h="full">
                <VStack w="full">
                  <ChangeProfilePicContent />
                </VStack>
              </Center>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};
