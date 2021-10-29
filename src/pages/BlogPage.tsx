import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BlogCard } from 'src/components/molecules/Cards/BlogCard';
import { PublicLayout } from 'src/components/templates/Layouts/PublicLayout';
interface BlogPageProps {}

export const BlogPage: React.FC<BlogPageProps> = () => {
  return (
    <PublicLayout>
      <ContainerOuter p="0" pt={[null, null, null, '64px']}>
        <Box
          p="0"
          w="full"
          h={['300px', null, null, '289px', '470px']}
          backgroundImage="https://wallpaperaccess.com/full/3032936.jpg"
          bgPos="center"
          objectFit="cover"
          borderRadius={{ lg: '8px' }}
        >
          <Center h="full">
            <Heading
              color="white"
              fontSize={['36px', '45px', null, '50px', '60px', '81px']}
              isTruncated
            >
              Blog 
            </Heading>
          </Center>
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

export default BlogPage;
