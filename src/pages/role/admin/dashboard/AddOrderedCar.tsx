import {
  Button,
  HStack,
  IconButton,
  Spinner,
  Stack,
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
import { UserList } from 'src/components/organizms/adminPage/UserList';
import { UpdateOrderedCarDrawer } from 'src/components/organizms/Drawers/UpdateOrderedCarDrawer';
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
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [isEditing, setIsEditing] = useState(false);
  const [operationOnTheCar, setOperationOnTheCar] = useState<
    'adding' | 'modifying'
  >('adding');
  const [selectedCar, setSelectedCar] = useState<IOrderedCar>();

  const toast = useToast();

  const dispatch = useAppDispatch();

  // handle get user ordered cars
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

  // handle remove ordered car for user
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

  // function selects user and gets ordered cars
  function handleOnUserClick(user: IUser) {
    setSelectedUser(user);
    handleGetUserOrders(user.id);
  }

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Stack
        w="full"
        justify="flex-end"
        spacing="4"
        direction={['column', null, 'row']}
        align="center"
      >
        {/* Add order car to the user  */}
        <Card w="full" maxW="650px" p="32px" alignSelf="flex-start">
          <VStack>
            <HeadingSecondary textAlign="center" fontSize="24px">
              Add or Change Order
            </HeadingSecondary>
            <UserSearchSelect
              onSelect={() => {}}
              onUserSelect={handleOnUserClick}
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
        </Card>

        {/* User list  */}
        <Card
          maxW={['full', '450px', '250px']}
          px="0"
          w="full"
          alignSelf="flex-start"
        >
          <UserList setSelectedUser={handleOnUserClick} />
        </Card>

        {/* Edit car drawer  */}
        <UpdateOrderedCarDrawer
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          operationOnTheCar={operationOnTheCar}
          selectedUser={selectedUser}
          selectedCar={selectedCar}
          handleGetUserOrders={handleGetUserOrders}
        />
      </Stack>
    </ContainerOuter>
  );
};
