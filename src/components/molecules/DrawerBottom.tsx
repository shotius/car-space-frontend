import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';

interface DrawerBottomProps {
  body?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export const DrawerBottom: React.FC<DrawerBottomProps & DrawerProps> = ({
  isOpen,
  onClose,
  initialFocusRef,
  body,
  header,
  footer,
  children,
  ...rest
}) => {
  const handlers = useSwipeable({
    onSwipedDown: () => {
      onClose();
    },
  });

  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      {...rest}
    >
      <DrawerOverlay />
      <DrawerContent h="80%" borderTopRadius="16px" {...handlers}>
        {!!header && <DrawerHeader>{header}</DrawerHeader>}
        <DrawerBody p="32px 48px 10px" {...handlers}>
          {children}
        </DrawerBody>
        {!!footer && <DrawerFooter>{footer}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};
