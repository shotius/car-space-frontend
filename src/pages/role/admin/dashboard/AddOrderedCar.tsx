import { Center, Spinner, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { UserSearchSelect } from 'src/components/molecules/Selects/UserSearchSelect';
import { useAppDispatch } from 'src/redux/app/hook';
import { getUserOrderedCars } from 'src/redux/features/orders/orderedCarSlice';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface AddOrderedCarProps {}

export const AddOrderedCar: React.FC<AddOrderedCarProps> = ({}) => {
  const [orderedCars, setOrderedCars] = useState<IOrderedCar[]>([]);
  const [fetching, setFetching] = useState(false);

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
        <Card w="full" maxW="650px">
          <VStack>
            <HeadingSecondary textAlign="center" fontSize="24px">
              Add or Change Order
            </HeadingSecondary>
            <UserSearchSelect
              onSelect={() => {}}
              onItemSelect={(userId: string) => {
                getUserOrders(userId);
              }}
            />
            <VStack pt="4">
              {fetching ? (
                <Spinner />
              ) : !orderedCars.length ? (
                <HeadingSecondary w="full" textAlign="center" pt="4">
                  No Ordered Cars
                </HeadingSecondary>
              ) : (
                orderedCars.map((car) => (
                  <HeadingSecondary key={car.id}>
                    {car.carName}
                  </HeadingSecondary>
                ))
              )}
            </VStack>
          </VStack>
        </Card>
      </Center>
    </ContainerOuter>
  );
};
