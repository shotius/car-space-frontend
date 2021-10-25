import { BoxProps } from '@chakra-ui/layout';
import { Card } from '../Card';

interface FilterWrapProps {}

export const FilterWrap: React.FC<FilterWrapProps & BoxProps> = ({children, ...rest}) => {
  return (
    <Card
      bg={{ base: 'transparent', md: 'autoBlue.400' }}
      p={{ md: '4', xl: '16px', '2xl': '24px' }}
      w="full"
      minH="auto"
      {...rest}
    >
      {children}
    </Card>
  );
};
