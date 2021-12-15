import { Box, Divider, HStack, VStack } from '@chakra-ui/layout';
import { Collapse, Icon, useDisclosure } from '@chakra-ui/react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { ButtonRect } from 'src/components/molecules/Buttons/ButtonRect';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { NavMenuLink } from 'src/components/molecules/Links/NavMenuLink';
import { SelectOverlay } from 'src/components/molecules/overlays/SelectOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  setAppCurrency,
  setAppLanguage,
  toggleMobileMenu,
} from 'src/redux/features/global/gloabalSlice';
import { capitalize } from 'src/utils/functions/capitalize';

interface MenuMobileProps {}

export const MenuMobile: React.FC<MenuMobileProps> = ({}) => {
  const {
    catalogQuery,
    isMobileMenuOpen: menuOpen,
    lang,
    currency,
  } = useAppSelector((state) => state.globalAppState);
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleMobileMenu());

  const { isOpen: isLangOpen, onToggle: toggleLang } = useDisclosure();
  const { isOpen: isCurrOpen, onToggle: toggleCurr } = useDisclosure();

  const language = () => {
    switch (lang) {
      case 'Eng':
        return 'English';
      case 'Geo':
        return 'Georgian';
      case 'Rus':
        return 'Russian';
    }
  };

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
        pt="30%"
        align="flex-end"
        px="24px"
        zIndex="1"
        overflowY="scroll"
        pb="500px" // padding added because the last row was not visible
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

        <NavMenuLink heading="Blog" to="/blog" onClick={() => onToggle()} />
        <Divider w="50px" />

        <Box h="full" w="full">
          <ButtonRect ml="auto" fontSize="18px" onClick={toggleLang}>
            <HStack w="full" justify="space-between">
              <Icon
                as={DropdownIcon}
                boxSize={3}
                transform={isLangOpen ? 'rotate(-180deg)' : ''}
                transition="all 0.3s"
              />
              <TextRegular>{language()}</TextRegular>
            </HStack>
          </ButtonRect>
          <Collapse in={isLangOpen}>
            <VStack w="full" align="end" px="8" py="2" spacing={4}>
              <TextButton
                onClick={() => {
                  toggleLang();
                  dispatch(setAppLanguage('Geo'));
                }}
              >
                Georgian
              </TextButton>
              <TextButton
                onClick={() => {
                  dispatch(setAppLanguage('Eng'));
                  toggleLang();
                }}
              >
                English
              </TextButton>
              <TextButton
                onClick={() => {
                  dispatch(setAppLanguage('Rus'));
                  toggleLang();
                }}
              >
                Russian
              </TextButton>
            </VStack>
          </Collapse>

          <ButtonRect ml="auto" fontSize="18px" onClick={toggleCurr}>
            <HStack w="full" justify="space-between">
              <Icon
                as={DropdownIcon}
                boxSize={3}
                transform={isCurrOpen ? 'rotate(-180deg)' : ''}
                transition="all 0.3s"
              />
              <TextRegular>{capitalize(currency)}</TextRegular>
            </HStack>
          </ButtonRect>
          <Collapse in={isCurrOpen}>
            <VStack w="full" align="end" px="8" py="2" spacing={4}>
              <TextButton
                onClick={() => {
                  dispatch(setAppCurrency('GEL'));
                  toggleCurr();
                }}
              >
                Gel
              </TextButton>
              <TextButton
                onClick={() => {
                  dispatch(setAppCurrency('EUR'));
                  toggleCurr();
                }}
              >
                Eur
              </TextButton>
              <TextButton
                onClick={() => {
                  dispatch(setAppCurrency('USD'));
                  toggleCurr();
                }}
              >
                Usd
              </TextButton>
            </VStack>
          </Collapse>
        </Box>
      </VStack>
    </>
  );
};
