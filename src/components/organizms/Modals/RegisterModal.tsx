import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  HStack,
  Checkbox,
  FormControl,
  InputGroup,
  InputLeftAddon,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { Select } from 'src/components/atoms/Selects';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { InputGrey } from 'src/components/molecules/Inputs/InputGrey';
import { SelectGrey } from 'src/components/molecules/Selects/SelectGrey';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  openLogin: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  openLogin,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="38px 48px" w="460px">
        <ModalHeader p="0">
          <HeadingSecondary pb="40px" fontSize="24px">
            Register
          </HeadingSecondary>
        </ModalHeader>
        <ModalCloseButton top="35px" right="48px" />
        <ModalBody p="0">
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
                <VStack spacing="25px">
                  <VStack w="full" spacing="0">
                    <FormikInput placeholder="Full name" name="fullName" />
                    <FormikInput placeholder="Email" name="email" />
                    <FormikInput
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                    <Field name="role">{({field}) => (
                      <FormControl pt="2">
                        <SelectGrey {...field} placeholder="Choose Role">
                          <option>Simple User</option>
                          <option>Dealer</option>
                        </SelectGrey>
                      </FormControl>
                    )}</Field>
                    <Field name="phoneNum">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.name}
                          pt="8px"
                        >
                          <InputGroup>
                            <InputLeftAddon children="+995" />
                            <InputGrey
                              {...field}
                              type="number"
                              placeholder="Phone Number"
                            />
                            {form.error && (
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            )}
                          </InputGroup>
                        </FormControl>
                      )}
                    </Field>
                  </VStack>
                  <HStack w="full">
                    <Checkbox colorScheme="autoOrange" />
                    <TextRegular>I agree to </TextRegular>
                    <TextButton color="#427AD6">Privacy Policy</TextButton>
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
