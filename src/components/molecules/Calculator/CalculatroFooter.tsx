import { VStack, Divider, HStack } from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface CalculatroFooterProps {}

export const CalculatroFooter: React.FC<CalculatroFooterProps> = ({}) => {
  return (
    <VStack w="full">
      <Divider />
      <HStack w="full" justify="space-between">
        <TextRegular>Total</TextRegular>
        <HeadingSecondary color="autoOrange.500">$ 200</HeadingSecondary>
      </HStack>
    </VStack>
  );
};
