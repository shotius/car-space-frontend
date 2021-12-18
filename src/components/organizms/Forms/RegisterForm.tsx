import { HStack, VStack } from '@chakra-ui/layout';
import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
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
  const { registering } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short')
      .matches(/[?^\s]/, 'Missing last name'),
    email: Yup.string().email('Invalid mail').required('Required'),
    password: Yup.string().min(4, 'Too short').required('Required'),
    phoneNum: Yup.string()
      .min(9, 'Georgian number should have 9 numbers')
      .max(9, 'Woow, Too long'),
    privacy: Yup.boolean().oneOf([true], 'Must Accept Privacy Policy'),
  });

  const initState: RegisterParams = {
    fullName: '',
    email: '',
    password: '',
    role: Roles.USER,
    phone: '',
    privacy: false,
  };

  return (
    <Formik
      initialValues={initState}
      validationSchema={SignupSchema}
      onSubmit={(values, { setErrors }) => {
        console.log('values: ', values);
        dispatch(registerUser(values))
          .unwrap()
          .then((data) => {
            toast({
              title: `${data.fullName} registered successfully`,
              position: 'top',
              status: 'success',
              duration: 3000,
            });
            openLogin();
          })
          .catch((error) => {
            if (isApiValidationError(error)) {
              setErrors(toErrorMap(error.errors));
            }
          });
      }}
    >
      {() => (
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

              <FormikCheckbox name="privacy" isRequired>
                <TextRegular fontSize="14px">I agree to </TextRegular>
                <TextButton color="#427AD6" fontSize="14px">
                  Privacy Policy
                </TextButton>
              </FormikCheckbox>
            </VStack>

            {/* Submit button  */}
            <ButtonRegular type="submit" isLoading={registering}>
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
