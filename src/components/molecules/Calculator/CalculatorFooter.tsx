import { Divider, HStack, StackProps, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import useCurrencyIcon from 'src/utils/hooks/useCurrencyIcon';
import { SizeContext } from '../../organizms/Calculator/CalculatorDesktop';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface CalculatroFooterProps {
  total?: number
}

export const CalculatorFooter: React.FC<CalculatroFooterProps & StackProps> = ({
  total=0, 
  children,
  ...rest
}) => {
  const size = useContext(SizeContext);
  const icon = useCurrencyIcon()

  return (
    <VStack
      w="full"
      position="absolute"
      bottom={['-15px', null, '0px']}
      p={size === 'regular' ? '0px 32px 32px' : [null, '60px 40px', '0 82px 82px']}
      {...rest}
    >
      <Divider w="full" />
      {children || (
        <HStack w="full" justify="space-between" bg="white">
          <TextRegular>Total</TextRegular>
          <HeadingSecondary
            color="autoOrange.500"
            fontSize={size === 'regular' ? '20px' : '20px'}
          >
            {icon} {(total).toFixed(3)}
          </HeadingSecondary>
        </HStack>
      )}
    </VStack>
  );
};
