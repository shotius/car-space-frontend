import { HStack, VStack } from '@chakra-ui/layout';
import { StackDivider } from '@chakra-ui/react';
import { useRef } from 'react';
import { NavMenuLink } from 'src/components/molecules/Links/NavMenuLink';
import { useAppSelector } from 'src/redux/app/hook';
import { MobileCurencyPopover } from '../PopOvers/Mobile/MobileCurencyPopover';
import { MobileLanguagePopover } from '../PopOvers/Mobile/MobileLanguagePopover';

interface MenuMobileProps {
  menuOpen: boolean;
  setMenuOpen: (a: boolean) => void;
}

export const MenuMobile: React.FC<MenuMobileProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const {catalogQuery} = useAppSelector(state => state.globalAppState)

  return (
    <VStack
      boxShadow={menuOpen ? '-20px 0px 100px rgba(0, 0, 0, 0.2)' : ''}
      position="fixed"
      h="150vh"
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
        to={`/catalog?${catalogQuery || ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <NavMenuLink
        heading="Services"
        to="/services"
        onClick={() => setMenuOpen(false)}
      />

      <NavMenuLink
        heading="Blog"
        to="/blogs"
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

      <VStack w="full" minH="300px" ref={popoverRef}>
        <HStack justifyContent="space-around" pt="4" spacing="2" w="full">
          {popoverRef.current && (
            <>
              <MobileLanguagePopover popupDiv={popoverRef.current} />
              <MobileCurencyPopover popoverDiv={popoverRef.current} />
            </>
          )}
        </HStack>
      </VStack>
    </VStack>
  );
};
