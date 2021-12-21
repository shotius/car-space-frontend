import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import Icon from '@chakra-ui/icon';
import { Flex, HStack, StackDivider } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CarSpaceLogo } from 'src/components/atoms/CarSpaceLogo';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BurgerIcon } from 'src/components/atoms/Icons/BurgerIcon';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { PersonIcon } from 'src/components/atoms/Icons/PersonIcon';
import { ButtonOutline } from 'src/components/molecules/Buttons/ButtonOutline';
import { MenuLink } from 'src/components/molecules/Links/MenuLink';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { logoutUser } from 'src/redux/features/auth/authSlice';
import {
  toggleLogin,
  toggleMobileAuthorization,
  toggleMobileMenu,
  toggleRegistration,
} from 'src/redux/features/global/gloabalSlice';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { LoginRegisterDrawer } from '../Drawers/LoginRegisterDrawer';
import { LoginModal } from '../Modals/LoginModal';
import { RegisterModal } from '../Modals/RegisterModal';
import { CurrencyPopover } from '../PopOvers/CurrencyPopover';
import { LanguagePopover } from '../PopOvers/LanguagePopover';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [safeDocument, setSafeDocument] = useState<Document | null>(document);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const {
    isLoginOpen,
    isRegistrationOpen,
    isMobileRegisterLoginOpen,
    catalogQuery,
    isMobileMenuOpen: menuOpen,
  } = useAppSelector((state) => state.globalAppState);

  const { isAuthenticated, role, fullName } = useAppSelector(
    (state) => state.userInfoSlice
  );

  const { isDesktop, isMobile, isTablet } = useDetectScreen();
  const USER = localStorage.getItem('USER_ROLE');

  // Toggle mobile menu
  const toggleMenu = () => dispatch(toggleMobileMenu());

  // if mobile menu is open stop body scroll
  useEffect(() => {
    setSafeDocument(document);
    if (safeDocument) {
      if (menuOpen === true) {
        safeDocument.body.style.overflow = 'hidden';
      } else {
        safeDocument.body.style.overflow = 'auto';
      }
    }
    // clean up, without it I had a problem in nested routes
    return () => {
      setSafeDocument(null);
    };
  }, [menuOpen]);

  // curency change popover
  const { onClose: closeCurr } = useDisclosure();

  // language change popover
  const { onClose: closeLang } = useDisclosure();

  return (
    <ContainerOuter h="full" bg="white">
      {/* desktop view */}
      <Flex h="full" alignItems="center">
        <CarSpaceLogo
          onClick={() => {
            history.push('/home');
          }}
        />
        {/* menu links Desktop*/}
        {isDesktop && (
          <HStack
            ml="auto"
            display={['none', 'none', 'flex']}
            spacing={[null, null, '16px']}
            divider={
              <Center>
                <StackDivider h="25px" />
              </Center>
            }
          >
            <HStack spacing={[null, null, '16px', '24px', '32px']}>
              <MenuLink
                to={`/catalog${catalogQuery ? `?${catalogQuery}` : ''}`}
                label="Catalog"
              />
              <MenuLink to="/services" label="Services" />
              <MenuLink to="/blog" label="Blog" activeOnlyWhenExact={true} />
            </HStack>
            {/* popovers */}
            <HStack
              spacing={[null, null, '0px', '8px']}
              mr={[null, null, '-20px', '-15px']}
            >
              {/* choose currency */}
              <CurrencyPopover closePopover={closeCurr} />
              {/* choose languages */}
              <LanguagePopover closePopover={closeLang} />
            </HStack>

            {/* if user is authenticated login and register buttons are not shown */}
            {isAuthenticated ? (
              <ButtonOutline
                px="0"
                onClick={() => {
                  // if USER is deleted from localstorage logout
                  if (!USER) {
                    dispatch(logoutUser());
                  } else {
                    history.push(`/${role}/dashboard`);
                  }
                }}
              >
                <Icon as={PersonIcon} boxSize="4" mr="2" />
                <TextRegular
                  fontSize="16px"
                  w="55px"
                  isTruncated
                >{`${fullName}`}</TextRegular>
              </ButtonOutline>
            ) : (
              <HStack spacing={[null, null, '0', '2', null, '4']} ml="-15px">
                {/* Login Button  */}
                <Button
                  variant="ghost"
                  fontWeight="light"
                  fontSize="16px"
                  ml="1"
                  onClick={() => dispatch(toggleLogin())}
                  _hover={{
                    bg: 'autoGrey.200',
                  }}
                >
                  <TextRegular>Log in</TextRegular>
                </Button>
                {/* Login modal  */}
                <LoginModal
                  isOpen={isLoginOpen}
                  onClose={() => dispatch(toggleLogin())}
                  openRegister={() => {
                    dispatch(toggleLogin());
                    dispatch(toggleRegistration());
                  }}
                />
                {/* Register Button  */}
                <ButtonOutline
                  onClick={() => dispatch(toggleRegistration())}
                  transition="all 0.5s"
                >
                  <Icon as={PersonIcon} boxSize="4" />
                  <TextRegular ml="2" mt="1">
                    Register
                  </TextRegular>
                </ButtonOutline>
                {/* Register modal  */}
                <RegisterModal
                  isOpen={isRegistrationOpen}
                  onClose={() => dispatch(toggleRegistration())}
                  openLogin={() => {
                    dispatch(toggleRegistration());
                    dispatch(toggleLogin());
                  }}
                />
              </HStack>
            )}
          </HStack>
        )}

        {/* mobile view profile and menu hamburger*/}
        {isMobile || isTablet ? (
          <HStack
            ml="auto"
            display={['flex', 'flex', null, 'none']}
            spacing={0}
          >
            <IconButton
              aria-label="profile"
              icon={<PersonIcon boxSize="5" />}
              bg="transparent"
              onClick={() => {
                // if authenticated: redirect to you page, else open login
                if (!USER) {
                  dispatch(toggleMobileAuthorization());
                } else if (isAuthenticated) {
                  history.push(`/${role}/dashboard`);
                } else {
                  dispatch(toggleMobileAuthorization());
                }
              }}
            />

            <LoginRegisterDrawer
              isOpen={isMobileRegisterLoginOpen}
              onClose={() => dispatch(toggleMobileAuthorization())}
            />
            <IconButton
              aria-label="menu"
              icon={<BurgerIcon boxSize="6" />}
              bg="transparent"
              onClick={() => toggleMenu()}
              display={menuOpen ? 'none' : 'inline-block'}
            />

            <IconButton
              aria-label="close menu"
              icon={<CloseIcon boxSize="6" />}
              display={menuOpen ? 'block' : 'none'}
              onClick={() => toggleMenu()}
              bg="transparent"
              opacity={menuOpen ? '1' : '0'}
              transition="all ease .2"
            />
          </HStack>
        ) : null}
      </Flex>
      {/* menu navigation menu*/}
    </ContainerOuter>
  );
};
