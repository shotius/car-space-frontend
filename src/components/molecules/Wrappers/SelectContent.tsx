import { StackProps, VStack } from '@chakra-ui/layout';

export const SelectContent: React.FC<StackProps> = ({
  position = 'relative',
  children,
  ...rest
}) => {
  return (
    <VStack w="full" position="relative" {...rest}>
      {children}
    </VStack>
  );
};
