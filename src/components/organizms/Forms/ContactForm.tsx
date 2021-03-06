import { useToast } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/textarea';
import { Field, Form, Formik } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { sendMessage } from 'src/redux/features/auth/userSlice';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import {
  isApiDefaultError,
  isApiValidationError,
} from 'src/utils/functions/typeChecker';
import { IMessageBody } from '../../../../../server/shared_with_front/types/types-shared';

interface ContactFormProps {
  onClose: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const {
    isAuthenticated: isAuth,
    phone,
    fullName,
  } = useAppSelector((state) => state.userInfoSlice);

  const dispatch = useAppDispatch();
  const toast = useToast();

  const initialValues: IMessageBody = {
    name: isAuth && fullName ? fullName : '',
    phone: isAuth && phone ? phone : '',
    message: '',
    link: window.location.toString(),
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        dispatch(sendMessage(values))
          .unwrap()
          .then(() => {
            onClose();
            setSubmitting(false);
            toast({
              title: 'Message Sent',
              position: 'top',
              status: 'success',
            });
          })
          .catch((error) => {
            setSubmitting(false);
            if (isApiValidationError(error)) {
              if (error.status === 422 && error.errors?.length) {
                setErrors(toErrorMap(error.errors));
              }
            } else if (isApiDefaultError(error)) {
              onClose();
              toast({
                title: error.error,
                position: 'top',
                status: 'error',
              });
            } else {
              toast({
                title: 'Something went wrong',
                position: 'top',
                status: 'error',
              });
            }
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormikInput name="name" placeholder="Your Name" />
          <FormikInput name="phone" placeholder="Phone" type="number" />
          <ButtonRegular type="submit" mt="4" isLoading={isSubmitting}>
            Ask for call
          </ButtonRegular>
        </Form>
      )}
    </Formik>
  );
};
