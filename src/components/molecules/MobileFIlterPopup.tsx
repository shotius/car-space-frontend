import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps
} from '@chakra-ui/modal';
import { ReactNode } from 'react';
import { ButtonRegular } from './Buttons/ButtonRegular';

interface MobileEnginePopupProps {
  isOpen: boolean;
  onClose: () => void;
  submit: () => void;
  header?: ReactNode;
}

export const MobileFilterPopup: React.FC<MobileEnginePopupProps & DrawerProps> =
  ({ isOpen, onClose, submit, header, children, ...rest }) => {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" {...rest}>
        <DrawerOverlay />
        <DrawerContent maxH="80%" borderTopRadius="16px" p="32px 48px 0px 48px" >
          <DrawerHeader p="0">{header || null}</DrawerHeader>
          <DrawerBody p="3px">{children}</DrawerBody>
          <DrawerFooter p="16px 0">
            <ButtonRegular onClick={submit}>Apply</ButtonRegular>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };
