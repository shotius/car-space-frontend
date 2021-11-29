import { VStack, HStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';

interface CarInfoCardProps {
  car: ICar;
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
            <HeadingSecondary>{car.dmg || <NotSpecified />}</HeadingSecondary>
          </VStack>

          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Secondary damage</TextRegular>
            <HeadingSecondary>{car.sDmg || <NotSpecified />}</HeadingSecondary>
          </VStack>
        </HStack>

        <HStack w="full" justify="space-between">
          <VStack w="full" alignItems="flex-start" spacing="4px">
            <TextRegular opacity="0.5">Sales Status</TextRegular>
            <HeadingSecondary>{car.sS || <NotSpecified />}</HeadingSecondary>
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
