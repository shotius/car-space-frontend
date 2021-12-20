import { VStack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { loginUser } from 'src/redux/features/auth/authSlice';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import { isApiValidationError } from 'src/utils/functions/typeChecker';

interface LoginFormProps {
  onClose: () => void;
  openRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onClose,
  openRegister,
}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, { setErrors }) => {
        const credentials = {
          email: values.email,
          password: values.password,
        };
        dispatch(loginUser(credentials))
          .unwrap()
          .then((result) => {
            history.push(`/${result.role}/dashboard`);
            onClose();
          })
          .catch((error) => {
            if (isApiValidationError(error)) {
              if (error.status === 422 && error.errors?.length) {
                setErrors(toErrorMap(error.errors));
              }
            }
          });
      }}
    >
      {() => (
        <Form>
          <HeadingSecondary fontSize="24px" pb={['80px', null, '48px']}>
            Log in
          </HeadingSecondary>
          <VStack spacing="32px" pb="10px">
            <VStack spacing="0" w="full">
              <FormikInput
                name="email"
                placeholder="email"
                h={['53px', null, '40px']}
              />
              <FormikInput
                name="password"
                placeholder="password"
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
            <HStack w="full">
              <TextRegular fontSize="14px">Don’t have an account?</TextRegular>
              <TextButton
                color="#427AD6"
                onClick={openRegister}
                fontSize="14px"
              >
                Register
              </TextButton>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
