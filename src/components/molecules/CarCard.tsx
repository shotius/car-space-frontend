import {
  Box,
  Image,
  Heading,
  HStack,
  VStack,
  Flex,
  Divider,
  AspectRatio,
} from '@chakra-ui/react';
import { Text } from 'components/atoms/Text';
import React from 'react';
import { IconButton } from './IconButton';
import { FiHeart } from 'react-icons/fi';

interface CarCardProps {}

export const CarCard: React.FC<CarCardProps> = () => {
  return (
    <Box
      w="full"
      bg="white"
      borderRadius="8px"
      p="19px"
      maxW={['295px', '343px', null, "388px"]}
      cursor="pointer"
    >
      <VStack w="full" spacing="19px">
        {/* header */}
        <HStack justifyContent="space-between" w="full">
          <VStack alignItems="flex-start" spacing="0">
            <Heading fontSize="16px" fontWeight="400">
              Certified car
            </Heading>
            <Text fontSize="14px" color="autoGrey.900">
              2018
            </Text>
          </VStack>
          <IconButton icon={FiHeart} boxSize={6} bg="autoGrey.400" />
        </HStack>
        {/* picture */}
        <AspectRatio ratio={311/192} w="full">
          <Image
            src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
            alt="car white"
            borderRadius="md"
          />
        </AspectRatio>
        {/* description */}
        <VStack spacing="2" w="full">
          <Flex justifyContent="space-between" w="full">
            <HStack>
              <Text color="autoGrey.900">Damage: </Text>
              <Heading fontWeight="400" fontSize="16px">
                Front end
              </Heading>
            </HStack>
            <HStack>
              <Text color="autoGrey.900">Location: </Text>
              <Heading fontWeight="400" fontSize="16px">
                USA
              </Heading>
            </HStack>
          </Flex>
          <Flex justifyContent="space-between" w="full">
            <HStack>
              <Text color="autoGrey.900">Odometer:</Text>
              <Heading fontWeight="400" fontSize="16px">
                122 432 km
              </Heading>
            </HStack>
            <HStack>
              <Text color="autoGrey.900">Engine: </Text>
              <Heading fontWeight="400" fontSize="16px">
                5.5
              </Heading>
            </HStack>
          </Flex>
        </VStack>
        <VStack w="full">
          <Divider borderColor="autoGrey.800" />
          <HStack justifyContent="space-between" w="full">
            <Text color="autoGrey.900" fontSize="16px">
              Estimate Price
            </Text>
            <Heading fontSize="20px" color="autoOrange.500" pr="4">
              $ 20 000
            </Heading>
          </HStack>
          <Divider borderColor="autoGrey.800" />
          <HStack justifyContent="space-between" w="full">
            <Text color="autoGrey.900" fontSize="16px">
              Estimate Price
            </Text>
            <Heading fontSize="20px" color="autoOrange.500" pr="4">
              $ 20 000
            </Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};
