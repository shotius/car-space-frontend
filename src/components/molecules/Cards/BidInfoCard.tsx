import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ContactForm } from 'src/components/organizms/Forms/ContactForm';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import useCurrencyIcon from 'src/utils/hooks/useCurrencyIcon';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';
import { ButtonRegular } from '../Buttons/ButtonRegular';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';
import { CardWithHeading } from './CardWithHeading';

interface BidInfoCardProps {
  car: ICarDealer;
}

export const BidInfoCard: React.FC<BidInfoCardProps> = ({ car }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const icon = useCurrencyIcon();

  return (
    <>
      <CardWithHeading heading="Price" w="full">
        {/* Price */}
        <HStack w="full" justify={'space-between'} alignSelf={'flex-start'}>
          <HStack spacing="4">
            <TextRegular opacity="0.5"> Price</TextRegular>
            <HeadingSecondary color="" fontSize="20px">
              {icon} {toTrippleNumber(car.price)}
            </HeadingSecondary>
          </HStack>
          {/* Contact Button  */}
          <ButtonRegular maxW={'150px'} onClick={onOpen}>
            Contact
          </ButtonRegular>
        </HStack>
      </CardWithHeading>
      {/* Contanct drawer  */}
      <Drawer isOpen={isOpen} onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Form</DrawerHeader>
          <DrawerBody>
            <ContactForm onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
