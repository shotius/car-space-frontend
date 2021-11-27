import { StackProps, VStack } from '@chakra-ui/layout';

interface SelectOptionsWrapperProps {
  isOpen: boolean;
}

export const SelectOptions: React.FC<SelectOptionsWrapperProps & StackProps> =
  ({ isOpen, children, maxH = '310px',p="8px 0",  ...rest }) => {
    return (
      <VStack
        w="full"
        zIndex="overlay"
        position="absolute"
        top={!isOpen ? '41px' : '45px'}
        maxH={isOpen ? maxH : '0px'}
        opacity={isOpen ? '1' : '0.7'}
        transition="all .25s"
        bg="white"
        boxShadow="0px 3px 10px #00000029"
        borderRadius="8px"
        p={isOpen ? p : '0'}
        // overflow needs to be here, to totaly hide options
        overflowY={isOpen ? 'auto' : 'hidden'}
        {...rest}
      >
        <VStack
          w="full"
          overflowY={isOpen ? 'auto' : 'hidden'}
          overflowX="hidden"
          align="flex-start"
          pt="2`"
          spacing="0"
          css={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
              overflow: 'hidden',
              marginTop: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#DEDEE0',
              borderRadius: '100px',
            },
            '::-webkit-scrollbar-button': {
              backgroundColor: 'white',
              display: 'block',
              visibility: 'hidden',
              borderStyle: 'solid',
              height: '3px',
              width: '6px',
            },
          }}
        >
          {children}
        </VStack>
      </VStack>
    );
  };
