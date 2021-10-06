import { Box, Container } from '@chakra-ui/react';
import { Footer } from 'components/organizms/Footer/Footer';
import { Header } from 'components/organizms/Header';
import React from 'react';

interface PublicLayoutProps {}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <Box w="full" direction="column" minH="100vh">
      <Box
        position="sticky"
        h={[
          '50px', // < 480px sm mobile
          '60px', // < 768px md miniTablet
          '70px', // < 992px lg bigTablt
          null,   // < 1280px xl laptop
          '80px', // < 1536px 2xl HFD
        ]}
        top="0"
        bg="white"
        zIndex="10"
        boxShadow="md"
      >
        <Header />
      </Box>
      <Container maxW="1920" bg="#f4f4f5" minH="200vh" p="0">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
