import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import {
  IOrderedCar,
  IUser,
} from '../../../../../server/shared_with_front/types/types-shared';
import { AddNewOrderForm } from '../Forms/AddNewOrderForm';

interface ChangeUserOrderedCarProps {
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  operationOnTheCar: 'adding' | 'modifying';
  selectedUser?: IUser;
  selectedCar?: IOrderedCar;
  handleGetUserOrders: (val: string) => void;
}

export const UpdateOrderedCarDrawer: React.FC<ChangeUserOrderedCarProps> = ({
  isEditing,
  setIsEditing,
  operationOnTheCar,
  selectedUser,
  selectedCar,
  handleGetUserOrders,
}) => {
  return (
    <Drawer
      isOpen={isEditing}
      placement="right"
      onClose={() => {
        setIsEditing(false);
      }}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Change/Add a Car</DrawerHeader>
        <DrawerBody>
          <AddNewOrderForm
            operation={operationOnTheCar}
            userId={selectedUser ? selectedUser.id : ''}
            car={selectedCar}
            closeDrawer={() => {
              setIsEditing(false);
              selectedUser && handleGetUserOrders(selectedUser.id);
            }}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
