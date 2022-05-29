import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import { CopyIcon } from 'src/components/atoms/Icons/CopyIcon';
import { EditIcon } from 'src/components/atoms/Icons/EditIcon';
import { FbIconBlack } from 'src/components/atoms/Icons/FBIconBlack';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { dateToDMY, dateToYMD } from 'src/utils/functions/dateToYMD';
import { useBlogEditDrawer } from 'src/utils/hooks/useBlogEditDrawer';
import { useRoles } from 'src/utils/hooks/useRoles';
import { IBlog } from '../../../../../../server/shared_with_front/types/types-shared';

interface HeaderProps {
  blog: IBlog;
  getBlogById: (id: string) => void;
}

export const BlogHeader: React.FC<HeaderProps> = ({ blog, getBlogById }) => {
  const toast = useToast();
  const url = window.location;
  const { isAdmin } = useRoles();

  const { toggleEditingDrawer, EditBlogDrawer } = useBlogEditDrawer();

  function handleRefetchBlog() {
    getBlogById(blog.id);
  }

  const date = blog.createdAt ? dateToDMY(blog.createdAt) : 'created: -';

  return (
    <Box w="full">
      <HStack align="baseline" justify={'space-between'}>
        <HeadingSecondary
          fontSize={['24px', '32px', null, '50px']}
          pt={['0px', '20px', '30px', '48px']}
        >
          {blog.header}
        </HeadingSecondary>
        {isAdmin && (
          <IconButton
            aria-label="edit blog"
            as={EditIcon}
            onClick={toggleEditingDrawer}
          />
        )}
      </HStack>
      <HStack w="full">
        <TextRegular opacity="0.5" fontSize="14px">
          {date}
        </TextRegular>
        <Spacer />
        <Button
          fontWeight="400"
          variant="link"
          fontSize="14px"
          aria-label="copy link"
          bg="transparent"
          _hover={{ bg: 'transparent' }}
          pr="10px"
          onClick={() => {
            navigator.clipboard
              .writeText(url.toString())
              .then(() => {
                toast({
                  description: 'Link copied to the clipboard',
                  duration: 1500,
                  status: 'success',
                  position: 'top',
                });
              })
              .catch(() => {
                toast({
                  description: 'Could not copy the url',
                  duration: 2000,
                  status: 'error',
                  position: 'top',
                });
              });
          }}
        >
          <Icon as={CopyIcon} boxSize={6} />
          Copy Link
        </Button>
        <HStack>
          <Button
            onClick={() => {
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${window.location}`,
                'share',
                'left=100,top=100,width=320,height=320'
              );
            }}
            variant="link"
            bg="transparent"
            fontSize="14px"
            fontWeight="400"
            aria-label="facebook share"
            _hover={{ bg: 'transparent' }}
          >
            <Icon as={FbIconBlack} boxSize={6} />
            Share
          </Button>
        </HStack>
      </HStack>
      <EditBlogDrawer
        operation="modifing"
        blog={blog}
        refetchCb={handleRefetchBlog}
      />
    </Box>
  );
};
