import { Center, Spinner } from "@chakra-ui/react";

interface PageLoadingSpinnerProps {}

export const PageLoadingSpinner: React.FC<PageLoadingSpinnerProps> = ({}) => {
  return (
    <Center w="full" bg="white" h="100vh">
      <Spinner h="30px" w="30px" thickness="1px" />
    </Center>
  );
};
