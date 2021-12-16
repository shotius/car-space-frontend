import { Center, Textarea } from '@chakra-ui/react';
import TextareaAutosize from 'react-textarea-autosize';
import { Field, Form, Formik } from 'formik';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { UserSearchSelect } from 'src/components/molecules/Selects/UserSearchSelect';
import { useAppDispatch } from 'src/redux/app/hook';
import { addCustomerReview } from 'src/redux/features/customer/customerSlice';
import { isApiValidationError } from 'src/utils/functions/typeChecker';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface AddNewReviewProps {}

interface InitialState {
  text: string;
  userId: string;
  photos: FileList | null;
}

export const AddNewReview: React.FC<AddNewReviewProps> = ({}) => {
  const dispatch = useAppDispatch();

  const initialState: InitialState = {
    text: '',
    userId: '',
    photos: null,
  };

  const validateUserId = (userId: string) => {
    let error: string = '';
    if (!userId) {
      error = 'Required';
    } else if (userId.length !== 24) {
      error = 'Invalid length';
    }
    return error;
  };

  const validatePhotos = (photos: FileList) => {
    let error = '';
    if (photos.length > 4) {
      error = 'Photos must be less then 4';
    }
    return error;
  };

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <Card w="500px" p="4">
          <HeadingSecondary pb="4">Add new Review</HeadingSecondary>
          <Formik
            initialValues={initialState}
            onSubmit={(values, { setErrors }) => {
              console.log(values);
              const formdata = new FormData();
              for (let [key, value] of Object.entries(values)) {
                console.log(key, value);
                formdata.append(key, value);
              }

              dispatch(addCustomerReview(formdata))
                .unwrap()
                .then((data) => console.log('data: ', data))
                .catch((error) => {
                  if (isApiValidationError(error)) {
                    if (error.status === 422 && error.errors?.length) {
                      setErrors(toErrorMap(error.errors));
                    }
                  }
                });
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <Field name="userId" validate={validateUserId}>
                  {({ field, form }) => (
                    <>
                      <UserSearchSelect
                        {...field}
                        name="userId"
                        onSelect={(userId: string) => {
                          console.log('userId', userId);
                          setFieldValue('userId', userId);
                        }}
                      />
                      {
                        <TextRegular as="span" color="red">
                          {form.errors.userId}
                        </TextRegular>
                      }
                    </>
                  )}
                </Field>
                <Field name="text">
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
                <Field name="photos" validate={validatePhotos}>
                  {({ field, form }) => (
                    <>
                      <input
                        {...field}
                        type="file"
                        multiple
                        value={undefined}
                        onChange={(e) => {
                          setFieldValue('photos', e.currentTarget.files);
                        }}
                      />
                      <TextRegular as="span" display="block" color="red">{form.errors.photos}</TextRegular>
                    </>
                  )}
                </Field>
                <ButtonRegular type="submit" mt="4">
                  Add Review
                </ButtonRegular>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </ContainerOuter>
  );
};
