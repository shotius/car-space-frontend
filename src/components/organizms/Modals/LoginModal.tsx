import { HStack, VStack } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { TextButton } from 'src/components/molecules/Buttons/TextButton';
import { FormikInput } from 'src/components/molecules/FormikInput/FormikInput';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { useAppDispatch } from 'src/redux/app/hook';
import { loginUser } from 'src/redux/features/auth/authSlice';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  // const { role } = useAppSelector((state) => state.authReducer);
  const history = useHistory();

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent p="32px 48px" w="460px">
        <ModalHeader>
          <HeadingSecondary fontSize="24px">Log in</HeadingSecondary>
        </ModalHeader>
        <ModalCloseButton top="43px" right="48px" />
        <ModalBody>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values) => {
              const credentials = {
                username: values.username,
                password: values.password,
              };
              dispatch(loginUser(credentials)).then((data) => {
                // if any errors
                if (data.payload.errors) {
                  console.log(data.payload.errors);
                } else if (data.payload.user) {
                  onClose();
                  history.push(`/${data.payload.role}/dashboard`);
                } else {
                }
              });
            }}
          >
            {() => (
              <Form>
                <VStack spacing="32px">
                  <VStack spacing="0" w="full">
                    <FormikInput name="username" placeholder="username" />
                    <FormikInput
                      name="password"
                      placeholder="password"
                      type="password"
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
                  <HStack w="full">
                    <TextRegular>Don’t have an account?</TextRegular>
                    <TextButton color="#427AD6">Register</TextButton>
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
