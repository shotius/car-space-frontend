import { Image } from '@chakra-ui/image';
import { AspectRatio, VStack } from '@chakra-ui/layout';
import { HStack, SimpleGrid } from '@chakra-ui/react';
import { FALLBACK_IMG } from 'src/constants';
import {
  ICarDealer,
  IUser,
} from '../../../../../server/shared_with_front/types/types-shared';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface DealerCardProps {
  dealer: IUser;
}

export const DealerCard: React.FC<DealerCardProps> = ({ dealer }) => {
  const cars = dealer.addedCars as unknown as ICarDealer[];
  const carImages = cars[0].imgUrls


  return (
    <Card w="full" p="4" h="auto" className="hoverable" cursor="pointer">
      <VStack w="full" spacing="12px">
        <HStack w="full" justify="space-between">
          <HeadingSecondary fontSize="14px" cursor="pointer">
            {dealer.fullName}
          </HeadingSecondary>
          <TextRegular opacity=".5" cursor="pointer" fontSize="14px">
            {dealer.addedCars.length} vehicles
          </TextRegular>
        </HStack>
        <SimpleGrid
          gridTemplateAreas={`"a a b" "a a c"`}
          w="full"
          maxH="130px"
          gap="2"
        >
          <AspectRatio ratio={191 / 130} w="full" gridArea="a" maxH="130px">
            <Image
              src={carImages[0] ? carImages[0] : undefined}
              fallbackSrc={FALLBACK_IMG}
              borderRadius="3px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="b" maxH="61px">
            <Image
              src={carImages[1] ? carImages[1] : undefined}
              fallbackSrc={FALLBACK_IMG}
              borderRadius="3px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="c" maxH="61px">
            <Image
              src={carImages[2] ? carImages[2] : undefined}
              fallbackSrc={FALLBACK_IMG}
              borderRadius="3px"
            />
          </AspectRatio>
        </SimpleGrid>
      </VStack>
    </Card>
  );
};
