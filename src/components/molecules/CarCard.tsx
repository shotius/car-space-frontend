import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import  { useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import { ICar } from 'src/redux/features/auth/types';
import useIntersectionObserver from 'src/utils/hooks/useIntersectionObserver';
import { TextMain } from '../atoms/Texts/TextMain';
import { IconWithButton } from './IconWithButton';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { CarImageCarousel } from './CarImageCarousel/CarImageCarousel';

interface CarCardProps {
  car?: ICar;
}

export const CarCard: React.FC<CarCardProps> = () => {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  if (isVisible) {
    console.log('appeard');
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      ref={ref}
      w="full"
      bg="white"
      borderRadius="8px"
      p="19px"
      maxW={['295px', '343px', null, '324px', '388px', '398px']}
      // maxW={['343px', null, null, '314px', '388px']}
      // cursor="pointer"
      // w="330px"
      // minW={["300px", '340px']}
    >
      <VStack w="full" spacing={["19px", null, null, "19px", '15px']}>
        {/* header */}
        <HStack justifyContent="space-between" w="full">
          <VStack alignItems="flex-start" spacing="0">
            <Heading fontSize={["16px", null, null, '18px', null, '24px']} fontWeight="400">
              Certified car
            </Heading>
            <TextMain opacity="50%">2018</TextMain>
          </VStack>
          <IconWithButton icon={FiHeart} boxSize={6} bg="autoGrey.100" p="0" h="40px"/>
        </HStack>
        {/* picture */}
        <AspectRatio
          ratio={311 / 192}
          w="full"
          overflow="hidden"
          borderRadius="md"
          maxH="200px"
        >
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
        </AspectRatio>
        {/* description */}
        <VStack w="full" divider={<StackDivider />}>
            <VStack flex="1" alignItems="flex-start" minW="150px" mb="2" w="full">
              <HStack>
                <TextRegular opacity="63%">Damage: </TextRegular>
                <Heading fontWeight="400" fontSize="16px">
                  Front end
                </Heading>
              </HStack>
              <HStack>
                <TextRegular opacity="63%">Mileage:</TextRegular>
                <Heading fontWeight="400" fontSize="16px">
                  40 000 km
                </Heading>
              </HStack>
            </VStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading
              fontSize={['20px', null, null, '18px', '24px']}
              color="autoOrange.500"
              pr="4"
              fontWeight="400"
            >
              $ 20 000
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading fontSize={['20px', null, null, '18px', '24px']} pr="4" fontWeight="400">
              $ 20 000
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
