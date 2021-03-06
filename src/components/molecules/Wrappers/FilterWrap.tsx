import { BoxProps } from '@chakra-ui/layout';
import { Card } from '../Cards/Card';

interface FilterWrapProps {}

export const FilterWrap: React.FC<FilterWrapProps & BoxProps> = ({
  children,
  ...rest
}) => {
  return (
    <Card
      bg={['transparent',null,  'autoBlue.400']}
      p={['0', null, '16px']}
      w="full"
      minH="auto"
      {...rest}
    >
      {children}
    </Card>
  );
};
