import { Center, Spinner } from '@chakra-ui/react';

interface PageLoadingSpinnerProps {}

export const PageLoadingSpinner: React.FC<PageLoadingSpinnerProps> = ({}) => {
  return (
    <Center w="full" h="80vh" position="fixed">
      <Spinner h="30px" w="30px" thickness="1px" />
    </Center>
  );
};
