import { VStack, HStack } from '@chakra-ui/layout';
import {
  FormControl,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
  Checkbox,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { SelectGrey } from 'src/components/molecules/Selects/SelectGrey';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface RegisterFormProps {
  onClose: () => void;
  openLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ openLogin }) => {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        role: '',
        phoneNum: '',
      }}
      onSubmit={(values) => {
        console.log('values: ', values);
      }}
    >
      {() => (
        <Form>
          <HeadingSecondary pb={['80px', null, '40px']} fontSize="24px">
            Register
          </HeadingSecondary>
          <VStack spacing="25px" pb="20px">
            <VStack w="full" spacing="0">
              <FormikInput
                placeholder="Full name"
                name="fullName"
                h={['53px', null, '40px']}
              />
              <FormikInput
                placeholder="Email"
                name="email"
                h={['53px', null, '40px']}
              />
              <FormikInput
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                h={['53px', null, '40px']}
              />
              <Field name="role">
                {({ field }) => (
                  <FormControl pt="2">
                    <SelectGrey
                      {...field}
                      placeholder="Choose Role"
                      h={['53px', null, '40px']}
                    >
                      <option>Simple User</option>
                      <option>Dealer</option>
                    </SelectGrey>
                  </FormControl>
                )}
              </Field>
              <Field name="phoneNum">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                    pt="8px"
                  >
                    <InputGroup>
                      <InputLeftAddon children="+995" h={['53px',null, '40px']} bg="#F4F4F4"/>
                      <InputGrey
                        {...field}
                        type="number"
                        placeholder="Phone Number"
                        h={['53px',null, '40px']}
                        borderLeftRadius="none"
                      />
                      {form.error && (
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      )}
                    </InputGroup>
                  </FormControl>
                )}
              </Field>
            </VStack>
            <HStack w="full">
              <Checkbox
                colorScheme="autoOrange"
                boxShadow="none"
                _active={{ boxShadow: 'none' }}
              />
              <TextRegular fontSize="14px">I agree to </TextRegular>
              <TextButton color="#427AD6" fontSize="14px">
                Privacy Policy
              </TextButton>
            </HStack>
            <ButtonRegular type="submit">Create an account</ButtonRegular>
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
