import {
  VStack,
  SimpleGrid,
  AspectRatio,
  StackDivider,
  HStack,
  Image
} from '@chakra-ui/react';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { Card } from 'src/components/molecules/Cards/Card';
import { CarCardHeading } from 'src/components/molecules/Headings/CarCardHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { DamCar } from 'src/DamnCard';

interface FavouritesCardProps {}

export const UserFavouritesCardMobile: React.FC<FavouritesCardProps> = ({}) => {
  return (
    <Card w="full" p="4">
      <VStack spacing="4">
        {/* Heading  */}
        <CarCardHeading car={DamCar} lotNumber="39029881"/>
        {/* Images  */}
        <SimpleGrid
          gridTemplateAreas={`"a a b" "a a c"`}
          w="full"
          maxH="130px"
          gap="2"
        >
          <AspectRatio ratio={191 / 130} w="full" gridArea="a" maxH="130px">
            <Image
              src="https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg"
              borderRadius="8px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="b" maxH="61px">
            <Image
              src="https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg"
              borderRadius="8px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="c" maxH="61px">
            <Image
              src="https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg"
              borderRadius="8px"
            />
          </AspectRatio>
        </SimpleGrid>
        {/* Description  */}
        <VStack divider={<StackDivider />} w="full">
          <HStack w="full" justify="space-between">
            <TextSecondary>Damage</TextSecondary>
            <HeadingSecondary>Front End</HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Mileage</TextSecondary>
            <HeadingSecondary>10 000</HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Location</TextSecondary>
            <HeadingSecondary>Usa</HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Engine</TextSecondary>
            <HeadingSecondary>4.4</HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Esimate Price</TextSecondary>
            <HeadingSecondary>$20 000</HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Total Price</TextSecondary>
            <HeadingSecondary>$20 000</HeadingSecondary>
          </HStack>
        </VStack>
      </VStack>
    </Card>
  );
};
