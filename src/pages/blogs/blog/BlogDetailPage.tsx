import { Image } from '@chakra-ui/image';
import { Box, Flex, HStack, VStack } from '@chakra-ui/layout';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { BlogCardLittle } from 'src/components/molecules/Cards/BlogCardLittle';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { BlogContent } from 'src/components/organizms/BlogDetailPage/sections/BlogContent';
import { BlogHeader } from 'src/components/organizms/BlogDetailPage/sections/BlogHeader';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';

interface BlogDetailPageProps {}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({}) => {
  const { isLargerThan: isLargerThan768 } = useMediaQueryMin(768);
  return (
    <ContainerOuter pt={['32px', '10px']}>
      <Flex w="full" position="relative" css={{ gap: '80px' }}>
        <VStack w="full" align="flex-start" spacing="4" justify="baseline">
          <BlogHeader />
          <BlogContent />
        </VStack>
        {isLargerThan768 && (
          <VStack
            w="500px"
            position="sticky"
            top={['184px', null, null, "215px", "220px"]}
            h="full"
            spacing="0px"
          >
            <BlogCardLittle />
            <BlogCardLittle />
            <BlogCardLittle />
            <Box pt="50px" cursor="pointer">
              <HStack bg="white" p="4" borderRadius="8px">
                <Image
                  w="82px"
                  h="71px"
                  src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                  borderRadius="8px"
                />
                <VStack w="full" align="flex-start">
                  <HeadingSecondary>Service Name</HeadingSecondary>
                  <TextRegular noOfLines={2} fontSize="14px" opacity="0.5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quidem ratione doloribus neque ipsum amet, blanditiis iure
                    voluptatem cum inventore mollitia{' '}
                  </TextRegular>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        )}
      </Flex>
    </ContainerOuter>
  );
};

export default BlogDetailPage;
