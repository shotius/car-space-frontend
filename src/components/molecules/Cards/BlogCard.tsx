import { VStack, Image, Heading } from '@chakra-ui/react';
import { Card } from './Card';
import { TextRegular } from '../Texts/TextRegular';
import { useHistory } from 'react-router';

interface BlogCardProps {}

export const BlogCard: React.FC<BlogCardProps> = () => {
  const history = useHistory();
  return (
    <Card
      p="0"
      _hover={{
        boxShadow: '0 0.7rem 1.5rem rgba(0, 0, 0, 0.1)',
        transition: 'all .3s',
      }}
      cursor="pointer"
      onClick={() => history.push(`/blogs/blog/123`)}
    >
      <Image
        src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9hZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
          Title
        </Heading>
        <TextRegular lineHeight="24px" w="full" noOfLines={[3, null, null, 2]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          AssumendaLorem ipsum dolor sit amet consectetur adipisicing elit.
          AssumendaLorem ipsum dolor sit amet consectetur adipisicing elit.
          Assumenda
        </TextRegular>
      </VStack>
    </Card>
  );
};
