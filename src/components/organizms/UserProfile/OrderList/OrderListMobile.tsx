import { VStack } from '@chakra-ui/react';
import { OrderListCard } from 'src/components/molecules/Cards/OrderListCard';
import { IOrderData } from 'src/pages/role/user/dashboard/OrderListPage';

interface OrderListMobileProps {
  orderList: IOrderData[];
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
