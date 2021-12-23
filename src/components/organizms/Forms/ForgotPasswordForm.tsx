import { useToast, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { forgotPassword } from 'src/redux/features/auth/authSlice';
import { openLoginModal } from 'src/redux/features/global/gloabalSlice';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import {
  isApiDefaultError,
  isApiValidationError,
} from 'src/utils/functions/typeChecker';

interface ForgotPasswordProps {
  closeForgetPassword: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordProps> = ({
  closeForgetPassword,
}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [message, setMessage] = useState('');

  if (message) {
    return (
      <VStack h="300px" justify="center">
        <HeadingSecondary color="autoOrange.500">
          Recovery link is sent to
        </HeadingSecondary>
        <HeadingSecondary>{message}</HeadingSecondary>
      </VStack>
    );
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values, { setErrors, setSubmitting }) => {
        dispatch(forgotPassword(values.email))
          .unwrap()
          .then((data) => {
            setSubmitting(false);
            setMessage(data);
            setTimeout(() => {
              setMessage('');
              closeForgetPassword();
            }, 10000);
          })
          .catch((error) => {
            setSubmitting(false);
            if (isApiValidationError(error)) {
              if (error.status === 422 && error.errors?.length) {
                setErrors(toErrorMap(error.errors));
              }
            } else if (isApiDefaultError(error)) {
              toast({
                title: error.error || 'Something went wrong',
                status: 'error',
                position: 'top',
              });
            }
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing={4} align="flex-start" pt="24px">
            <FormikInput
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
            />
            <ButtonRegular isLoading={isSubmitting} type="submit">
              Submit
            </ButtonRegular>
            <TextButton
              color="#427AD6"
              onClick={() => dispatch(openLoginModal())}
              fontSize="13px"
            >
              Log in
            </TextButton>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
