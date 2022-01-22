import { HStack, VStack } from '@chakra-ui/layout';
import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikCheckbox } from 'src/components/molecules/formik/FormikCheckbox';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { registerUser } from 'src/redux/features/auth/authSlice';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import { isApiValidationError } from 'src/utils/functions/typeChecker';
import * as Yup from 'yup';
import { Roles } from '../../../../../server/shared_with_front/contants';
import { RegisterParams } from '../../../../../server/shared_with_front/types/types-shared';

interface RegisterFormProps {
  onClose: () => void;
  openLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ openLogin }) => {
  const [verificationInfoShown, setVerificationInfoShown] = useState(false);
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();
  const toast = useToast();

  // form validation
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short')
      .matches(/[?^\s]/, 'Missing last name'),
    email: Yup.string().email('Invalid mail').required('Required'),
    password: Yup.string().min(4, 'Too short').required('Required'),
    phoneNum: Yup.string()
      .min(9, 'Georgian number should have 9 numbers')
      .max(9, 'Woow, Too long'),
    // privacy: Yup.boolean().oneOf([true], 'Must Accept Privacy Policy'),
  });

  // form initial state
  const initState: RegisterParams = {
    fullName: '',
    email: '',
    password: '',
    role: Roles.USER,
    phone: '',
    // privacy: true,
  };

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
      onSubmit={(values, { setErrors, setSubmitting }) => {
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
      }}
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
              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.phoneNum && form.touched.phoneNum}
                    py="8px"
                  >
                    <InputGroup>
                      <InputLeftAddon
                        children="+995"
                        h={['53px', null, '40px']}
                        bg="#F4F4F4"
                      />
                      <InputGrey
                        {...field}
                        type="number"
                        placeholder="Phone Number"
                        h={['53px', null, '40px']}
                        borderLeftRadius="none"
                        isRequired
                      />
                    </InputGroup>
                    {form.errors && (
                      <FormErrorMessage as="p">
                        {form.errors.phoneNum}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                )}
              </Field>

              <FormikCheckbox name="role" label="I'm a dealer" />

              {/* <FormikCheckbox name="privacy" isRequired>
                <TextRegular fontSize="14px">I agree to </TextRegular>
                <TextButton color="#427AD6" fontSize="14px">
                  Privacy Policy
                </TextButton>
              </FormikCheckbox> */}
            </VStack>

            {/* Submit button  */}
            <ButtonRegular type="submit" isLoading={isSubmitting}>Create an account</ButtonRegular>
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
