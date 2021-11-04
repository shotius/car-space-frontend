import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter>
        <Center pt="8">
          <VStack w="full">
            <Heading>Services</Heading>
            <Flex w="full" border="1px" alignItems="start">
              <Box w="full" flex="1" overflowY="auto" bg="red">
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
              </Box>
              <VStack style={{background: "pink"}}>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
                <TextRegular>Lorem</TextRegular>
              </VStack>
            </Flex>
          </VStack>
        </Center>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default ServicesPage;
