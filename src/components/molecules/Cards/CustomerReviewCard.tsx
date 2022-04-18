import { AspectRatio, Image, SimpleGrid, Stack } from '@chakra-ui/react';
import { ICustomerReviewFront } from '../../../../../server/shared_with_front/types/types-shared';
import { UserAvatar } from '../Avatars/UserAvatar';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface CustomerReviewCardProps {
  review: ICustomerReviewFront;
}

export const CustomerReviewCard: React.FC<CustomerReviewCardProps> = ({
  review,
}) => {

  console.log('username: ', review)
  return (
    <Card p={['4', '8', '48px']}  display={"flex"} alignItems={"center"}>
      <Stack
        spacing={['4', '8', '48px']}
        direction={['column', null, 'row']}
        align={['space-between', 'center']}
        justify={['space-between', null, 'space-between']}
        w="full"
        minH={["209px", null, null, '140px']}
      >
        <Stack
          direction={['column', null, 'row']}
          w="full"
          align={[null, null, 'center']}
        >
          {/* user photo and name */}
          <UserAvatar
            username={review.user.fullName}
            image={review.user.avatar}
            mainText={review.user.fullName}
            minW={['full', '180px']}
          />

          {/* descripttion */}
          <TextRegular opacity="0.8" noOfLines={[4, null, 5]} h="full">
            {review.text}
          </TextRegular>
        </Stack>

        {/* photos of cars in a grid */}
        <SimpleGrid
          gap="2"
          display={['grid', 'none', 'grid']}
          w={['full', 'auto']}
          gridTemplateColumns={[
            'repeat(auto-fill, 50px)',
            null,
            'repeat(2, 80px)',
          ]}
        >
          {review.photos.map((photo) => (
            <AspectRatio
              ratio={[50 / 42, null, 80 / 56]}
              w={['50px', null, '80px']}
              key={photo}
            >
              <Image src={photo} alt="car white" borderRadius="4px" />
            </AspectRatio>
          ))}
        </SimpleGrid>
      </Stack>
    </Card>
  );
};
