import { HStack, Image, StackProps, VStack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { IBlog } from '../../../../../server/shared_with_front/types/types-shared';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface BlogCardLittleProps {
  blog: IBlog;
}

export const BlogCardLittle: React.FC<BlogCardLittleProps & StackProps> = ({
  blog,
  ...rest
}) => {
  const history = useHistory();
  return (
    <HStack
      cursor="pointer"
      borderRadius="8px"
      p="2"
      spacing="4"
      onClick={() => history.push(`/blog/${blog.id || blog._id}`)}
      {...rest}
    >
      <Image
        w="103px"
        h="71px"
        src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        borderRadius="8px"
      />
      <VStack w="full" align="flex-start">
        <HeadingSecondary>{blog.header}</HeadingSecondary>
        <TextRegular noOfLines={2} fontSize="14px" opacity="0.5">
          {blog.body}
        </TextRegular>
      </VStack>
    </HStack>
  );
};
