import {
  AspectRatio,
  CloseButton,
  Heading,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router';
import { EditIcon } from 'src/components/atoms/Icons/EditIcon';
import { FALLBACK_IMG } from 'src/constants';
import blogServices from 'src/services/blog.services';
import { useBlogEditDrawer } from 'src/utils/hooks/useBlogEditDrawer';
import { useRoles } from 'src/utils/hooks/useRoles';
import { IBlog } from '../../../../../server/shared_with_front/types/types-shared';
import { EditButton } from '../Buttons/EditButton';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface BlogCardProps {
  blog: IBlog;
  getAllBlogs: () => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ getAllBlogs, blog }) => {
  const history = useHistory();
  const { isAdmin } = useRoles();
  const toast = useToast();

  const { toggleEditingDrawer, EditBlogDrawer } = useBlogEditDrawer();

  function handleBlogEdit(e: React.SyntheticEvent) {
    e.stopPropagation();
    toggleEditingDrawer();
  }

  function deleteBlog(e: React.SyntheticEvent) {
    e.stopPropagation();
    const isConfirmed = confirm('Do you realy want to delete?');

    isConfirmed &&
      blogServices
        .deleteBlogById(blog.id)
        .then(() => {
          toast({
            title: 'blog deleted',
            position: 'top',
            status: 'success',
          });
          getAllBlogs();
        })
        .catch(() =>
          toast({
            title: 'Could not delete post',
            position: 'top',
            status: 'error',
          })
        );
  }

  return (
    <>
      <Card
        p="0"
        _hover={{
          boxShadow: '0 0.7rem 1.5rem rgba(0, 0, 0, 0.1)',
          transition: 'all .3s',
        }}
        cursor="pointer"
        onClick={() => history.push(`/blog/${blog.id}`)}
        position="relative"
      >
        {isAdmin && (
          <HStack
            pos="absolute"
            w="full"
            justifyContent={'end'}
            zIndex="banner"
          >
            <EditButton onClick={handleBlogEdit} />
            <CloseButton onClick={deleteBlog} />
          </HStack>
        )}
        <AspectRatio ratio={2 / 1}>
          <Image
            src={blog.img || FALLBACK_IMG}
            borderTopRadius="8px"
            h="177px"
            w="full"
          />
        </AspectRatio>
        <VStack
          p="4"
          pb="37px"
          spacing={['2', null, null, '1.5']}
          alignItems="flex-start"
        >
          <Heading fontSize="16px" lineHeight="21px" noOfLines={2}>
            {blog.header}
          </Heading>
          <TextRegular
            lineHeight="24px"
            w="full"
            noOfLines={[3, null, null, 2]}
            whiteSpace={'pre-wrap'}
          >
            {blog.body}
          </TextRegular>
        </VStack>
      </Card>
      <EditBlogDrawer
        blog={blog}
        operation="modifing"
        refetchCb={getAllBlogs}
      />
    </>
  );
};
