import { Box, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Footer } from 'src/components/organizms/Footer/Footer';
import { Header } from 'src/components/organizms/Header';
import { HEADER_HEIGHT } from 'src/constants/index';

interface PublicLayoutProps {}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box w="full" direction="column" minH="100vh" bg="#e8e8e8">
      <Box
        position="sticky"
        h={HEADER_HEIGHT}
        top="0"
        bg="white"
        zIndex="modal"
        boxShadow="md"
      >
        <Header />
      </Box>
      <Container
        maxW="1920px"
        bg="#F0F0F0"
        minH="90vh"
        pb={['64px', '85px', '101px', '138px']}
        pl="0"
        pr="0"
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
