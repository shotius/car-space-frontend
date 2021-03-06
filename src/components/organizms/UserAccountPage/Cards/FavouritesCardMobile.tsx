import {
  AspectRatio,
  HStack,
  Image,
  SimpleGrid,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { TextSecondary } from 'src/components/atoms/Texts/TextSecondary';
import { Card } from 'src/components/molecules/Cards/Card';
import { CarCardHeading } from 'src/components/molecules/Headings/CarCardHeading';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { NotSpecified } from 'src/components/molecules/Texts/NotSpecified';
import { FALLBACK_IMG } from 'src/constants';
import { capitalize } from 'src/utils/functions/capitalize';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { ICarDealer } from '../../../../../../server/shared_with_front/types/types-shared';

interface FavouritesCardProps {
  car: ICarDealer;
}

export const UserFavouritesCardMobile: React.FC<FavouritesCardProps> = ({
  car,
}) => {
  const images = car.imgUrls;
  const history = useHistory();

  return (
    <Card w="full" p="4" onClick={() => history.push(`/catalog/car/${car.id}`)}>
      <VStack spacing="4">
        {/* Heading  */}
        <CarCardHeading
          model={`${car.m} ${car.mG}`}
          id={car.id}
          year={Number(car.y)}
        />
        {/* Images  */}
        <SimpleGrid
          gridTemplateAreas={`"a a b" "a a c"`}
          w="full"
          maxH="130px"
          gap="2"
        >
          <AspectRatio
            overflow="hidden"
            borderRadius="8px"
            ratio={191 / 130}
            w="full"
            gridArea="a"
            maxH="130px"
          >
            <Image
              src={images[0] ? images[0] : undefined }
              fallbackSrc={FALLBACK_IMG}
              borderRadius="8px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="b" maxH="61px">
            <Image
              src={images[1] ? images[1] : undefined }
              fallbackSrc={FALLBACK_IMG}
              borderRadius="8px"
            />
          </AspectRatio>
          <AspectRatio ratio={191 / 130} w="full" gridArea="c" maxH="61px">
            <Image
              src={images[2] ? images[2] : undefined }
              fallbackSrc={FALLBACK_IMG}
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
              {car.od ? toTrippleNumber(car.od) : <NotSpecified />}
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
              {car.eng ? capitalize(car.eng.toString()) : <NotSpecified />}
            </HeadingSecondary>
          </HStack>
          <HStack w="full" justify="space-between">
            <TextSecondary>Esimate Price</TextSecondary>
            <HeadingSecondary>
              {car.price ? (
                <>$ {toTrippleNumber(car.price)}</>
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
