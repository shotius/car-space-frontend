import { VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';

interface ForgotPasswordProps {
  closeForgetPassword: () => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  closeForgetPassword,
}) => {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {
        console.log(values);
        closeForgetPassword();
      }}
    >
      {() => (
        <Form>
          <VStack spacing={4}>
            <FormikInput name="email" label="Email" placeholder="Email" />
            <ButtonRegular type="submit">Submit</ButtonRegular>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
