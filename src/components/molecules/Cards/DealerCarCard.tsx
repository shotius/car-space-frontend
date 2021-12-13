import { Box, Heading, HStack, StackDivider, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';
import { CarImageCarousel } from '../Carousels/CarImageCarousel/CarImageCarousel';
import { CarCardHeading } from '../Headings/CarCardHeading';

interface Props {
  car: ICarDealer;
}

export const DealerCarCard: React.FC<Props> = ({ car }) => {
  const history = useHistory();

  return (
    <Box
      className="hoverable"
      w={['full', null, null, null]}
      bg="white"
      borderRadius="8px"
      p="4"
      maxW={['388px', '343px', null]}
      cursor="pointer"
      onClick={() => history.push(`/catalog/car/${car.id}`)}
    >
      <VStack w="full" spacing={['19px', null, null, '14px', '15px']}>
        {/* header */}
        <CarCardHeading
          model={`${car.m} ${car.mG || ""}`}
          id={car.id}
          year={Number(car.y)}
        />
        {/* picture swiper */}
        <CarImageCarousel images={car.imgUrls.slice(0, 5)} />

        {/* description */}
        <VStack w="full" divider={<StackDivider />}>
          <VStack
            alignItems="flex-start"
            minW="150px"
            mb="2"
            w="full"
            spacing="8px"
          >
            <HStack w="full">
              <TextRegular opacity="63%">Damage: </TextRegular>
              <TextRegular
                fontFamily={['Roboto Medium', null, 'Roboto Regular']}
                noOfLines={1}
                maxW="full"
              >
                {car?.dmg ? capitalizeEach(car?.dmg) : "-"}
              </TextRegular>
            </HStack>
            <HStack>
              <TextRegular opacity="63%">Mileage:</TextRegular>
              <TextRegular
                fontFamily={['Roboto Medium', null, 'Roboto Regular']}
              >
                {toTrippleNumber(car?.od)} km
              </TextRegular>
            </HStack>
          </VStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading
              fontSize={['20px', null, '16px']}
              color="autoOrange.500"
              pr={['4', '0', '4']}
              fontWeight="400"
            >
              $ {toTrippleNumber(car.price ?? 0)}
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Buy it now price</TextRegular>
            <Heading
              fontSize={['20px', null, '16px']}
              pr={['4', '0', '4']}
              fontWeight="400"
            >
              $ {car.price ? toTrippleNumber(car.price) : "0"}
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};