import { HStack, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ICarDealer } from '../../../../../../server/shared_with_front/types/types-shared';

interface CarInfoCardProps {
  car: ICarDealer;
}

export const CarInfoCard: React.FC<CarInfoCardProps> = ({ car }) => {
  return (
    <CardWithHeading heading="Car information">
      <TextRegular pb="30px" lineHeight="27px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem
        deserunt doloribus reprehenderit quibusdam facere laudantium, neque
        nostrum nisi pariatur molestias ducimus esse quo in quis, accusamus
        excepturi assumenda modi?
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
      </VStack>
    </CardWithHeading>
  );
};
