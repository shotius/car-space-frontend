import { StackProps, VStack } from '@chakra-ui/layout';

export const SelectContent: React.FC<StackProps> = ({
  position = 'relative',
  children,
  ...rest
}) => {
  return (
    <VStack position="relative" {...rest}>
      {children}
    </VStack>
  );
};
