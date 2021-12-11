import { Image } from '@chakra-ui/image';
import { AspectRatio, HStack, VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { ButtonHeart } from 'src/components/molecules/Buttons/ButtonHeart';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { capitalize } from 'src/utils/functions/capitalize';
import { ICarCopart } from '../../../../../../server/shared_with_front/types/types-shared';

interface FavouritesCardDesktopProps {
  car: ICarCopart;
}

export const UserFavouritesCardDesktop: React.FC<FavouritesCardDesktopProps> =
  ({ car }) => {
    const history = useHistory();
    return (
      <Card
        bg="autoGrey.500"
        w="full"
        p="0"
        cursor="pointer"
        onClick={() => history.push(`/catalog/car/${car?.lN}`)}
      >
        <HStack w="full" justify="space-between" p="16px">
          <HStack spacing="4" minW="220px">
            <AspectRatio ratio={78 / 66} minW="78px">
              <Image src={`https://${car?.imgT}`} borderRadius="8px" />
            </AspectRatio>
            <VStack align="flex-start">
              <TextSecondary>Name</TextSecondary>
              <HeadingSecondary fontSize="16px">
                {capitalize(car.m)} {capitalize(car.mG)}
              </HeadingSecondary>
            </VStack>
          </HStack>
          <VStack align="flex-start" w="full" maxW="80px">
            <TextSecondary>Year</TextSecondary>
            <HeadingSecondary fontSize="16px">
              {car.y ? <>{capitalize(car.y)}</> : <NotSpecified />}
            </HeadingSecondary>
          </VStack>
          <VStack align="flex-start" w="full">
            <TextSecondary>Damage</TextSecondary>
            <HeadingSecondary fontSize="16px">
              {car.dmg ? <>{capitalize(car.dmg)}</> : <NotSpecified />}
            </HeadingSecondary>
          </VStack>
          <VStack align="flex-start" w="full">
            <TextSecondary>Location</TextSecondary>
            <HeadingSecondary fontSize="16px">
              {car.lC ? <>{capitalize(car.lC)}</> : <NotSpecified />}
            </HeadingSecondary>
          </VStack>
          <VStack align="flex-start" w="full">
            <TextSecondary>Engine</TextSecondary>
            <HeadingSecondary fontSize="16px">
              {car.eng || <NotSpecified />}
            </HeadingSecondary>
          </VStack>
          <ButtonHeart lotNumber={car.lN} h="46px" w="45px" />
        </HStack>
      </Card>
    );
  };
