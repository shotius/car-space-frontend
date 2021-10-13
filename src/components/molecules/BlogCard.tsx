import { VStack, Image, Heading } from '@chakra-ui/react';
import { Card } from './Card';
import { TextRegular } from './Texts/TextRegular';

interface BlogCardProps {}

export const BlogCard: React.FC<BlogCardProps> = () => {
  return (
    <Card
      p="0"
      h={['331px', null, null, '338px', '380px', '513px']}
      _hover={{
        boxShadow: '0 0.7rem 1.5rem rgba(0, 0, 0, 0.1)',
        transition: 'all .3s',
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9hZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        borderTopRadius="8px"
        h={['186px', null, null, '177px', '200px', '296px']}
        w="full"
      />
      <VStack
        p={['4', null, null, '24px', null, '48px']}
        pt={{ '2xl': '32px' }}
        spacing={["2", null, null, '1.5']}
        alignItems="flex-start"
      >
        <Heading
          fontSize={['16px', null, null, '18px', '24px']}
          lineHeight={['21px', null, null, '28px', '35px']}
          noOfLines={2}
        >
          Title
        </Heading>
        <TextRegular
          lineHeight={['21px', null, null, '26px', null, '28px']}
          w="full"
          noOfLines={[3, null, null, 2]}
        >
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
