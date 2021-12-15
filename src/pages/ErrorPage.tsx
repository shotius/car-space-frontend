import { Center, Heading } from '@chakra-ui/layout';
import { VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface ErrorPageProps {}

export const ErrorPage: React.FC<ErrorPageProps> = () => {
  const history = useHistory();
  return (
    <Center h="100vh">
      <VStack p="4">
        <Heading textAlign="center" fontSize="133px" color="#FB5607">
          404
        </Heading>
        <TextRegular textAlign="center">
          OOPS, PAGE YOU ARE LOOKING FOR CAN NOT BE FOUND
        </TextRegular>
        <TextButton fontFamily="Roboto Medium" onClick={() => history.replace('/home')} color="#427AD6">
          Back To Home
        </TextButton>
      </VStack>
    </Center>
  );
};
