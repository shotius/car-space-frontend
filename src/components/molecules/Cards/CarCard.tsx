import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getImagesMedium } from 'src/redux/features/auth/carImagesSlice';
import { ICar } from 'src/redux/features/auth/types';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import useIntersectionObserver from 'src/utils/hooks/useIntersectionObserver';
import { CarImageCarousel } from '../Carousels/CarImageCarousel/CarImageCarousel';
import { CarCardHeading } from '../Headings/CarCardHeading';

interface CarCardProps {
  car: ICar;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const [shouldHaveRef, setShouldHaveRef] = useState(true);

  const isVisible = !!entry?.isIntersecting;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { mediumImages, errorFetchingMediums: errorFetchingMediumImagess } =
    useAppSelector((state) => state.carImages);

  // if car visible and we have not fetch it yet: true, else: false
  const shouldFetch = useMemo(() => {
    if (isVisible && car) {
      // if we dont have car in redux state, either in a list or in errors: true , else: false
      if (
        !mediumImages[car.lN] &&
        !errorFetchingMediumImagess.includes(car.lN)
      ) {
        return true;
      } else {
        // if we have a car in the redux remove current from ref, it Prevents from re-renders
        ref.current = null;
        return false;
      }
    }
    return false;
  }, [isVisible]);

  useEffect(() => {
    if (shouldFetch) {
      dispatch(getImagesMedium(car.lN));
      setShouldHaveRef(false);
      // remove div from observer, it prevents rerenders
      ref.current = null;
    }
  }, [shouldFetch]);

  const displayImageCarousel = !!mediumImages[car.lN];

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
      onClick={() => history.push(`/car/${car?.lN}`)}
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
              src={
                car
                  ? `https://${car?.imgT}`
                  : 'https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg'
              }
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
              $ 20 000
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading
              fontSize={['20px', null, '16px']}
              pr={['4', '0', '4']}
              fontWeight="400"
            >
              $ 20 000
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
