import { HStack, VStack } from '@chakra-ui/layout';
import { StackDivider } from '@chakra-ui/react';
import { useRef } from 'react';
import { NavMenuLink } from 'src/components/molecules/Links/NavMenuLink';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleMobileMenu } from 'src/redux/features/global/gloabalSlice';
import { MobileCurencyPopover } from '../PopOvers/Mobile/MobileCurencyPopover';
import { MobileLanguagePopover } from '../PopOvers/Mobile/MobileLanguagePopover';

interface MenuMobileProps {}

export const MenuMobile: React.FC<MenuMobileProps> = ({}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const { catalogQuery, isMobileMenuOpen: menuOpen } = useAppSelector(
    (state) => state.globalAppState
  );
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleMobileMenu());

  return (
    <>
      <SelectOverlay
        onClick={() => onToggle()}
        isActive={menuOpen}
        bg="black"
        opacity={0.5}
        zIndex="1"
        h="140vh"
      />
      <VStack
        boxShadow={menuOpen ? '-20px 0px 100px rgba(0, 0, 0, 0.2)' : ''}
        position="fixed"
        h="150vh"
        top={['50px', null, '60px']}
        right={menuOpen ? '0px' : '-270px'}
        w="270px"
        transition="box-shadow .3s,right 0.7s "
        bg="white"
        pt={['3', '5']}
        zIndex="1"
        overflowY="scroll"
        divider={<StackDivider />}
        pb="400px" // padding added because the last row was not visible
      >
        <NavMenuLink
          heading="Catalog"
          to={`/catalog?${catalogQuery || ''}`}
          onClick={() => onToggle()}
        />
        <NavMenuLink
          heading="Services"
          to="/services"
          onClick={() => onToggle()}
        />

        <NavMenuLink heading="Blog" to="/blogs" onClick={() => onToggle()} />
        <NavMenuLink
          heading="Mini category"
          to="/miniCategory"
          onClick={() => onToggle()}
        />
        <NavMenuLink
          heading="Top brands"
          to="/topBrands"
          onClick={() => onToggle()}
        />
        <NavMenuLink
          heading="Dealers"
          to="/dealers"
          onClick={() => onToggle()}
        />
        <NavMenuLink
          heading="Contact"
          to="/contact"
          onClick={() => onToggle()}
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
    </>
  );
};
