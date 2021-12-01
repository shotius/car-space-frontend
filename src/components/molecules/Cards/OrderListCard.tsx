import { Button, HStack, Icon, StackDivider, VStack } from '@chakra-ui/react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { IOrderData } from 'src/pages/role/user/dashboard/OrderListPage';
import { dateToDMY } from 'src/utils/functions/dateToDMY';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { Card } from './Card';

interface OrderListCardProps {
  order: IOrderData
}

export const OrderListCard: React.FC<OrderListCardProps> = ({order}) => {
  const {createdDate: cD, deliveryDate: dD} = order
  return (
    <Card w="full" pb="0">
      <VStack divider={<StackDivider />} w="full" p="2">
        <HStack w="full" justify="space-between">
          <TextSecondary>Order Id</TextSecondary>
          <HeadingSecondary>{order.orderId}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Name</TextSecondary>
          <HeadingSecondary>{order.name}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Created</TextSecondary>
          <HeadingSecondary>{dateToDMY(cD)}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Dealivery</TextSecondary>
          <HeadingSecondary>{dateToDMY(dD)}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Location</TextSecondary>
          <HeadingSecondary>{order.location}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Total Price</TextSecondary>
          <HeadingSecondary>{toTrippleNumber(order.totalPrice)} USD</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Status</TextSecondary>
          <HeadingSecondary>{order.status}</HeadingSecondary>
        </HStack>
          <HStack>
            <Button variant="ghost" bg="transparent">
              See more <Icon as={DropdownIcon} transform="rotate(-90deg)" mb="2px" ml="2"/>
            </Button>
          </HStack>
      </VStack>
    </Card>
  );
};
