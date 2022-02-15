import { useState } from 'react';
import { ForgotPasswordForm } from 'src/components/organizms/Forms/ForgotPasswordForm';
import { RegisterForm } from 'src/components/organizms/Forms/RegisterForm';
import { LoginForm } from 'src/components/organizms/LoginForm';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { AuthForm } from 'src/redux/features/auth/types';
import {
  toggleAuthModal,
  chooseAuthForm,
  closeAuthModal,
} from 'src/redux/features/global/gloabalSlice';

export const useAuthModal = () => {
  const form = useAppSelector((state) => state.globalAppState.chosenAuthForm);
  const isOpen = useAppSelector((state) => state.globalAppState.isAuthFormOpen);
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();
  const onToggle = () => dispatch(toggleAuthModal());
  const setForm = (form: AuthForm) => dispatch(chooseAuthForm(form));

  // choose which form to display on a modal
  const getForm = () => {
    switch (form) {
      case 'login':
        return (
          <LoginForm
            onClose={onToggle}
            openRegister={() => setForm('register')}
            openForgetPassword={() => setForm('forget-password')}
          />
        );
      case 'forget-password':
        return (
          <ForgotPasswordForm closeForgetPassword={() => setForm('login')} />
        );
      case 'register':
        return <RegisterForm openLogin={() => setForm('login')} />;
    }
  };

  const onClose = () => dispatch(closeAuthModal());

  return { onClose, email, setEmail, isOpen, getForm };
};
