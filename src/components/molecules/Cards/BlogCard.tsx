import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  IconButton,
  Image,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { EditIcon } from 'src/components/atoms/Icons/EditIcon';
import { AddBlogForm } from 'src/components/organizms/Forms/AddBlogForm';
import { ContactForm } from 'src/components/organizms/Forms/ContactForm';
import { FALLBACK_IMG } from 'src/constants';
import blogServices from 'src/services/blog.services';
import { useRoles } from 'src/utils/hooks/useRoles';
import { IBlog } from '../../../../../server/shared_with_front/types/types-shared';
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
  const { isOpen: isBlogEditing, onToggle: toggleEditingWindow } =
    useDisclosure();

  function handleBlogEdit(e: React.SyntheticEvent) {
    e.stopPropagation();
    toggleEditingWindow();
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
          <HStack pos="absolute" w="full" justifyContent={'end'}>
            <IconButton
              aria-label="edit"
              as={EditIcon}
              bg="transparent"
              _hover={{
                bg: 'transparent',
              }}
              onClick={handleBlogEdit}
            />
            <CloseButton onClick={deleteBlog} />
          </HStack>
        )}
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
          <TextRegular
            lineHeight="24px"
            w="full"
            noOfLines={[3, null, null, 2]}
          >
            {blog.body}
          </TextRegular>
        </VStack>
      </Card>

      <Drawer isOpen={isBlogEditing} onClose={toggleEditingWindow} size="m">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Form</DrawerHeader>
          <DrawerBody>
            <AddBlogForm initBlog={blog} operation="modifing" />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
