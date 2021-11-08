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
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import { ApiResponse } from '../../../../../server/shared_with_front/types/types-shared';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  openRegister: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  openRegister,
}) => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent p="32px 48px" w="460px">
        <ModalHeader p="0">
          <HeadingSecondary pb="48px" fontSize="24px">Log in</HeadingSecondary>
        </ModalHeader>
        <ModalCloseButton top="30px" right="48px" />
        <ModalBody p="0">
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setErrors }) => {
              const credentials = {
                username: values.username,
                password: values.password,
              };
              dispatch(loginUser(credentials)).then((data) => {
                const result: ApiResponse = data.payload;

                if (result.code === 422 && result.errors?.length) {
                  setErrors(toErrorMap(result.errors));
                }

                if (result.success) {
                  history.push(`/${result.results.role}/dashboard`);
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
                    <TextButton color="#427AD6" onClick={openRegister}>
                      Register
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
