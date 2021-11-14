import { Button } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { VStack, HStack } from '@chakra-ui/layout';
import { StackDivider } from '@chakra-ui/react';
import { UKIcon } from 'src/components/atoms/Icons/UKIcon';
import { NavMenuLink } from 'src/components/molecules/Links/NavMenuLink';
import { CurrencyType } from 'src/constants';
import { MobileCurencyPopupver } from '../PopOvers/Mobile/MobileCurencyPopupver';

interface MenuMobileProps {
  menuOpen: boolean;
  setMenuOpen: (boolean) => void;
}

export const MenuMobile: React.FC<MenuMobileProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const lang = 'Eng';
  const currency: CurrencyType = 'GEL';

  const iconLang = () => {
    switch (lang) {
      case 'Eng':
        return UKIcon;
    }
  };

  return (
    <VStack
      boxShadow={menuOpen ? '-20px 0px 100px rgba(0, 0, 0, 0.2)' : ''}
      position="fixed"
      h="100vh"
      top={['50px', null, '60px']}
      left={menuOpen ? '0' : '100%'}
      right="0"
      w="100vw"
      transition="box-shadow .3s,left 0.7s "
      bg="white"
      pt={['3', '5']}
      zIndex="-1"
      overflowY="scroll"
      divider={<StackDivider />}
      pb="400px" // padding added because the last row was not visible
    >
      <NavMenuLink
        heading="Catalog"
        to="/catalog"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink
        heading="Services"
        to="/services"
        onClick={() => setMenuOpen(false)}
      />

      <NavMenuLink
        heading="Blog"
        to="/blog"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink
        heading="Mini category"
        to="/miniCategory"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink
        heading="Top brands"
        to="/topBrands"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink
        heading="Dealers"
        to="/dealers"
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink
        heading="Contact"
        to="/contact"
        onClick={() => setMenuOpen(false)}
      />

      <HStack justifyContent="space-around" pt="4" spacing="2" w="full">
        <Button w="40%" bg="autoGrey.200">
          <Icon as={iconLang()} boxSize="6" />
        </Button>
        <MobileCurencyPopupver currency={currency} />
      </HStack>
    </VStack>
  );
};
