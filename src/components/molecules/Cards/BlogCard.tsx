import { VStack, Image, Heading } from '@chakra-ui/react';
import { Card } from './Card';
import { TextRegular } from '../Texts/TextRegular';
import { useHistory } from 'react-router';
import { IBlog } from '../../../../../server/shared_with_front/types/types-shared';
import { FALLBACK_IMG } from 'src/constants';

interface BlogCardProps {
  blog: IBlog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const history = useHistory();
  return (
    <Card
      p="0"
      _hover={{
        boxShadow: '0 0.7rem 1.5rem rgba(0, 0, 0, 0.1)',
        transition: 'all .3s',
      }}
      cursor="pointer"
      onClick={() => history.push(`/blog/${blog.id}`)}
    >
      <Image
        src={blog.img || FALLBACK_IMG}
        borderTopRadius="8px"
        h="177px"
        w="full"
      />
      <VStack
        p="4"
        pb="37px"
        spacing={['2', null, null, '1.5']}
        alignItems="flex-start"
      >
        <Heading fontSize="16px" lineHeight="21px" noOfLines={2}>
          {blog.header}
        </Heading>
        <TextRegular lineHeight="24px" w="full" noOfLines={[3, null, null, 2]}>
          {blog.body}
        </TextRegular>
      </VStack>
    </Card>
  );
};
