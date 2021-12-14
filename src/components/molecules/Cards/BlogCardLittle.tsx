import { HStack, Image, StackProps, VStack } from '@chakra-ui/react';
import { HeadingSecondary } from '../Headings/HeadingSecondary';
import { TextRegular } from '../Texts/TextRegular';

interface BlogCardLittleProps {}

export const BlogCardLittle: React.FC<BlogCardLittleProps & StackProps> = ({
  ...rest
}) => {
  return (
    <HStack
      {...rest}
      cursor="pointer"
      borderRadius="8px"
      p="2"
      spacing="4"
    >
      <Image
        w="103px"
        h="71px"
        src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
        borderRadius="8px"
      />
      <VStack w="full" align="flex-start">
        <HeadingSecondary>Title</HeadingSecondary>
        <TextRegular noOfLines={2} fontSize="14px" opacity="0.5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
          ratione doloribus neque ipsum amet, blanditiis iure voluptatem cum
          inventore mollitia{' '}
        </TextRegular>
      </VStack>
    </HStack>
  );
};
