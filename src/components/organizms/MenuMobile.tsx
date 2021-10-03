import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { VStack, HStack } from '@chakra-ui/layout';
import { UKIcon } from 'components/atoms/Icons/UKIcon';
import { NavMenuLink } from 'components/molecules/NavMenuLink/NavMenuLink';
import React from 'react';

interface MenuMobileProps {
  menuOpen: boolean;
  setMenuOpen: (boolean) => void;
}

export const MenuMobile: React.FC<MenuMobileProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  return (
    <VStack
      position="fixed"
      display={menuOpen ? 'block' : 'none'}
      h="100vh"
      top="50px"
      left="0"
      bottom="0"
      right="0"
      bg="white"
      pt={['3', '5']}
      zIndex="-1"
      overflowY="scroll"
    >
      <NavMenuLink
        heading="Catalog"
        to="/catalog"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink heading="Services" to="/services" />

      <NavMenuLink heading="Blog" to="/blog" />
      <NavMenuLink heading="MiniCategory" to="/miniCategory" />
      <NavMenuLink heading="Top Brands" to="/topBrands" />
      <NavMenuLink heading="Dealers" to="/dealers" />
      <NavMenuLink heading="Contact" to="/contact" />

      <HStack justifyContent="space-around" pt="4" spacing="2">
        <Button w="40%">
          <Icon as={UKIcon} />
        </Button>
        <Button w="40%"> GEL</Button>
      </HStack>
    </VStack>
  );
};
