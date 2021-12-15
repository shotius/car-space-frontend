import { Box, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Footer } from 'src/components/organizms/Footer/Footer';
import { Header } from 'src/components/organizms/Header';
import { MenuMobile } from 'src/components/organizms/LoginForm/MenuMobile';

interface PublicLayoutProps {}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box w="full" direction="column" minH="100vh" bg="#e8e8e8">
      <Box
        position="fixed"
        w="full"
        h={['50px', '60px', '70px', null, '80px']}
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
        <MenuMobile />
      </Container>
      <Footer />
    </Box>
  );
};
