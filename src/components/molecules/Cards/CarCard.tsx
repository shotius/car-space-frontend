import { Box, Heading, HStack, StackDivider, VStack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TextMain } from 'src/components/atoms/Texts/TextMain';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { ICar } from 'src/redux/features/auth/types';
import useIntersectionObserver from 'src/utils/hooks/useIntersectionObserver';
import { ButtonHeart } from '../Buttons/ButtonHeart';
import { CarImageCarousel } from '../Carousels/CarImageCarousel/CarImageCarousel';

interface CarCardProps {
  car?: ICar;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) {
    // console.log('appeard');
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      ref={ref}
      w={["full", null, null,  '263px']}
      bg="white"
      borderRadius="8px"
      p="4"
      maxW={['388px', '343px', null]}
    >
      <VStack w="full" spacing={['19px', null, null, '14px', '15px']}>
        {/* header */}
        <HStack justifyContent="space-between" w="full">
          <VStack alignItems="flex-start" spacing="0">
            <TextRegular
              fontFamily="Roboto Medium"
              fontSize='18px'
              maxW={['200px', "150px"]}
              isTruncated
              _hover={{
                textDecor: 'underline',
              }}
            >
              <Link to={`/car/${car?.lN}`}>
                {car?.m} {car?.mG}
              </Link>
            </TextRegular>
            <TextMain opacity="50%">{car?.y}</TextMain>
          </VStack>
          <ButtonHeart h="35px" w="35px" boxSize={5}/>
        </HStack>
        {/* picture swiper */}
        {/* <Image
            src={
              car
                ? `https://${car?.imgT}`
                : 'https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg'
            }
            alt="car white"
            filter="auto"
            blur={
              car? "10px": 'none'
            }
            saturation={0.9}
          /> */}
        <CarImageCarousel />
        {/* description */}
        <VStack w="full" divider={<StackDivider />} >
          <VStack alignItems="flex-start" minW="150px" mb="2" w="full" spacing="8px">
            <HStack w="full">
              <TextRegular opacity="63%">Damage: </TextRegular>
              <TextRegular fontFamily={['Roboto Medium',null,  'Roboto Regular']} isTruncated>
                {car?.dmg}
              </TextRegular>
            </HStack>
            <HStack>
              <TextRegular opacity="63%">Mileage:</TextRegular>
              <TextRegular fontFamily={['Roboto Medium',null, 'Roboto Regular']}>
                {car?.od} km
              </TextRegular>
            </HStack>
          </VStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading
              fontSize={['20px', null, '16px']}
              color="autoOrange.500"
              pr="4"
              fontWeight="400"
            >
              $ 20 000
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading
              fontSize={['20px', null, '16px']}
              pr="4"
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
