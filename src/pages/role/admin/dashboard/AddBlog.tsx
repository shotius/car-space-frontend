import { Center, Textarea, useToast, VStack } from '@chakra-ui/react';
import TextareaAutosize from 'react-textarea-autosize';
import { Field, Form, Formik } from 'formik';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { FormikFileInput } from 'src/components/molecules/FormikInput/FormikFileInput';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import blogServices from 'src/services/blog.services';

interface AddBlogProps {}

interface InitState {
  header: string;
  cover: FileList | null;
  body: string;
}

const AddBlog: React.FC<AddBlogProps> = ({}) => {
  const initialValues: InitState = {
    header: '',
    cover: null,
    body: '',
  };
  const toast = useToast();
  return (
    <ContainerOuter maxW="700px" pt={['32px', null, null, '40px']}>
      <Center>
        <Card w="full">
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
        </Card>
      </Center>
    </ContainerOuter>
  );
};

export default AddBlog;
