import {
  Box,
  Image,
  Heading,
  HStack,
  StackDivider,
  VStack,
  AspectRatio,
} from '@chakra-ui/react';
import { createContext, useEffect, useRef } from 'react';
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
// @ts-ignore
export const CarContext = createContext();

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { mediumImages, errorFetchingMediums, fetchingMediums } =
    useAppSelector((state) => state.carImages);

  const getImage = async () => {
    if (car) {
      if (!mediumImages[car.lN] && !errorFetchingMediums.includes(car.lN)) {
        dispatch(getImagesMedium(car.lN));
      }
    }
  };

  useEffect(() => {
    if (isVisible) {
      getImage();
    }
  }, [isVisible]);

  const displayImageCarousel =
    !fetchingMediums[car.lN] &&
    !errorFetchingMediums.includes(car.lN) &&
    mediumImages[car.lN];

  return (
    <CarContext.Provider value={car}>
      <Box
        className="hoverable"
        ref={ref}
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
          <CarCardHeading car={car} />
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
    </CarContext.Provider>
  );
};
