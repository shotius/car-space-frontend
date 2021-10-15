import { Input } from '@chakra-ui/input';
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { DrawerExample } from 'src/components/molecules/SimpleDrawer';
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
            <Flex w="full" h="400px" border="1px" direction="column">
              <Box p="40px" bg="white">
                <Input placeholder="Search"/>
              </Box>
              <VStack w="full" bg="teal.500" flex="1" overflowY="auto">
                  <TextRegular>Lorem</TextRegular>
                  <TextRegular>Lorem</TextRegular>
                  <TextRegular>Lorem</TextRegular>
                  <TextRegular>Lorem</TextRegular>


              <DrawerExample />
              </VStack>
            </Flex>
          </VStack>
        </Center>
      </ContainerOuter>
    </PublicLayout>
  );
};
