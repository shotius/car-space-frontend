import { openLoginModal } from 'src/redux/features/global/gloabalSlice';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { forgotPassword } from 'src/redux/features/auth/authSlice';
import { toErrorMap } from '../functions/toErrorMap';
import {
  isApiValidationError,
  isApiDefaultError,
} from '../functions/typeChecker';
import { useAppDispatch, useAppSelector } from './../../redux/app/hook';

export const useForgotPasswordForm = ({ closeForgetPassword }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [message, setMessage] = useState('');

  const email = useAppSelector((state) => state.authReducer.emailInput);

  const initState = {
    email: email || '',
  };

  const onSubmit = (values, { setErrors, setSubmitting }) => {
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
  };

  const openLogin = () => dispatch(openLoginModal());

  return { initState, message, onSubmit, openLogin };
};
