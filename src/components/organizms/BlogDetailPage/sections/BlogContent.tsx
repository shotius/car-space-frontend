import { AspectRatio } from '@chakra-ui/layout';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Image } from '@chakra-ui/react';

interface BlogContentProps {}

export const BlogContent: React.FC<BlogContentProps> = ({}) => {
  return (
    <>
      <AspectRatio ratio={[3 / 2, null, null, 712 / 390]} w="full">
        <Image
          src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          borderRadius="8px"
        />
      </AspectRatio>
      <TextRegular fontSize="16px" lineHeight={['25px', '33px']} pt="8px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
        earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet!
      </TextRegular>
      <TextRegular fontSize="16px" lineHeight={['25px', '33px']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
        earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet!
      </TextRegular>
      <TextRegular fontSize="16px" lineHeight={['25px', '33px']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
        earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet!ellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet!ellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        quos earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet!
      </TextRegular>
      <TextRegular fontSize="16px" lineHeight={['25px', '33px']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
        earum repellat est laudantium, culpa ipsum maxime sequi nihil ipsa.
        Delectus magni neque nemo saepe, atque suscipit cupiditate eaque
        eveniet!
      </TextRegular>
    </>
  );
};
