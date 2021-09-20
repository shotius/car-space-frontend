import { Container, Flex } from '@chakra-ui/layout';
import { Footer } from 'components/organizms/Footer/Footer';
import { Header } from 'components/organizms/Header';
import React from 'react';

interface PublicLayoutProps {}

export const PublicLayout: React.FC<PublicLayoutProps> = ({children}) => {
  return (
    <Flex w="full" direction="column" minH="100vh" >
      <Header />
      <Container maxW="8xl" bg="gray.300">{children}</Container>
      <Footer />
    </Flex>
  );
};
