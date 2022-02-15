import { VStack } from '@chakra-ui/layout';
import { HStack, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useLoginForm } from 'src/utils/hooks/useLoginForm';

interface LoginFormProps {
  onClose: () => void;
  openRegister: () => void;
  openForgetPassword: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onClose,
  openRegister,
  openForgetPassword,
}) => {
  const { onSubmit, initState, saveEmail } = useLoginForm({ onClose });
  return (
    <Formik initialValues={initState} onSubmit={onSubmit}>
      {(props) => (
        <Form>
          <HeadingSecondary fontSize="24px" pb={['80px', null, '48px']}>
            Log in
          </HeadingSecondary>
          <VStack spacing="32px" pb="10px">
            <VStack spacing="0" w="full" align="start">
              <FormikInput
                name="email"
                placeholder="Email"
                h={['53px', null, '40px']}
              />
              <FormikInput
                name="password"
                placeholder="Password"
                type="password"
                h={['53px', null, '40px']}
              />
            </VStack>
            <ButtonRegular
              variant="solid"
              w="full"
              colorScheme="blue"
              type="submit"
            >
              Log in
            </ButtonRegular>

            {/* Other forms  */}
            <Stack
              w="full"
              align="flex-start"
              direction={['column', 'row']}
              justify="space-between"
            >
              <HStack>
                <TextRegular fontSize="14px">
                  Don’t have an account?
                </TextRegular>
                <TextButton
                  color="#427AD6"
                  onClick={() => {
                    saveEmail(props.values.email);
                    openRegister();
                  }}
                  fontSize="14px"
                >
                  Register
                </TextButton>
              </HStack>
              <TextButton
                color="#427AD6"
                onClick={() => {
                  saveEmail(props.values.email);
                  openForgetPassword();
                }}
                fontSize="13px"
              >
                Forgot password?
              </TextButton>
            </Stack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
