import { HStack, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ICarDealer } from '../../../../../../server/shared_with_front/types/types-shared';

interface CarInfoCardProps {
  car: ICarDealer;
}

export const CarInfoCard: React.FC<CarInfoCardProps> = ({ car }) => {
  return (
    <CardWithHeading heading="Car information">
      <TextRegular pb={'30px'} lineHeight="27px" w="full">
        {car.desc ? capitalize(car.desc) : 'No description'}
      </TextRegular>
      <VStack w="full" p="24px" borderRadius="8px" bg="#F4F4F4" spacing="41px">
        <HStack w="full" justify="space-between">
          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Primary damage</TextRegular>
            <HeadingSecondary>
              {car.dmg ? <>{capitalizeEach(car.dmg)}</> : <NotSpecified />}
            </HeadingSecondary>
          </VStack>

          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Location</TextRegular>
            <HeadingSecondary>{car.lC || <NotSpecified />}</HeadingSecondary>
          </VStack>
        </HStack>
        <HStack w="full" justify="space-between">
          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Car dealder</TextRegular>
            <HeadingSecondary>
              {car.dealername ? (
                <>{capitalizeEach(car.dealername)}</>
              ) : (
                <NotSpecified />
              )}
            </HeadingSecondary>
          </VStack>

          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Is Most demand</TextRegular>
            <HeadingSecondary>
              {car.mostDemand ? 'Yes' : <NotSpecified />}
            </HeadingSecondary>
          </VStack>
        </HStack>
      </VStack>
    </CardWithHeading>
  );
};
