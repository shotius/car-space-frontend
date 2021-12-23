import { HStack, useToast, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { changePassword } from 'src/redux/features/auth/authSlice';
import { openForgotPasswordModal } from 'src/redux/features/global/gloabalSlice';
import {
  isApiDefaultError,
  isApiValidationError,
} from 'src/utils/functions/typeChecker';
import * as Yup from 'yup';

interface ChangePasswordFormProps {}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { token } = useParams<{ token: string }>();
  const [error, setError] = useState('');
  const toast = useToast();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(4, 'Too Short')
      .max(50, 'Too long')
      .required('Required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ password: '', retypePassword: '' }}
      onSubmit={(values, { setErrors, setSubmitting, resetForm }) => {
        const { password, retypePassword } = values;

        // if passwords does not match error
        if (password !== retypePassword) {
          setErrors({
            password: 'passwords does not patch',
            retypePassword: 'passwords does not match',
          });
        } else {
          // else submit the form
          dispatch(changePassword({ token, password }))
            .unwrap()
            .then(() => {
              toast({
                title: "Password changed successfully", 
                position: "top", 
                status: "success"
              })
              history.push('/')
              setSubmitting(false);
              resetForm();
            })
            .catch((error) => {
              setSubmitting(false);
              if (
                isApiDefaultError(error) &&
                error.error === 'Token is outdated'
              ) {
                setError('Token you provided is oudated ');
                toast({
                  title: 'Token you provided is oudated ',
                  position: 'top',
                  status: 'error',
                });
              } else if (isApiValidationError(error)) {
                error.errors.map((error) => {
                  toast({
                    title: error,
                    status: 'error',
                    position: 'top',
                  });
                });
              } else {
                toast({
                  title: 'Something went wrong ;(, try later',
                  position: 'top',
                  status: 'error',
                });
              }
            });
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <VStack spacing={4} align="flex-start">
            <FormikInput
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
            />
            <FormikInput
              name="retypePassword"
              type="password"
              label="Retype Password"
              placeholder="Retype Password"
              w="full"
            />
            {error && (
              <HStack>
                <TextRegular>{error}</TextRegular>
                <TextButton
                  onClick={() => dispatch(openForgotPasswordModal())}
                  color="#427AD6"
                >
                  Go take one
                </TextButton>
              </HStack>
            )}
            <ButtonRegular isLoading={isSubmitting} type="submit">
              Change password
            </ButtonRegular>
            <TextButton
              color="#427AD6"
              fontSize="14px"
              onClick={() => history.push('/')}
            >
              Go on home page
            </TextButton>
          </VStack>
        </Form>
      )}
    </Formik>
  );
};
