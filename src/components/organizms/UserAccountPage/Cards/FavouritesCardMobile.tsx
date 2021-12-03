import {
  VStack,
  SimpleGrid,
  AspectRatio,
  StackDivider,
  HStack,
  Image,
} from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { Card } from 'src/components/molecules/Cards/Card';
import { CarCardHeading } from 'src/components/molecules/Headings/CarCardHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { DamCar } from 'src/DamnCard';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { ICar } from '../../../../../../server/shared_with_front/types/types-shared';

interface FavouritesCardProps {
  car: ICar;
}

export const UserFavouritesCardMobile: React.FC<FavouritesCardProps> = ({
  car,
}) => {
  const images = car.imgsM;
  const history = useHistory();
  return (
    <Card
      w="full"
      p="4"
      onClick={() => history.push(`/catalog/car/${car?.lN}`)}
    >
      <VStack spacing="4">
        {/* Heading  */}
        <CarCardHeading car={DamCar} lotNumber="39029881" />
        {/* Images  */}
        <SimpleGrid
          gridTemplateAreas={`"a a b" "a a c"`}
          w="full"
          maxH="130px"
          gap="2"
        >
          <AspectRatio ratio={191 / 130} w="full" gridArea="a" maxH="130px">
            <Image
              src={images && images.length ? images[0] : car.imgT}
              borderRadius="8px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="b" maxH="61px">
            <Image
              src={images && images.length ? images[1] : car.imgT}
              borderRadius="8px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="c" maxH="61px">
            <Image
              src={images && images.length ? images[2] : car.imgT}
              borderRadius="8px"
            />
          </AspectRatio>
        </SimpleGrid>
        {/* Description  */}
        <VStack divider={<StackDivider />} w="full">
          <HStack w="full" justify="space-between">
            <TextSecondary>Damage</TextSecondary>
            <HeadingSecondary>
              {car.dmg ? capitalizeEach(car.dmg) : <NotSpecified />}
            </HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Mileage</TextSecondary>
            <HeadingSecondary>
              {car.od ? toTrippleNumber(parseInt(car.od)) : <NotSpecified />}
            </HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Location</TextSecondary>
            <HeadingSecondary>
              {car.lC ? capitalize(car.lC) : <NotSpecified />}
            </HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Engine</TextSecondary>
            <HeadingSecondary>
              {car.eng ? capitalize(car.eng) : <NotSpecified />}
            </HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Esimate Price</TextSecondary>
            <HeadingSecondary>
              {car.eRV ? (
                <>$ {toTrippleNumber(parseInt(car.eRV))}</>
              ) : (
                <NotSpecified />
              )}
            </HeadingSecondary>
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
