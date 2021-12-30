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
import { dateToDMY } from 'src/utils/functions/dateToDMY';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { IOrderedCar } from '../../../../../server/shared_with_front/types/types-shared';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { NotSpecified } from '../Texts/NotSpecified';
import { Card } from './Card';

interface OrderListCardProps {
  order: IOrderedCar;
}

export const OrderListCard: React.FC<OrderListCardProps> = ({ order }) => {
  const { createdAt: cD, deliveryAt: dD } = order;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Card w="full" pb="0">
      <VStack w="full" p="2">
        <HStack w="full" justify="space-between">
          <TextSecondary>Order Id</TextSecondary>
          <HeadingSecondary>{order.id}</HeadingSecondary>
        </HStack>
        <Divider w="full" />
        <HStack w="full" justify="space-between">
          <TextSecondary>Name</TextSecondary>
          <HeadingSecondary>{order.carName}</HeadingSecondary>
        </HStack>
        <Divider w="full" />
        <HStack w="full" justify="space-between">
          <TextSecondary>Created</TextSecondary>
          <HeadingSecondary>
            {cD ? dateToDMY(cD) : <NotSpecified />}
          </HeadingSecondary>
        </HStack>
        <Divider w="full" />
        <HStack w="full" justify="space-between">
          <TextSecondary>Dealivery</TextSecondary>
          <HeadingSecondary>{dD && dateToDMY(dD)}</HeadingSecondary>
        </HStack>
        <Divider w="full" />
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
                  {toTrippleNumber(order.price)} USD
                </HeadingSecondary>
              </HStack>
              <HStack w="full" justify="space-between">
                <TextSecondary>Status</TextSecondary>
                <HeadingSecondary>{order.status}</HeadingSecondary>
              </HStack>
            </VStack>
          </Collapse>
        </Box>
        <Divider w="full" display={isOpen ? 'block' : 'none'} />
        <HStack>
          <Button variant="ghost" bg="transparent" onClick={onToggle}>
            {isOpen ? 'See less' : 'See more'}
            <Icon
              as={DropdownIcon}
              transform={!isOpen ? 'rotate(0deg)' : 'rotate(-180deg)'}
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
