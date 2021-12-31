import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Spinner,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { OrderListCard } from 'src/components/molecules/Cards/OrderListCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { UserSearchSelect } from 'src/components/molecules/Selects/UserSearchSelect';
import { AddNewOrderForm } from 'src/components/organizms/Forms/AddNewOrderForm';
import { useAppDispatch } from 'src/redux/app/hook';
import {
  deleteOrderedCar,
  getUserOrderedCars,
} from 'src/redux/features/orders/orderedCarSlice';
import {
  IOrderedCar,
  IUser,
} from '../../../../../../server/shared_with_front/types/types-shared';

interface AddOrderedCarProps {}

export const AddOrderedCar: React.FC<AddOrderedCarProps> = ({}) => {
  const [orderedCars, setOrderedCars] = useState<IOrderedCar[]>([]);
  const [fetching, setFetching] = useState(false);
  const [selectedUser, setSelectedUserId] = useState<IUser>();
  const [isEditing, setIsEditing] = useState(false);
  const [operationOnTheCar, setOperationOnTheCar] = useState<
    'adding' | 'modifying'
  >('adding');
  const [selectedCar, setSelectedCar] = useState<IOrderedCar>();
  const toast = useToast();

  const dispatch = useAppDispatch();

  function handleGetUserOrders(userId: string) {
    setFetching(true);
    dispatch(getUserOrderedCars(userId))
      .unwrap()
      .then((data) => {
        setOrderedCars(data);
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }

  function handleDeleteOrder(carId: string) {
    dispatch(deleteOrderedCar(carId))
      .unwrap()
      .then(() => {
        selectedUser && handleGetUserOrders(selectedUser!.id);
      })
      .catch((error) =>
        toast({
          title: error,
          position: 'top',
          status: 'error',
        })
      );
  }

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <Card w="full" maxW="650px" p="32px">
          <VStack>
            <HeadingSecondary textAlign="center" fontSize="24px">
              Add or Change Order
            </HeadingSecondary>
            <UserSearchSelect
              onSelect={() => {}}
              onUserSelect={(user: IUser) => {
                handleGetUserOrders(user.id);
                setSelectedUserId(user);
              }}
            />
            <VStack pt="4" w="full">
              {selectedUser && (
                <Button
                  mb="2"
                  onClick={() => {
                    setIsEditing(true);
                    setOperationOnTheCar('adding');
                  }}
                >
                  + add new Car for {selectedUser.fullName}
                </Button>
              )}
              {fetching ? (
                <Spinner />
              ) : !orderedCars.length ? (
                <HeadingSecondary w="full" textAlign="center" pt="4">
                  No Ordered Cars
                </HeadingSecondary>
              ) : (
                orderedCars.map((car) => (
                  <Card
                    w="full"
                    key={car.id}
                    boxShadow="0px 0px 10px lightgrey"
                  >
                    <VStack>
                      <HStack w="full" justify="space-between">
                        <Button
                          variant="ghost"
                          color="autoOrange.500"
                          onClick={() => {
                            setIsEditing(true);
                            setOperationOnTheCar('modifying');
                            setSelectedCar(car);
                          }}
                        >
                          Modify order
                        </Button>
                        <IconButton
                          onClick={() => handleDeleteOrder(car.id)}
                          icon={<CloseIcon />}
                          aria-label="delete order"
                        />
                      </HStack>
                      <OrderListCard order={car} />
                    </VStack>
                  </Card>
                ))
              )}
            </VStack>
          </VStack>
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
        </Card>
      </Center>
    </ContainerOuter>
  );
};