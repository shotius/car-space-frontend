import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { useForgotPasswordForm } from 'src/utils/hooks/useForgotPasswordForm';

interface ForgotPasswordProps {
  closeForgetPassword: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordProps> = (props) => {
  const { message, onSubmit, initState, openLogin } =
    useForgotPasswordForm(props);

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
    <Formik initialValues={initState} onSubmit={onSubmit}>
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
            <TextButton color="#427AD6" onClick={openLogin} fontSize="13px">
              Log in
            </TextButton>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
