import { VStack, Image, Heading } from '@chakra-ui/react';
import React from 'react';
import { Card } from './Card';
import { TextRegular } from './Texts/TextRegular';

interface BlogCardProps {}

export const BlogCard: React.FC<BlogCardProps> = () => {
  return (
    <Card p="0" _hover={{
      boxShadow: "0 0.7rem 1.5rem rgba(0, 0, 0, 0.1)",
      transition: "all .3s"
    }}>
      <Image
        src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cm9hZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        borderTopRadius="8px"
      />
      <VStack p="4" alignItems="flex-start">
        <Heading
          fontSize={['16px', null, null, '18px', '24px']}
          lineHeight={['21px', null, null, '28px', '35px']}
        >
          Title
        </Heading>
        <TextRegular>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          consequuntur sed iure sit esse quaerat dignissimos quis quibusdam
          nobis dicta. Pariatur excepturi, temporibus fugit fuga nulla delectus
          blanditiis praesentium ipsa?
        </TextRegular>
      </VStack>
    </Card>
  );
};
