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
  return (
    <Card p={['4', '8', '48px']}>
      <Stack
        spacing={['4', '8', '48px']}
        direction={['column', 'row']}
        align={['center', 'center']}
        justify="space-around"
        w="full"
      >
        {/* user photo and name */}
        <UserAvatar
          username={review.user.username}
          image={review.user.avatar}
          mainText={review.user.name}
          w={['full', null, '450px']}
        />

        {/* descripttion */}
        <TextRegular opacity="0.8" noOfLines={[4, null, 5]} h="full">
          {review.text}
        </TextRegular>

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
