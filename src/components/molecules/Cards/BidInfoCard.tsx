import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  SimpleGrid,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { ContactForm } from 'src/components/organizms/Forms/ContactForm';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { toggleAuthModal } from 'src/redux/features/global/gloabalSlice';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { NotSpecified } from '../Texts/NotSpecified';
import { TextRegular } from '../Texts/TextRegular';
import { CardWithHeading } from './CardWithHeading';

interface BidInfoCardProps {
  car: ICarDealer;
}

export const BidInfoCard: React.FC<BidInfoCardProps> = ({ car }) => {
  const isAuth = useAppSelector((state) => state.userInfoSlice.isAuthenticated);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  return (
    <>
      <CardWithHeading heading="Bid information" w="full">
        {/* current bid */}
        <HStack w="full" alignItems="baseline">
          <VStack w="full" align="flex-start" spacing="0">
            <TextRegular opacity="0.5"> Current bid</TextRegular>
            <HeadingSecondary color="autoOrange.500" fontSize="20px">
              {/* $ {toTrippleNumber(Number(car.curB))} */}
              $ <NotSpecified />
            </HeadingSecondary>
          </VStack>

          {/* sales status */}
          <VStack w="full" align="flex-start" spacing="0">
            <TextRegular opacity="0.5"> Time left</TextRegular>
            <HeadingSecondary>
              <NotSpecified />
            </HeadingSecondary>
          </VStack>
        </HStack>

        {/* // contancet button */}
        <SimpleGrid
          spacingX="15px"
          spacingY="10px"
          w="full"
          pt="4"
          minChildWidth="170px"
        >
          <ButtonRegular
            onClick={() => {
              !isAuth ? dispatch(toggleAuthModal()) : onOpen();
            }}
          >
            Contact
          </ButtonRegular>
          <ButtonRegular
            color="#000"
            gridRow={1}
            bg="#F0F0F0"
            _active={{ bg: 'autoGrey.400' }}
            display="flex"
            alignItems="center"
          >
            <HStack>
              <TextRegular>Buy it now</TextRegular>
              <TextRegular opacity="0.5" ml="4">
                {' '}
                $ {toTrippleNumber(car.price)}
              </TextRegular>
            </HStack>
          </ButtonRegular>
        </SimpleGrid>
      </CardWithHeading>
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Contact
          </DrawerHeader>
          <DrawerBody>
            <HeadingSecondary>Write you message here</HeadingSecondary>
            <ContactForm />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
