import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from '@chakra-ui/modal';
import { forwardRef, ReactNode } from 'react';
import { ButtonRegular } from '../Buttons/ButtonRegular';

interface MobileEnginePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  header?: ReactNode;
}

export const MobileFilterPopup = forwardRef<
  HTMLButtonElement,
  MobileEnginePopupProps & DrawerProps
>(
  (
    { isOpen, onClose, onSubmit, header, children, ...rest },
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom" {...rest}>
        <DrawerOverlay />
        <DrawerContent maxH="80%" borderTopRadius="16px" p="32px 48px 0px 48px">
          <DrawerHeader p="0px 0px 24px" display={!!header ? 'block' : 'none'}>
            {header}
          </DrawerHeader>
          <DrawerBody h="200px" p="3px">
            {children}
          </DrawerBody>
          <DrawerFooter p="16px 0">
            <ButtonRegular ref={ref} onClick={onSubmit}>
              Apply
            </ButtonRegular>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
);
