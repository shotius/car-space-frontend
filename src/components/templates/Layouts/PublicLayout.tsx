import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Footer } from 'components/organizms/Footer/Footer';
import { Header } from 'components/organizms/Header';
import React from 'react';

interface PublicLayoutProps {}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Box w="full" direction="column" minH="100vh">
      <Box
        position="sticky"
        h={['50px', '60px']}
        top="0"
        bg="white"
        zIndex="10"
        boxShadow="md"
      >
        <Header />
      </Box>
      <Container maxW="8xl" bg="#f4f4f5" minH="200vh">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
