import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Divider, Flex, HStack, VStack } from '@chakra-ui/layout';
import { IconButton } from 'components/molecules/IconButton';
import * as React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Flex direction="column" h={['50px', '60px']}>
      <Flex
        bg={'white'}
        p={1}
        boxShadow="md"
        h="100%"
        alignItems="center"
        zIndex="11"
      >
        Logo
        <HStack ml="auto" display={['none', 'block']}>
          <Link to="/home">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/login">login</Link>
        </HStack>
        <HStack ml="auto" display={['flex', 'none']}>
          <IconButton icon={BsPerson} />
          <IconButton
            icon={AiOutlineMenu}
            onClick={() => setMenuOpen(true)}
            display={menuOpen ? 'none' : 'inline-block'}
          />
          <IconButton
            icon={AiOutlineClose}
            display={menuOpen ? 'block' : 'none'}
            onClick={() => setMenuOpen(false)}
          />
        </HStack>
      </Flex>
      <VStack
        position="fixed"
        display={menuOpen ? 'block' : 'none'}
        h="100vh"
        w="100vw"
        top="50px"
        left="0"
        bg="white"
        zIndex="10"
        px="4"
        pt="3"
      >
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/catalog">Catalog</Link>
          {/* <Icon as={FaGreaterThan} fontWeight="100"/> */}
          &gt;
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/services">Services</Link>
          &gt;
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/blog">Blog</Link>
          &gt;
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/minicategory">Mini Category</Link>
          &gt;
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/topbrands">Top Brands</Link>
          &gt;
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/dealers">Dealers</Link>
          &gt;
        </Flex>
        <Divider />
        <Flex justifyContent="space-between" alignContent="center" px="4">
          <Link to="/contact">Contact</Link>
          &gt;
        </Flex>
        <Divider />
        <HStack justifyContent="space-around" pt="4" spacing="2">
          <Button w="40%">
            <Icon />
          </Button>
          <Button w="40%"> GEL</Button>
        </HStack>
      </VStack>
    </Flex>
  );
};
