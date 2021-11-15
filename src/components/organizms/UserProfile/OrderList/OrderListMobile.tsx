import { VStack } from '@chakra-ui/react';
import { OrderListCard } from 'src/components/molecules/Cards/OrderListCard';

interface OrderListMobileProps {}

export const OrderListMobile: React.FC<OrderListMobileProps> = ({}) => {
  return (
    <VStack w="full" spacing="24px" pt="48px">
      <OrderListCard />
      <OrderListCard />
      <OrderListCard />
    </VStack>
  );
};
