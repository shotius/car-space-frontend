import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BlogCard } from 'src/components/molecules/Cards/BlogCard';
import { HeadTags } from 'src/components/molecules/MetaTags';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';
import blogServices from 'src/services/blog.services';
import { IBlog } from '../../../../server/shared_with_front/types/types-shared';
interface BlogPageProps {}

export const BlogPage: React.FC<BlogPageProps> = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  function getAllBlogs() {
    blogServices.getAllBlogs().then((data) => setBlogs(data.results));
  }

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <ScrollToTop />
      <ContainerOuter p="0" pt={[null, null, null, '48px']}>
        <Box
          p="0"
          w="full"
          h={['300px', null, null, '289px']}
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
              Blogs
            </Heading>
          </Center>
        </Box>
      </ContainerOuter>
      <ContainerOuter p={['4', null, null, ' 0']}>
        <SimpleGrid
          w="full"
          templateColumns={['1fr', '1fr 1fr', null, 'repeat(3, 1fr)']}
          spacing={['4', null, null, '32px']}
          mt={['48px', null, null, '64px']}
        >
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} getAllBlogs={getAllBlogs} />
          ))}
        </SimpleGrid>
      </ContainerOuter>
    </>
  );
};

export default BlogPage;
