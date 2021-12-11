import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  StackDivider,
  VStack
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { getImagesMediumThunk } from 'src/redux/features/auth/carImagesSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { toTrippleNumber } from 'src/utils/functions/toTrippleNumber';
import { ICarDealer } from '../../../../../server/shared_with_front/types/types-shared';
import { CarImageCarousel } from '../Carousels/CarImageCarousel/CarImageCarousel';
import { CarCardHeading } from '../Headings/CarCardHeading';

interface Props {
  car: ICarDealer;
}

export const DealerCarCard: React.FC<Props> = ({ car }) => {
  const ref = useRef(null);
  const [shouldHaveRef, setShouldHaveRef] = useState(true);

  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
      dispatch(getImagesMediumThunk(parseInt(car.lN)));
      setShouldHaveRef(false);
      // remove div from observer, it prevents rerenders
      ref.current = null;
    }
  }, []);

  const displayImageCarousel = car.imgUrls;

  return (
    <Box
      className="hoverable"
      ref={shouldHaveRef ? ref : null}
      w={['full', null, null, null]}
      bg="white"
      borderRadius="8px"
      p="4"
      maxW={['388px', '343px', null]}
      cursor="pointer"
      onClick={() => history.push(`/catalog/car/${car?.lN}`)}
    >
      <VStack w="full" spacing={['19px', null, null, '14px', '15px']}>
        {/* header */}
        <CarCardHeading car={car} lotNumber={car.lN} />
        {/* picture swiper */}
        {displayImageCarousel ? (
          <CarImageCarousel images={mediumImages[car.lN]} />
        ) : (
          <AspectRatio
            ratio={[311 / 292, null, null, 231 / 143]}
            w="full"
            overflow="hidden"
            borderRadius="md"
            maxH={['192px', null, '143px']}
          >
            <Image
              src={`https://${car?.imgT}`}
              alt="car white"
              filter="auto"
              blur={car ? '10px' : 'none'}
              saturation={0.9}
              h="192px"
            />
          </AspectRatio>
        )}

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
                {car?.dmg && capitalizeEach(car?.dmg)}
              </TextRegular>
            </HStack>
            <HStack>
              <TextRegular opacity="63%">Mileage:</TextRegular>
              <TextRegular
                fontFamily={['Roboto Medium', null, 'Roboto Regular']}
              >
                {car?.od} km
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
              $ {toTrippleNumber(Math.round(Number(car.eRV) + Number(car.rC)))}
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Buy it now price</TextRegular>
            <Heading
              fontSize={['20px', null, '16px']}
              pr={['4', '0', '4']}
              fontWeight="400"
            >
              $ {toTrippleNumber(Number(car.bin))}
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
