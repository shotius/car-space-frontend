import {
  AspectRatio, Box, Flex,
  Heading, Image, Stack
} from '@chakra-ui/react';
import { SectionHeader } from 'components/molecules/SectionHeader/SectionHeader';
import React from 'react';
import { Text } from '../atoms/Text';

interface CustomperReviewProps {}

export const CustomperReview: React.FC<CustomperReviewProps> = () => {
  return (
    <Box w="full">
      <SectionHeader mainText="Customer review" />
      <Box bg="white" borderRadius="md" p="4">
        <Stack spacing="4" direction={['column', 'row']}>
          <Stack direction={['row']} alignItems="center">
            <AspectRatio ratio={1 / 1} w="49px">
              <Image
                src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
                alt="delear"
                objectFit="cover"
                borderRadius="full"
              />
            </AspectRatio>
            <Heading fontSize="16px" fontWeight="400">
              Full name
            </Heading>
          </Stack>

          <Text fontSize="14px" lineHeight="21px" opacity="80%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            explicabo consectetur illum vel harum numquam, natus cupiditate.
            Ipsam, quam quis, cum expedita dolorum itaque iste necessitatibus
            ipsa voluptatem labore minus.
          </Text>

          <Flex wrap="wrap" w="100%">
            <AspectRatio ratio={5 / 4} w="50px">
              <Image
                src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
                alt="car white"
                borderRadius="4px"
              />
            </AspectRatio>
            <AspectRatio ratio={5 / 4} w="50px">
              <Image
                src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
                alt="car white"
                borderRadius="4px"
              />
            </AspectRatio>
            <AspectRatio ratio={5 / 4} w="50px">
              <Image
                src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
                alt="car white"
                borderRadius="4px"
              />
            </AspectRatio>
            <AspectRatio ratio={5 / 4} w="50px">
              <Image
                src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
                alt="car white"
                borderRadius="4px"
              />
            </AspectRatio>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
