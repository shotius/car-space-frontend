import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Divider, Flex, HStack, VStack } from '@chakra-ui/layout';
import { IconButton } from 'components/molecules/IconButton';
import { NavMenuLink } from 'components/molecules/NavMenuLink/NavMenuLink';
import * as React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <Flex direction="column" h={['50px', '60px']}>
      {/* desktop view */}
      <Flex w="full" h="full" alignItems="center">
        Logo
        <HStack ml="auto" display={['none', 'block']}>
          <Link to="/home">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/login">login</Link>
        </HStack>
        {/* mobile view */}
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
        px="4"
        pt="3"
        zIndex="-2"
      >
        <NavMenuLink heading="Catalog" to="/catalog"/>
        <NavMenuLink heading="Services" to="/services"/>
        <NavMenuLink heading="Blog" to="/blog"/>
        <NavMenuLink heading="MiniCategory" to="/miniCategory"/>
        <NavMenuLink heading="Top Brands" to="/topBrands"/>
        <NavMenuLink heading="Dealers" to="/dealers"/>
        <NavMenuLink heading="Contact" to="/contact"/>
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
