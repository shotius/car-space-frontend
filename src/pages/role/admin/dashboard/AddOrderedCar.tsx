import {
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { OrderListCard } from 'src/components/molecules/Cards/OrderListCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { UserSearchSelect } from 'src/components/molecules/Selects/UserSearchSelect';
import { AddNewOrderForm } from 'src/components/organizms/Forms/AddNewOrderForm';
import { useAppDispatch } from 'src/redux/app/hook';
import { getUserOrderedCars } from 'src/redux/features/orders/orderedCarSlice';
import {
  IOrderedCar,
  IUser,
} from '../../../../../../server/shared_with_front/types/types-shared';

interface AddOrderedCarProps {}

export const AddOrderedCar: React.FC<AddOrderedCarProps> = ({}) => {
  const [orderedCars, setOrderedCars] = useState<IOrderedCar[]>([]);
  const [fetching, setFetching] = useState(false);
  const [selectUser, setSelectedUserId] = useState<IUser>();
  const [isEditing, setIsEditing] = useState(false);
  // const [selectedCar, setSelectedCar] = useState<ICarDealer>()

  const dispatch = useAppDispatch();

  function getUserOrders(userId: string) {
    setFetching(true);
    dispatch(getUserOrderedCars(userId))
      .unwrap()
      .then((data) => {
        setOrderedCars(data);
        console.log(data);
        setFetching(false);
      })
      .catch(() => setFetching(false));
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
                getUserOrders(user.id);
                setSelectedUserId(user);
              }}
            />
            <VStack pt="4" w="full">
              {selectUser && (
                <Button onClick={() => setIsEditing(true)}>
                  + add new Car for {selectUser.fullName}
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
                      <Button variant="ghost" color="autoOrange.500">
                        Modify order
                      </Button>
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
            onClose={() => setIsEditing(false)}
            size="md"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Change/Add a Car</DrawerHeader>
              <DrawerBody>
                <AddNewOrderForm />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Card>
      </Center>
    </ContainerOuter>
  );
};
