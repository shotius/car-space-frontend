import { Divider, HStack, VStack, StackProps } from '@chakra-ui/react';
import { useContext } from 'react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';
import { SizeContext } from './CalculatorDesktop';

interface CalculatroFooterProps {}

export const CalculatorFooter: React.FC<CalculatroFooterProps & StackProps> = ({
  children,
  ...rest
}) => {
  const size = useContext(SizeContext);
  console.log('size', size);

  return (
    <VStack
      w="full"
      position="absolute"
      bottom="0px"
      p={size === 'regular' ? '0px 32px 32px' : '0 82px 82px'}
      {...rest}
    >
      <Divider />
      {children || (
        <HStack w="full" justify="space-between">
          <TextRegular>Total</TextRegular>
          <HeadingSecondary
            color="autoOrange.500"
            fontSize={size === 'regular' ? '16px' : '20px'}
          >
            $ 200
          </HeadingSecondary>
        </HStack>
      )}
    </VStack>
  );
};
