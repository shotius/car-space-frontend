import { Center, Textarea, useToast } from '@chakra-ui/react';
import TextareaAutosize from 'react-textarea-autosize';
import { Field, Form, Formik } from 'formik';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { ButtonRegular } from 'src/components/molecules/Buttons/ButtonRegular';
import { Card } from 'src/components/molecules/Cards/Card';
import { HeadingSecondary } from 'src/components/molecules/Headings/HeadingSecondary';
import { UserSearchSelect } from 'src/components/molecules/Selects/UserSearchSelect';
import { useAppDispatch } from 'src/redux/app/hook';
import { addCustomerReview } from 'src/redux/features/customer/customerSlice';
import { isApiValidationError } from 'src/utils/functions/typeChecker';
import { toErrorMap } from 'src/utils/functions/toErrorMap';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { NewReviwForm } from 'src/components/organizms/Forms/newReviewForm';

interface AddNewReviewProps {}

interface InitialState {
  text: string;
  userId: string;
  photos: FileList | null;
}

export const AddNewReview: React.FC<AddNewReviewProps> = ({}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const initialState: InitialState = {
    text: '',
    userId: '',
    photos: null,
  };

  const validateUserId = (userId: string) => {
    let error: string = '';
    if (!userId) {
      error = 'Required';
    } else if (userId.length !== 24) {
      error = 'Invalid length';
    }
    return error;
  };

  const validatePhotos = (photos: FileList) => {
    let error = '';
    if (photos && photos.length > 4) {
      error = 'Photos must be less then 4';
    }
    return error;
  };

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <Card w="500px" p="4">
          <NewReviwForm />
        </Card>
      </Center>
    </ContainerOuter>
  );
};
