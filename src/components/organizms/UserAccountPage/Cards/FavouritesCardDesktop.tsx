import { Image } from '@chakra-ui/image';
import { AspectRatio, HStack, VStack } from '@chakra-ui/layout';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { ButtonHeart } from 'src/components/molecules/Buttons/ButtonHeart';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';

interface FavouritesCardDesktopProps {}

export const UserFavouritesCardDesktop: React.FC<FavouritesCardDesktopProps> =
  ({}) => {
    return (
      <Card bg="autoGrey.500" w="full" p="0">
        <HStack w="full" justify="space-between" p="16px">
          <HStack spacing="4">
            <AspectRatio ratio={78 / 66} w="78px">
              <Image
                src="https://www.1auto.co/storage/ready_for_sales/20210914113121_photo-1552519507-da3b142c6e3d.jpg"
                borderRadius="8px"
              />
            </AspectRatio>
            <VStack align="flex-start">
              <TextSecondary>Name</TextSecondary>
              <HeadingSecondary fontSize="16px">
                Chevrolet Cruze
              </HeadingSecondary>
            </VStack>
          </HStack>
          <VStack align="flex-start">
            <TextSecondary>Year</TextSecondary>
            <HeadingSecondary fontSize="16px">2018</HeadingSecondary>
          </VStack>
          <VStack align="flex-start">
            <TextSecondary>Damage</TextSecondary>
            <HeadingSecondary fontSize="16px">Front End</HeadingSecondary>
          </VStack>
          <VStack align="flex-start">
            <TextSecondary>Location</TextSecondary>
            <HeadingSecondary fontSize="16px">Engine</HeadingSecondary>
          </VStack>
          <ButtonHeart lotNumber="39029881" h="46px" w="45px" />
        </HStack>
      </Card>
    );
  };
