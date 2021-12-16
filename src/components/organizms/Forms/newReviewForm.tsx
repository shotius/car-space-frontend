import { Textarea, useToast } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { UserSearchSelect } from 'src/components/molecules/Selects/UserSearchSelect';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { addCustomerReview } from 'src/redux/features/customer/customerSlice';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import { isApiValidationError } from 'src/utils/functions/typeChecker';

interface AddNewReviewProps {}

interface InitialState {
  text: string;
  userId: string;
  photos: FileList | null;
}

export const NewReviwForm: React.FC<AddNewReviewProps> = ({}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

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
    if (photos && photos.length > 4) {
      error = 'Photos must be less then 4';
    }
    return error;
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, { setErrors }) => {
        const formdata = new FormData();
        for (let [key, value] of Object.entries(values)) {
          formdata.append(key, value);
        }

        dispatch(addCustomerReview(formdata))
          .unwrap()
          .then(() =>
            toast({
              title: 'New Review added',
              duration: 2000,
              status: 'success',
              position: 'top',
            })
          )
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
          <HeadingSecondary pb="4">Add new Review</HeadingSecondary>
          <Field name="userId" validate={validateUserId}>
            {({ field, form }) => (
              <>
                <UserSearchSelect
                  {...field}
                  name="userId"
                  onSelect={(userId: string) => {
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
                <TextRegular as="span" display="block" color="red">
                  {form.errors.photos}
                </TextRegular>
              </>
            )}
          </Field>
          <ButtonRegular type="submit" mt="4">
            Add Review
          </ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
