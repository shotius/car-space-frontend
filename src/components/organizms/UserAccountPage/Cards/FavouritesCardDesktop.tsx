import { Image } from '@chakra-ui/image';
import { AspectRatio, HStack, VStack } from '@chakra-ui/layout';
import { useHistory } from 'react-router';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { ButtonHeart } from 'src/components/molecules/Buttons/ButtonHeart';
import { Card } from 'src/components/molecules/Cards/Card';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { capitalize } from 'src/utils/functions/capitalize';
import { ICarDealer } from '../../../../../../server/shared_with_front/types/types-shared';

interface FavouritesCardDesktopProps {
  car: ICarDealer;
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
        onClick={() => history.push(`/catalog/car/${car.id}`)}
      >
        <HStack w="full" justify="space-between" p="16px" align="stretch">
          <HStack spacing="4" minW="220px" p="0">
            <AspectRatio ratio={78 / 66} minW="78px">
              <Image
                src={car?.imgUrls[0]}
                borderRadius="8px"
                fallbackSrc={'https://via.placeholder.com/150'}
              />
            </AspectRatio>
            <VStack align="flex-start">
              <TextSecondary>Name</TextSecondary>
              <TextRegular fontSize="16px" fontWeight="500">
                {car.m ? capitalize(car.m) : <NotSpecified />}{' '}
                {car.mG ? (
                  capitalize(car.mG)
                ) : (
                  <NotSpecified pl="2" children="" />
                )}
              </TextRegular>
            </VStack>
          </HStack>
          <VStack align="flex-start" w="full" maxW="80px" pt="2">
            <TextSecondary>Year</TextSecondary>
            <TextRegular fontSize="16px" fontWeight="500">
              {car.y || <NotSpecified />}
            </TextRegular>
          </VStack>
          <VStack align="flex-start" w="full" pt="2">
            <TextSecondary>Damage</TextSecondary>
            <TextRegular fontSize="16px" fontWeight="500">
              {car.dmg ? <>{capitalize(car.dmg)}</> : <NotSpecified />}
            </TextRegular>
          </VStack>
          <VStack align="flex-start" w="full" pt="2">
            <TextSecondary>Location</TextSecondary>
            <TextRegular fontSize="16px" fontWeight="500">
              {car.lC || <NotSpecified />}
            </TextRegular>
          </VStack>
          <VStack align="flex-start" w="full" pt="2">
            <TextSecondary>Engine</TextSecondary>
            <TextRegular fontSize="16px" fontWeight="500">
              {car.eng || <NotSpecified />}
            </TextRegular>
          </VStack>
          <ButtonHeart carId={car.id} h="46px" w="45px" />
        </HStack>
      </Card>
    );
  };
