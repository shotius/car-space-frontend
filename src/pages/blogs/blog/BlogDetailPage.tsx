import { Image } from '@chakra-ui/image';
import { HashLink } from 'react-router-hash-link';
import { Box, Flex, HStack, VStack } from '@chakra-ui/layout';
import { Center } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BlogCardLittle } from 'src/components/molecules/Cards/BlogCardLittle';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { HeadTags } from 'src/components/molecules/MetaTags';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { BlogContent } from 'src/components/organizms/BlogDetailPage/sections/BlogContent';
import { BlogHeader } from 'src/components/organizms/BlogDetailPage/sections/BlogHeader';
import {
  carSpaceServices,
  ICarSpaceService,
} from 'src/constants/carSpaceServiceData';
import blogServices from 'src/services/blog.services';
import { getRandomInt } from 'src/utils/functions/getRandomInt';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { IBlog } from '../../../../../server/shared_with_front/types/types-shared';
import { ScrollToTop } from 'src/components/molecules/ScrollToTop';

interface BlogDetailPageProps {}

function getCarSpaceService() {
  return carSpaceServices[getRandomInt(4)];
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({}) => {
  const [carSpaceService] = useState<ICarSpaceService>(getCarSpaceService);
  const [isFetching, setIsFetching] = useState(true);
  const [randomBlogs, setRandomBlogs] = useState<IBlog[]>([]);
  const { isLargerThan: isLargerThan768 } = useMediaQueryMin(768);
  const [blog, setBlog] = useState<IBlog>();
  const { blogId } = useParams<{ blogId: string }>();

  function getRandomBlogs(limit: number | void) {
    blogServices
      .getRandomBlogs()
      .then(({ results }) => setRandomBlogs(results))
      .catch(console.log);
  }

  function getSingleBlog(blogId: string) {
    blogServices
      .getBlogById(blogId)
      .then(({ results }) => setBlog(results))
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    getRandomBlogs();
  }, []);

  useEffect(() => {
    getSingleBlog(blogId);
    scrollTo(0, 0);
  }, [blogId]);

  if (isFetching) return <Center>...laodidng</Center>;
  if (!blog) return <Center>no blog found</Center>;

  return (
    <>
      <ScrollToTop />
      <HeadTags
        title={blog.header}
        metaDescription={blog.body.slice(0, 25).concat('...')}
        img={blog.img}
      />
      <ContainerOuter pt={['32px', '10px']}>
        <Flex w="full" position="relative" css={{ gap: '80px' }}>
          <VStack w="full" align="flex-start" spacing="4" justify="baseline">
            <BlogHeader blog={blog} getBlogById={getSingleBlog} />
            <BlogContent blog={blog} />
          </VStack>
          {isLargerThan768 && (
            <VStack
              w="500px"
              position="sticky"
              top={['184px', null, null, '215px', '220px']}
              h="full"
              spacing="0px"
              align={'start'}
            >
              {randomBlogs.map((blog) => (
                <BlogCardLittle blog={blog} key={blog.id} />
              ))}

              <HashLink
                to={`/services#${carSpaceService.id}`}
                className="anchor"
              >
                <Box pt="50px" cursor="pointer">
                  <HStack bg="white" p="4" spacing="4" borderRadius="8px">
                    <Image
                      w="82px"
                      h="71px"
                      src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                      borderRadius="8px"
                    />
                    <VStack w="full" align="flex-start">
                      <HeadingSecondary noOfLines={2}>
                        {carSpaceService.heading}
                      </HeadingSecondary>
                      <TextRegular noOfLines={2} fontSize="14px" opacity="0.5">
                        {carSpaceService.content}
                      </TextRegular>
                    </VStack>
                  </HStack>
                </Box>
              </HashLink>
            </VStack>
          )}
        </Flex>
      </ContainerOuter>
    </>
  );
};

export default BlogDetailPage;
