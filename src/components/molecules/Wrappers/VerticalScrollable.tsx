import { StackProps, VStack } from '@chakra-ui/layout';

export const VerticalScrollable: React.FC<StackProps> = ({
  children,
  ...rest
}) => {
  return (
    <VStack

      overflowY="scroll"
      h="full"
      w="full"
      spacing="0"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#DEDEE0',
          borderRadius: '100px',
        },
      }}
    {...rest}
    >
      {children}
    </VStack>
  );
};
