import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react';
import {
  ITransportDataObject
} from '../../../../../server/shared_with_front/types/types-shared';
import { ChangeTransportationForm } from '../Forms/ChangeTransportationForm';

interface ComponentProps {
  initTransportation?: ITransportDataObject;
  successCb?: (trans: ITransportDataObject) => void; 
}

export const useTransportationDrawer = () => {
  const { isOpen, onToggle } = useDisclosure();
  const Component: React.FC<ComponentProps> = ({ initTransportation: transportationToChage, successCb = () => {} }) => {
    return (
      <Drawer isOpen={isOpen} onClose={onToggle}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Transportation</DrawerHeader>
          <DrawerBody>
            <ChangeTransportationForm
              initTransportation={transportationToChage}
              successCb={(trans: ITransportDataObject) => {
                successCb(trans)
                onToggle()
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };

  return {
    toggleTransportationDrawer: onToggle,
    TransportationEditDrawer: Component,
  };
};
