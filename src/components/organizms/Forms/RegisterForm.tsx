import { HStack, VStack } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikCheckbox } from 'src/components/molecules/formik/FormikCheckbox';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { FormikTelInput } from 'src/components/molecules/FormikInput/FormikTelInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useRegisterForm } from 'src/utils/hooks/useRegisterForm';

interface RegisterFormProps {
  openLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ openLogin }) => {
  const { verificationInfoShown, email, initState, SignupSchema, onSubmit } =
    useRegisterForm();

  // registration is successfull this message will be desplayed
  if (verificationInfoShown) {
    return (
      <VStack h="500px" justify="center">
        <HeadingSecondary color="autoOrange.500" fontSize="24px">
          Verification link is sent to
        </HeadingSecondary>
        <HeadingSecondary fontSize="24px">{email}</HeadingSecondary>
      </VStack>
    );
  }

  return (
    <Formik
      initialValues={initState}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <HeadingSecondary pb={['80px', null, '40px']} fontSize="24px">
            Register
          </HeadingSecondary>
          <VStack spacing="22px" pb="4">
            <VStack w="full" spacing="0">
              <FormikInput
                placeholder="Full name"
                name="fullName"
                h={['53px', null, '40px']}
                isRequired
              />
              <FormikInput
                placeholder="Email"
                name="email"
                h={['53px', null, '40px']}
                isRequired
              />
              <FormikInput
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                h={['53px', null, '40px']}
              />
              <FormikTelInput name="phone" />

              <FormikCheckbox name="role" label="I'm a dealer" />
            </VStack>

            {/* Submit button  */}
            <ButtonRegular type="submit" isLoading={isSubmitting}>
              Create an account
            </ButtonRegular>
            <HStack w="full">
              <TextRegular>Already a member?</TextRegular>
              <TextButton color="#427AD6" onClick={openLogin}>
                Log in
              </TextButton>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
