import {
  AspectRatio, Box, Heading,
  HStack, Image, SimpleGrid, StackDivider, VStack
} from '@chakra-ui/react';
import { Text } from 'components/atoms/Text';
import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { IconButton } from './IconButton';

interface CarCardProps {}

export const CarCard: React.FC<CarCardProps> = () => {
  return (
    <Box
      w="full"
      bg="white"
      borderRadius="8px"
      p="19px"
      maxW={['295px', '343px', null, '388px']}
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
          <IconButton icon={FiHeart} boxSize={6} />
        </HStack>
        {/* picture */}
        <AspectRatio ratio={311 / 192} w="full">
          <Image
            src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
            alt="car white"
            borderRadius="md"
          />
        </AspectRatio>
        {/* description */}
        <VStack w="full" divider={<StackDivider />}>
          <SimpleGrid columns={[1, 2]} mb="4"  w="full" templateColumns={["1fr", "2fr 1fr"]}>
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
            <HStack>
              <Text color="autoGrey.900">Odometer:</Text>
              <Heading fontWeight="400" fontSize="16px">
                40 000 km
              </Heading>
            </HStack>
            <HStack>
              <Text color="autoGrey.900">Engine: </Text>
              <Heading fontWeight="400" fontSize="16px">
                5.5
              </Heading>
            </HStack>
          </SimpleGrid>
          <HStack justifyContent="space-between" w="full">
            <Text color="autoGrey.900" fontSize="16px">
              Estimate Price
            </Text>
            <Heading fontSize="20px" color="autoOrange.500" pr="4">
              $ 20 000
            </Heading>
          </HStack>
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
