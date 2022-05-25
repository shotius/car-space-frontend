import { Box, Divider, HStack, VStack } from '@chakra-ui/layout';
import { Collapse, Icon, useDisclosure } from '@chakra-ui/react';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';
import { ButtonRect } from 'src/components/molecules/Buttons/ButtonRect';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { NavMenuLink } from 'src/components/molecules/Links/NavMenuLink';
import { CustomOverlay } from 'src/components/molecules/overlays/CustomOverlay';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  changeCurrency,
  setAppLanguage,
  toggleMobileMenu,
} from 'src/redux/features/global/gloabalSlice';
import { DEALER_CARS_CATALOG_URL } from 'src/utils/config/contants';
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
      <CustomOverlay
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
        h="110vh" // to prevent appear button of the menu
        top={['50px', null, '60px']}
        right={menuOpen ? '0px' : '-270px'}
        w="270px"
        transition="box-shadow .3s,right 0.5s "
        bg="white"
        zIndex="1"
        overflowY="scroll"
      >
        {/* Second vstack added to center the content  */}
        <VStack
          w="full"
          position={'absolute'}
          top="38%"
          transform={'translateY(-50%)'}
          px="24px"
        >
          <NavMenuLink
            heading="Catalog"
            to={`${DEALER_CARS_CATALOG_URL}?${catalogQuery || ''}`}
            onClick={() => onToggle()}
          />
          <NavMenuLink
            heading="Services"
            to="/services"
            onClick={() => onToggle()}
          />

          <NavMenuLink heading="Blog" to="/blog" onClick={() => onToggle()} />
          <Divider w="50px" />

          {/* Currency and language pickers  */}
          <Box h="full" w="full">
            {/* Language picker  */}
            <ButtonRect ml="auto" fontSize="18px" onClick={toggleLang}>
              <HStack w="full" justify="space-between">
                <Icon
                  as={DropdownIcon}
                  boxSize={3}
                  transform={isLangOpen ? 'rotate(-180deg)' : ''}
                  transition="all 0.3s"
                />
                <TextRegular fontSize="18px">{language()}</TextRegular>
              </HStack>
            </ButtonRect>
            <Collapse in={isLangOpen}>
              <VStack w="full" align="flex-end" px="8" py="2" spacing={4}>
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

            {/* Currency picker  */}
            <ButtonRect ml="auto" fontSize="18px" onClick={toggleCurr}>
              <HStack w="full" justify="space-between">
                <Icon
                  as={DropdownIcon}
                  boxSize={3}
                  transform={isCurrOpen ? 'rotate(-180deg)' : ''}
                  transition="all 0.3s"
                />
                <TextRegular fontSize="inherit">
                  {capitalize(currency)}
                </TextRegular>
              </HStack>
            </ButtonRect>
            <Collapse in={isCurrOpen}>
              <VStack w="full" align="flex-end" px="8" py="2" spacing={4}>
                <TextButton
                  onClick={() => {
                    dispatch(changeCurrency('GEL'));
                    toggleCurr();
                  }}
                >
                  Gel
                </TextButton>
                <TextButton
                  onClick={() => {
                    dispatch(changeCurrency('EUR'));
                    toggleCurr();
                  }}
                >
                  Eur
                </TextButton>
                <TextButton
                  onClick={() => {
                    dispatch(changeCurrency('USD'));
                    toggleCurr();
                  }}
                >
                  Usd
                </TextButton>
              </VStack>
            </Collapse>
          </Box>
        </VStack>
      </VStack>
    </>
  );
};
