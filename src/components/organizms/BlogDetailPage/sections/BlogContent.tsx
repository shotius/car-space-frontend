import { AspectRatio } from '@chakra-ui/layout';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { Image } from '@chakra-ui/react';
import { IBlog } from '../../../../../../server/shared_with_front/types/types-shared';
import { FALLBACK_IMG } from 'src/constants';

interface BlogContentProps {
  blog: IBlog;
}

export const BlogContent: React.FC<BlogContentProps> = ({ blog }) => {
  return (
    <>
      <AspectRatio ratio={[3 / 2, null, null, 712 / 390]} w="full">
        <Image src={blog.img || FALLBACK_IMG} borderRadius="8px" />
      </AspectRatio>
      <TextRegular
        fontSize="16px"
        lineHeight={['25px', '33px']}
        pt="8px"
        whiteSpace={'pre-wrap'}
      >
        {blog.body}
      </TextRegular>
    </>
  );
};
