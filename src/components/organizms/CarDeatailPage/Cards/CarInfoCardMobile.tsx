import { HStack, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ICarDealer } from '../../../../../../server/shared_with_front/types/types-shared';

interface CarInfoCardMobileProps {
  car: ICarDealer;
}

export const CarInfoCardMobile: React.FC<CarInfoCardMobileProps> = ({
  car,
}) => {
  return (
    <CardWithHeading heading="Car information">
      <VStack w="full" spacing="18px">
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Primary damage</TextRegular>
          <HeadingSecondary>
            {car.dmg ? capitalize(car.dmg) : <NotSpecified />}
          </HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Secondary damage</TextRegular>
          <HeadingSecondary textAlign="end" w="40%">
            {/* {car.sDmg ? capitalizeEach(car.sDmg) : <NotSpecified />} */}
            <NotSpecified />
          </HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Dealer</TextRegular>
          <HeadingSecondary>
            {car.dealername ? capitalizeEach(car.dealername) : <NotSpecified />}
          </HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Location</TextRegular>
          <HeadingSecondary>{car.lC || <NotSpecified />}</HeadingSecondary>
        </HStack>
      </VStack>
    </CardWithHeading>
  );
};
