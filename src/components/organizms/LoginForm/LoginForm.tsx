import { VStack } from '@chakra-ui/layout';
import { HStack, Stack, useToast } from '@chakra-ui/react';
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
import {
  isApiDefaultError,
  isApiValidationError,
} from 'src/utils/functions/typeChecker';
import { Roles } from '../../../../../server/shared_with_front/contants';

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
  const dispatch = useAppDispatch();
  const history = useHistory();
  const toast = useToast();

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
            history.push(
              `/${
                result.role === Roles.ADMIN ? Roles.ADMIN : Roles.USER
              }/dashboard`
            );
            onClose();
          })
          .catch((error) => {
            if (isApiValidationError(error)) {
              if (error.status === 422 && error.errors?.length) {
                setErrors(toErrorMap(error.errors));
              }
            } else if (isApiDefaultError(error)) {
              toast({
                title: error.error,
                position: 'top',
                duration: 3000,
                status: 'error',
              });
            } else {
              toast({
                title: 'something bad happend :{ sorry.. try later',
                position: 'top',
                duration: 3000,
                status: 'error',
              });
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
                  onClick={openRegister}
                  fontSize="14px"
                >
                  Register
                </TextButton>
              </HStack>
              <TextButton
                color="#427AD6"
                onClick={openForgetPassword}
                fontSize="13px"
                pt={[null, null, '3px']}
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
