import { VStack } from '@chakra-ui/react';
import { OrderListCard } from 'src/components/molecules/Cards/OrderListCard';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface OrderListMobileProps {
  orderList: IOrderedCar[];
}

export const OrderListMobile: React.FC<OrderListMobileProps> = ({
  orderList,
}) => {
  return (
    <VStack w="full" spacing="24px" pt="48px">
      {orderList.map((order, i) => (
        <OrderListCard key={i} order={order}/>
      ))}
    </VStack>
  );
};
