import { useAppSelector } from './../../redux/app/hook';
import { useToast } from '@chakra-ui/react';
import { useAppDispatch } from 'src/redux/app/hook';
import { loginUser, setInputEmail } from 'src/redux/features/auth/authSlice';
import { toErrorMap } from '../functions/toErrorMap';
import {
  isApiValidationError,
  isApiDefaultError,
} from '../functions/typeChecker';

export const useLoginForm = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const email = useAppSelector((state) => state.authReducer.emailInput);

  const initState = {
    email: email || '',
    password: '',
  };

  const onSubmit = (values, { setErrors }) => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(credentials))
      .unwrap()
      .then(onClose)
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
  };

  const saveEmail = (email: string) => {
    dispatch(setInputEmail(email));
  };

  return { onSubmit, initState, saveEmail };
};
