import { Center, Heading } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
 

interface ServicesPageProps {

}

export const ServicesPage: React.FC<ServicesPageProps> = () => {
    return (
      <PublicLayout>
        <ContainerOuter>
          <Center pt="8">
          <Heading>Services</Heading>
          </Center>
        </ContainerOuter>
      </PublicLayout>
    );
}