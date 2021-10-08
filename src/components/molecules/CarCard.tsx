import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  StackDivider,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { FiHeart } from 'react-icons/fi';
import { ICar } from 'redux/features/auth/types';
import useIntersectionObserver from 'utils/hooks/useIntersectionObserver';
import { TextMain } from '../atoms/Texts/TextMain';
import { IconWithButton } from './IconWithButton';
import { TextRegular } from 'components/molecules/Texts/TextRegular';

interface CarCardProps {
  car?: ICar;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
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
      // maxW={['295px', '343px', null, '314px', '388px']}
      maxW={['343px', null, null, '314px', '388px']}
      cursor="pointer"
    >
      <VStack w="full" spacing="19px">
        {/* header */}
        <HStack justifyContent="space-between" w="full">
          <VStack alignItems="flex-start" spacing="0">
            <Heading fontSize="16px" fontWeight="400">
              Certified car
            </Heading>
            <TextMain opacity="50%">2018</TextMain>
          </VStack>
          <IconWithButton icon={FiHeart} boxSize={6} />
        </HStack>
        {/* picture */}
        <AspectRatio
          ratio={311 / 192}
          w="full"
          overflow="hidden"
          borderRadius="md"
        >
          <Image
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
          />
        </AspectRatio>
        {/* description */}
        <VStack w="full" divider={<StackDivider />}>
          <Flex w="full" flexWrap="wrap" mb="2" justifyContent="space-between">
            <VStack flex="1" alignItems="flex-start" minW="150px" mb="2">
              <HStack>
                <TextRegular opacity="63%">Damage: </TextRegular>
                <Heading fontWeight="400" fontSize="16px">
                  Front end
                </Heading>
              </HStack>
              <HStack>
                <TextRegular opacity="63%">Location: </TextRegular>
                <Heading fontWeight="400" fontSize="16px" mb="40px">
                  USA
                </Heading>
              </HStack>
            </VStack>
            <VStack alignItems="flex-start" minW="124px">
              <HStack>
                <TextRegular opacity="63%">Drive:</TextRegular>
                <Heading fontWeight="400" fontSize="16px">
                  40 000 km
                </Heading>
              </HStack>
              <HStack>
                <TextRegular opacity="63%">Engine: </TextRegular>
                <Heading fontWeight="400" fontSize="16px">
                  5.5
                </Heading>
              </HStack>
            </VStack>
          </Flex>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading
              fontSize={['20px', null, null, '18px', '24px']}
              color="autoOrange.500"
              pr="4"
            >
              $ 20 000
            </Heading>
          </HStack>
          <HStack justifyContent="space-between" w="full">
            <TextRegular opacity="63%">Estimate Price</TextRegular>
            <Heading fontSize={['20px', null, null, '18px', '24px']} pr="4">
              $ 20 000
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
