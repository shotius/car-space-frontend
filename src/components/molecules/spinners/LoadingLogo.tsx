import { Center, VStack, Icon, Spinner } from "@chakra-ui/react";
import { LogoIcon } from "../../atoms/Icons/LogoIcon";

interface loadingLogoProps {}

export const LoadingLogo: React.FC<loadingLogoProps> = ({}) => {
  return (
    <Center w="full" h="80vh">
      <VStack spacing="0">
        <Icon as={LogoIcon} boxSize={['150px', null, null, '200px']} />
        <Spinner h="30px" w="30px" thickness="1px" />
      </VStack>
    </Center>
  );
};
