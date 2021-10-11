import { Center, Heading } from '@chakra-ui/layout';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react'

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