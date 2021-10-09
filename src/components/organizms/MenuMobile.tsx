import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { VStack, HStack } from '@chakra-ui/layout';
import { StackDivider } from '@chakra-ui/react';
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
      transition="all .6s ease-in-out"
      h="100vh"
      top="50px"
      left={menuOpen ? "0" : "100%"} 
      bottom="0"
      right="0"
      bg="white"
      pt={['3', '5']}
      zIndex="-1"
      overflowY="scroll"
      divider={<StackDivider />}
      pb="200px" // padding added because the last row was not visible
    >
      <NavMenuLink
        heading="Catalog"
        to="/catalog"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink heading="Services" to="/services"  onClick={() => setMenuOpen(false)}/>

      <NavMenuLink heading="Blog" to="/blog"onClick={() => setMenuOpen(false)}/>
      <NavMenuLink heading="MiniCategory" to="/miniCategory" onClick={() => setMenuOpen(false)}/>
      <NavMenuLink heading="Top Brands" to="/topBrands" onClick={() => setMenuOpen(false)}/>
      <NavMenuLink heading="Dealers" to="/dealers" onClick={() => setMenuOpen(false)}/>
      <NavMenuLink heading="Contact" to="/contact" onClick={() => setMenuOpen(false)}/>

      <HStack justifyContent="space-around" pt="4" spacing="2" w="full">
        <Button w="40%">
          <Icon as={UKIcon} boxSize="6" />
        </Button>
        <Button w="40%"> GEL</Button>
      </HStack>
    </VStack>
  );
};
