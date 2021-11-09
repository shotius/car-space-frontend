import { Button, HStack, Icon, StackDivider, VStack } from '@chakra-ui/react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { Card } from './Card';

interface OrderListCardProps {}

export const OrderListCard: React.FC<OrderListCardProps> = ({}) => {
  return (
    <Card w="full" pb="0">
      <VStack divider={<StackDivider />} w="full" p="2">
        <HStack w="full" justify="space-between">
          <TextSecondary>Order Name</TextSecondary>
          <HeadingSecondary>12341324</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Name</TextSecondary>
          <HeadingSecondary>Chevrolet</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Created</TextSecondary>
          <HeadingSecondary>01.01.2021</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Dealivery</TextSecondary>
          <HeadingSecondary>01.03.2021</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Location</TextSecondary>
          <HeadingSecondary>USA</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Total Price</TextSecondary>
          <HeadingSecondary>10 000 USD</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextSecondary>Status</TextSecondary>
          <HeadingSecondary>Complated</HeadingSecondary>
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
