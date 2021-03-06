import { useAppSelector } from './../../redux/app/hook';
import { useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from 'src/redux/app/hook';
import { Roles } from '../../../../server/shared_with_front/contants';
import { RegisterParams } from '../../../../server/shared_with_front/types/types-shared';
import * as Yup from 'yup';
import { registerUser } from 'src/redux/features/auth/authSlice';
import { toErrorMap } from '../functions/toErrorMap';
import { isApiValidationError } from '../functions/typeChecker';

export const useRegisterForm = () => {
  const [verificationInfoShown, setVerificationInfoShown] = useState(false);
  const [email, setEmail] = useState('');
  const initEmail = useAppSelector((state) => state.authReducer.emailInput);

  const dispatch = useAppDispatch();
  const toast = useToast();

  // form initial state
  const initState: RegisterParams = {
    fullName: '',
    email: initEmail || '',
    password: '',
    role: Roles.USER,
    phone: '',
  };

  // form validation
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short')
      .matches(/[?^\s]/, 'Missing last name'),
    email: Yup.string().email('Invalid mail').required('Required'),
    password: Yup.string().min(4, 'Too short').required('Required'),
    phone: Yup.string().matches(/^\d{9}$/, 'Should include 9 numbers'),
  });

  const onSubmit = (values, { setErrors, setSubmitting }) => {
    // if "I'm a delaer is checked"
    const role = Array.isArray(values.role) ? Roles.DEALER : Roles.USER;

    // submit
    dispatch(registerUser({ ...values, role }))
      .unwrap()
      .then((data) => {
        setSubmitting(false);
        setEmail(data.email);
        setVerificationInfoShown(true);
        setTimeout(() => setVerificationInfoShown(false), 15000);
        toast({
          title: `Verification link is sent to '${data.email}'`,
          position: 'top',
          status: 'success',
          duration: 10000,
        });
      })
      .catch((error) => {
        setSubmitting(false);
        if (isApiValidationError(error)) {
          setErrors(toErrorMap(error.errors));
        }
      });
  };

  return {
    initState,
    SignupSchema,
    verificationInfoShown,
    setVerificationInfoShown,
    email,
    onSubmit,
  };
};
