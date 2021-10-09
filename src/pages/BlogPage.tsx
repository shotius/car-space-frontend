import { Image } from '@chakra-ui/image';
import { Box, SimpleGrid } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BlogCard } from 'src/components/molecules/BlogCard';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
import React from 'react';

interface BlogPageProps {}

export const BlogPage: React.FC<BlogPageProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter
        p={['0', null, null, '4']}
        pt={[null, null, null, '64px']}
      >
        <Box p="0" w="full" h={['300px', null, null, '289px', '470px']}>
          <Image
            src="https://wallpaperaccess.com/full/3032936.jpg"
            h="full"
            w="full"
            borderRadius={{ lg: '8px' }}
          />
        </Box>
      </ContainerOuter>
      <ContainerOuter>
        <SimpleGrid
          w="full"
          templateColumns={['1fr', '1fr 1fr', null, 'repeat(3, 1fr)']}
          spacing="4"
          mt={['48px', null, null, '80px']}
        >
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </SimpleGrid>
      </ContainerOuter>
    </PublicLayout>
  );
};
