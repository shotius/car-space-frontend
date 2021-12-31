import { VStack } from '@chakra-ui/react';
import { OrderListCard } from 'src/components/molecules/Cards/OrderListCard';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { IOrderedCar } from '../../../../../../server/shared_with_front/types/types-shared';

interface OrderListMobileProps {
  orderList: IOrderedCar[];
}

export const OrderListMobile: React.FC<OrderListMobileProps> = ({
  orderList,
}) => {
  return (
    <VStack w="full" spacing="24px" pt="48px">
      {!orderList.length ? (
        <HeadingSecondary>Your order list is empty</HeadingSecondary>
      ) : (
        orderList.map((order, i) => <OrderListCard key={i} order={order} />)
      )}
    </VStack>
  );
};
