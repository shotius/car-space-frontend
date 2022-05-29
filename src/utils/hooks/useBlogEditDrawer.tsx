import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { AddBlogForm } from 'src/components/organizms/Forms/AddBlogForm';
import { IBlog } from '../../../../server/shared_with_front/types/types-shared';

interface useBlogEditDrawerProps {
  blog?: IBlog;
  getAllBlogs?: () => void;
  operation?: 'modifing' | 'adding';
}

export const useBlogEditDrawer = () => {
  const { isOpen: isBlogEditing, onToggle: toggleEditingDrawer } =
    useDisclosure();

  const EditBlogDrawer: React.FC<useBlogEditDrawerProps> = ({
    blog,
    getAllBlogs = () => {},
    operation = 'adding',
  }) => (
    <Drawer isOpen={isBlogEditing} onClose={toggleEditingDrawer} size="m">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Contact Form</DrawerHeader>
        <DrawerBody>
          <AddBlogForm
            initBlog={blog}
            operation={operation}
            getAllBlogs={getAllBlogs}
            closeForm={toggleEditingDrawer}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return {
    isBlogEditing,
    toggleEditingDrawer,
    EditBlogDrawer,
  };
};
