import { AspectRatio, Center, HStack, Image, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { ContainerOuter } from 'src/components/atoms/Containers/ContainerOuter';
import { Card } from 'src/components/molecules/Cards/Card';
import { TextRegular } from 'src/components/molecules/Texts/TextRegular';
import { NewReviwForm } from 'src/components/organizms/Forms/newReviewForm';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getCustomerReviews } from 'src/redux/features/customer/customerSlice';

interface AddNewReviewProps {}

export const AddNewReview: React.FC<AddNewReviewProps> = ({}) => {
  const { reviews } = useAppSelector((state) => state.customers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomerReviews());
  }, []);

  return (
    <ContainerOuter pt={['32px', null, null, '40px']}>
      <Center>
        <VStack>
          <Card w="500px" p="4">
            <NewReviwForm />
          </Card>
          <Card>
            <VStack>
              {reviews.length ? reviews.map((review, id) => (
                <HStack key={id} bg="autoGrey.200" w="full" p="4" borderRadius="8">
                  <AspectRatio ratio={1/1} w="80px">
                    <Image
                      src={ review.user && review.user.avatar}
                      fallbackSrc="https://image.shutterstock.com/image-vector/profile-picture-avatar-icon-vector-260nw-1760295569.jpg"
                      borderRadius="100px"
                    />
                  </AspectRatio>
                  <TextRegular>{review.text}</TextRegular>
                  {review.photos && review.photos.map((photo) => (
                    <AspectRatio key={photo} ratio={1 / 1} w="60px">
                      <Image src={photo} />
                    </AspectRatio>
                  ))}
                </HStack>
              )) : <>{console.log(reviews)}</>}
            </VStack>
          </Card>
        </VStack>
      </Center>
    </ContainerOuter>
  );
};
