import { Image } from '@chakra-ui/image';
import { AspectRatio, VStack } from '@chakra-ui/layout';
import { HStack, SimpleGrid } from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface DealerCardProps {}

export const DealerCard: React.FC<DealerCardProps> = () => {
  return (
    <Card w="full" p="4" h="auto" className="hoverable">
      <VStack w="full" spacing="12px">
        <HStack w="full" justify="space-between">
          <HeadingSecondary fontSize="14px" cursor="pointer">
            Shop's name
          </HeadingSecondary>
          <TextRegular opacity=".5" cursor="pointer" fontSize="14px">
            125 vehicles
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
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826541/car-space/cars/wallpapers/nyboj9iq2aputtv3i5nw.webp"
              borderRadius="3px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="b" maxH="61px">
            <Image
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826626/car-space/cars/wallpapers/kj3x5aijltis5xpir3kq.webp"
              borderRadius="3px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="c" maxH="61px">
            <Image
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826664/car-space/cars/wallpapers/ajk7g36whhjsx0cpic6k.webp"
              borderRadius="3px"
            />
          </AspectRatio>
        </SimpleGrid>
      </VStack>
    </Card>
  );
};
