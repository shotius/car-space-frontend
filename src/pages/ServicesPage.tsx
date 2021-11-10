import { Center, Heading, VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';

interface ServicesPageProps {}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter>
        <Center pt="8">
          <VStack w="full">
            <Heading>Services</Heading>
          </VStack>
        </Center>
      </ContainerOuter>
    </PublicLayout>
  );
};

export default ServicesPage;
