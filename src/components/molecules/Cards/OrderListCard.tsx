import {
  Box,
  Button,
  Collapse,
  Divider,
  HStack,
  Icon,
  StackDivider,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { IOrderData } from 'src/pages/role/user/dashboard/OrderListPage';
import { dateToDMY } from 'src/utils/functions/dateToDMY';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { Card } from './Card';

interface OrderListCardProps {
  order: IOrderData;
}

export const OrderListCard: React.FC<OrderListCardProps> = ({ order }) => {
  const { createdDate: cD, deliveryDate: dD } = order;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Card w="full" pb="0">
      <VStack w="full" p="2">
        <HStack w="full" justify="space-between">
          <TextSecondary>Order Id</TextSecondary>
          <HeadingSecondary>{order.orderId}</HeadingSecondary>
        </HStack>
        <Divider w="full"/> 
        <HStack w="full" justify="space-between">
          <TextSecondary>Name</TextSecondary>
          <HeadingSecondary>{order.name}</HeadingSecondary>
        </HStack>
        <Divider w="full"/> 
        <HStack w="full" justify="space-between">
          <TextSecondary>Created</TextSecondary>
          <HeadingSecondary>{dateToDMY(cD)}</HeadingSecondary>
        </HStack>
        <Divider w="full"/> 
        <HStack w="full" justify="space-between">
          <TextSecondary>Dealivery</TextSecondary>
          <HeadingSecondary>{dateToDMY(dD)}</HeadingSecondary>
        </HStack>
        <Divider w="full"/> 
        <Box w="full">
          <Collapse in={isOpen}>
            <VStack divider={<StackDivider />}>
              <HStack w="full" justify="space-between">
                <TextSecondary>Location</TextSecondary>
                <HeadingSecondary>{order.location}</HeadingSecondary>
              </HStack>
              <HStack w="full" justify="space-between">
                <TextSecondary>Total Price</TextSecondary>
                <HeadingSecondary>
                  {toTrippleNumber(order.totalPrice)} USD
                </HeadingSecondary>
              </HStack>
              <HStack w="full" justify="space-between">
                <TextSecondary>Status</TextSecondary>
                <HeadingSecondary>{order.status}</HeadingSecondary>
              </HStack>
            </VStack>
          </Collapse>
        </Box>
        <Divider w="full" display={isOpen ? "block" : "none"}/> 
        <HStack>
          <Button variant="ghost" bg="transparent" onClick={onToggle}>
            {isOpen ? "See less" : "See more"}
            <Icon
              as={DropdownIcon}
              transform={!isOpen ? "rotate(-90deg)" : "rotate(-180deg)"}
              mb="2px"
              ml="2"
              transition="all .2s"
            />
          </Button>
        </HStack>
      </VStack>
    </Card>
  );
};
