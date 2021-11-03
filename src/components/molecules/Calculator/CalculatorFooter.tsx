import { Divider, HStack, VStack, StackProps } from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface CalculatroFooterProps {}

export const CalculatorFooter: React.FC<CalculatroFooterProps & StackProps> = ({
  children,
  ...rest
}) => {
  return (
    <VStack
      w="full"
      position="absolute"
      bottom="0"
      p="0px 32px 32px"
      {...rest}
    >
      <Divider />
      {children || (
        <HStack w="full" justify="space-between">
          <TextRegular>Total</TextRegular>
          <HeadingSecondary color="autoOrange.500">$ 200</HeadingSecondary>
        </HStack>
      )}
    </VStack>
  );
};
