import {
  AspectRatio, Image,
  SimpleGrid,
  Stack
} from '@chakra-ui/react';
import { UserAvatar } from '../Avatars/UserAvatar';
import { TextRegular } from '../Texts/TextRegular';
import { Card } from './Card';

interface CustomerReviewCardProps {}

export const CustomerReviewCard: React.FC<CustomerReviewCardProps> = () => {
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
          image="https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg"
          mainText="Full name123"
          w={["full", null, "450px"]}
        />

        {/* descripttion */}
        <TextRegular opacity="0.8" noOfLines={[4, null, 5]} h="full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          explicabo consectetur illum vel harum numquam, natus cupiditate.
          Ipsam, quam quis, cum expedita dolorum itaque iste necessitatibus ipsa
          numquam, natus cupiditate.
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
          <AspectRatio
            ratio={[50 / 42, null, 80 / 56]}
            w={['50px', null, '80px']}
          >
            <Image
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826664/car-space/cars/wallpapers/ajk7g36whhjsx0cpic6k.webp"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio
            ratio={[50 / 42, null, 80 / 56]}
            w={['50px', null, '80px']}
          >
            <Image
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826664/car-space/cars/wallpapers/ajk7g36whhjsx0cpic6k.webp"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio
            ratio={[50 / 42, null, 80 / 56]}
            w={['50px', null, '80px']}
          >
            <Image
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826664/car-space/cars/wallpapers/ajk7g36whhjsx0cpic6k.webp"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
          <AspectRatio
            ratio={[50 / 42, null, 80 / 56]}
            w={['50px', null, '80px']}
          >
            <Image
              src="https://res.cloudinary.com/car-space-v1/image/upload/v1638826664/car-space/cars/wallpapers/ajk7g36whhjsx0cpic6k.webp"
              alt="car white"
              borderRadius="4px"
            />
          </AspectRatio>
        </SimpleGrid>
      </Stack>
    </Card>
  );
};
