import { Box, Heading } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { ContainerOuter } from 'components/atoms/Containers/ContainerOuter';
import { PublicLayout } from 'components/templates/Layouts/PublicLayout';
import React from 'react';
import { HEADER_HEIGHT } from 'constants/index';

interface BlogPageProps {}

export const BlogPage: React.FC<BlogPageProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter>
        <Box h={['300px', null, null, '289px', '470px']} w="full" p="0">
          <Image
            src="https://wallpaperaccess.com/full/3032936.jpg"
            h="full"
            w="full"
          />
        </Box>
      </ContainerOuter>
      <ContainerOuter>
        {/* <Box >

        </Box> */}
      </ContainerOuter>
    </PublicLayout>
  );
};
