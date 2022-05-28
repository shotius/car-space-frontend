import { Textarea, useToast, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikFileInput } from 'src/components/molecules/FormikInput/FormikFileInput';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import blogServices from 'src/services/blog.services';

interface AddBlogFormProps {
  initBlog?: Omit<InitState, 'cover'>;
  operation?: 'modifing' | 'adding';
}
interface InitState {
  header: string;
  cover: FileList | null;
  body: string;
}

const initState: InitState = {
  header: '',
  cover: null,
  body: '',
};

export const AddBlogForm: React.FC<AddBlogFormProps> = ({
  initBlog,
  operation = 'adding',
}) => {
  const toast = useToast();

  const initialValues: InitState =
    initBlog && operation === 'modifing'
      ? { ...initBlog, cover: null }
      : initState;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const { cover, ...restValues } = values;
        const formdata = new FormData();
        if (cover) {
          formdata.append('cover', cover[0]);
        }

        // add rest of values
        for (let [key, value] of Object.entries(restValues)) {
          formdata.append(key, value);
        }

        blogServices
          .createBlog(formdata)
          .then(() => {
            toast({
              title: 'Blog created',
              status: 'success',
              position: 'top',
            });
          })
          .catch(() => {
            toast({
              title: 'Something went wrong',
              status: 'error',
              position: 'top',
            });
          })
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing="4">
            <HeadingSecondary>Add new blog</HeadingSecondary>
            <FormikInput
              name="header"
              label="Blog Heading"
              placeholder="Heading"
            />
            <FormikFileInput name="cover" label="Cover" />

            <Field name="body">
              {({ field }) => (
                <Textarea
                  mt="2"
                  {...field}
                  placeholder="Write Description"
                  size="sm"
                  as={TextareaAutosize}
                  maxRows={10}
                />
              )}
            </Field>
            <ButtonRegular isLoading={isSubmitting} type={'submit'}>
              Add new Blog
            </ButtonRegular>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
