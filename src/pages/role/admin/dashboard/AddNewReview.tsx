import {
  AspectRatio,
  Center,
  HStack,
  IconButton,
  Image,
  Spinner,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { Card } from 'src/components/molecules/Cards/Card';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { NewReviwForm } from 'src/components/organizms/Forms/newReviewForm';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  deleteReview,
  getCustomerReviews,
} from 'src/redux/features/customer/customerSlice';

interface AddNewReviewProps {}

export const AddNewReview: React.FC<AddNewReviewProps> = ({}) => {
  const { reviews, removingReview, fetchingReviews } = useAppSelector(
    (state) => state.customers
  );
  const dispatch = useAppDispatch();

  const toast = useToast();

  useEffect(() => {
    dispatch(getCustomerReviews(''));
  }, []);

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <VStack spacing="32px">
          <Card maxW="500px" p="4">
            <NewReviwForm />
          </Card>
          <Card w="full" maxW="500px">
            <VStack w="full">
              {fetchingReviews ? (
                <>
                  Getting Reviews...
                  <Spinner />
                </>
              ) : reviews.length ? (
                reviews.map((review, id) => (
                  <HStack
                    key={id}
                    bg="autoGrey.200"
                    w="full"
                    p="4"
                    borderRadius="8"
                    opacity={removingReview ? '0.5' : '1'}
                  >
                    <IconButton
                      icon={<CloseIcon />}
                      aria-label="remove review"
                      isLoading={removingReview}
                      onClick={() => {
                        dispatch(deleteReview(review.id))
                          .then(() =>
                            toast({
                              title: 'Review Deleted',
                              status: 'success',
                              duration: 2000,
                              position: 'top',
                            })
                          )
                          .catch(() =>
                            toast({
                              title:
                                'Could not delete the review, contact to the developer',
                              status: 'error',
                              duration: 2000,
                              position: 'top',
                            })
                          );
                      }}
                    />
                    <AspectRatio ratio={1 / 1} minW="80px">
                      <Image
                        src={review.user?.avatar}
                        fallbackSrc="https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg"
                        borderRadius="100px"
                      />
                    </AspectRatio>
                    <TextRegular overflowWrap="anywhere">
                      {review.text}
                    </TextRegular>
                    {review.photos &&
                      review.photos.map((photo) => (
                        <AspectRatio key={photo} ratio={1 / 1} minW="60px">
                          <Image src={photo} />
                        </AspectRatio>
                      ))}
                  </HStack>
                ))
              ) : (
                <>No Review Yet</>
              )}
            </VStack>
          </Card>
        </VStack>
      </Center>
    </ContainerOuter>
  );
};
