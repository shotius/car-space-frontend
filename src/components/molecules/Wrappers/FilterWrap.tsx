import { BoxProps } from '@chakra-ui/layout';
import { Card } from '../Cards/Card';

interface FilterWrapProps {}

export const FilterWrap: React.FC<FilterWrapProps & BoxProps> = ({children, ...rest}) => {
  return (
    <Card
      bg={{ base: 'transparent', md: 'autoBlue.400' }}
      p={{ md: '4', lg: '16px' }}
      w="full"
      minH="auto"
      {...rest}
    >
      {children}
    </Card>
  );
};
