import { StackProps, VStack } from '@chakra-ui/layout';

interface SelectOptionsWrapperProps {
  isOpen: boolean;
}

export const SelectOptions: React.FC<SelectOptionsWrapperProps & StackProps> =
  ({ isOpen, children, ...rest }) => {
    return (
      <VStack
        w="full"
        minW="200px"
        zIndex="modal"
        position="absolute"
        top={!isOpen ? '41px' : '45px'}
        h={isOpen ? '300px' : '0px'}
        opacity={isOpen ? '1' : '0.7'}
        transition="all .25s"
        bg="white"
        boxShadow="0px 3px 10px #00000029"
        borderRadius="8px"
        p={isOpen ? '8px 0' : '0'}
        // overflow needs to be here, to totaly hide options
        overflowY={isOpen ? 'auto' : 'hidden'}
        {...rest}
      >
        <VStack
          w="full"
          overflowY={isOpen ? 'auto' : 'hidden'}
          align="flex-start"
          p="0"
          pt="2"
          spacing="0"
        >
          {children}
        </VStack>
      </VStack>
    );
  };
