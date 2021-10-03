import {
  Box,
  Image,
  Flex,
  Stack,
  AspectRatio,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { TextMain } from 'components/atoms/Texts/TextMain';
import React from 'react';

interface CustomerReviewCardProps {}

export const CustomerReviewCard: React.FC<CustomerReviewCardProps> = () => {
  return (
    <Box bg="white" borderRadius="md" p={['4', '6', '8', '63px']}>
      <Flex
        spacing="4"
        direction={['column', 'row']}
        alignItems="center"
        wrap="wrap"
        w="full"
      >
        <Stack
          direction={['row', 'column']}
          alignItems="center"
          spacing="4"
          flexBasis={['100%', '40%']}
          w="100%"
          mb="4"
        >
          <AspectRatio ratio={1 / 1} w={['49px', '100px']}>
            <Image
              src="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
              alt="delear"
              objectFit="cover"
              borderRadius="full"
            />
          </AspectRatio>
          <Heading fontSize={['16px', null, '24px']} fontWeight="400">
            Full name
          </Heading>
        </Stack>

        <TextMain
          fontSize={['14px', '16px']}
          lineHeight={{ md: '24px' }}
          opacity="80%"
          color="#000"
          flexBasis={['50%', '60%', '70%', '100%']}
          mb="4"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          explicabo consectetur illum vel harum numquam, natus cupiditate.
          Ipsam, quam quis, cum expedita dolorum itaque iste necessitatibus ipsa
          voluptatem labore minus.
        </TextMain>

        <SimpleGrid
          w="full"
          gridTemplateColumns={[
            'repeat(auto-fill, 50px)',
            'repeat(auto-fill, 80px)',
            'repeat(auto-fill, 100px)',
          ]}
          gap={['2', '2', '3']}
          flexBasis={['40%', '100%']}
          display={['grid', 'none', 'grid']}
        >
          <AspectRatio ratio={5 / 4} w={['50px', '80px', '100px']}>
            <Image
              src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio ratio={5 / 4} w={['50px', '80px', '100px']}>
            <Image
              src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio ratio={5 / 4} w={['50px', '80px', '100px']}>
            <Image
              src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio ratio={5 / 4} w={['50px', '80px', '100px']}>
            <Image
              src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio ratio={5 / 4} w={['50px', '80px', '100px']}>
            <Image
              src="https://stat.overdrive.in/wp-content/odgallery/2020/06/57263_2020_Mercedes_Benz_GLS.jpg"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
