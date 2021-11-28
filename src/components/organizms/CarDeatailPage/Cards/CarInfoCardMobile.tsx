import { HStack, VStack } from '@chakra-ui/react';
import { CardWithHeading } from 'src/components/molecules/Cards/CardWithHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';

interface CarInfoCardMobileProps {
  car: ICar
}

export const CarInfoCardMobile: React.FC<CarInfoCardMobileProps> = ({car}) => {
  return (
    <CardWithHeading heading="Car information">
      <VStack w="full" spacing="18px">
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Primary damage</TextRegular>
          <HeadingSecondary>{capitalize(car.dmg)}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Secondary damage</TextRegular>
          <HeadingSecondary textAlign="end" w="40%">{capitalizeEach(car.sDmg)}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Sales Status</TextRegular>
          <HeadingSecondary>{capitalizeEach(car.sS)}</HeadingSecondary>
        </HStack>
        <HStack w="full" justify="space-between">
          <TextRegular opacity="0.5">Location</TextRegular>
          <HeadingSecondary>{car.lC}</HeadingSecondary>
        </HStack>
      </VStack>
    </CardWithHeading>
  );
};
