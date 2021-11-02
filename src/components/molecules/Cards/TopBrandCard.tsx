import { Image } from '@chakra-ui/image';
import { AspectRatio, BoxProps, Center } from '@chakra-ui/layout';
import { Card } from './Card';

interface TopBrandCardProps {
  image: string;
  imageWidth?: BoxProps['w'];
  cardColor?: BoxProps['bg']
}

export const TopBrandCard: React.FC<TopBrandCardProps & BoxProps> = ({
  image,
  w=['88px', '115px', null, '143px'],
  h=['80px', '110px', null, '132px'],
  imageWidth = ['41px', null, null, '56px'],
  cardColor = "autoGrey.600",
  ...rest
}) => {
  return (
    <Card bg={cardColor} h={h} w={w} {...rest}>
      <Center h="full" w="full">
        <AspectRatio
          ratio={1 / 1}
          w={imageWidth}
        >
          <Image src={image} />
        </AspectRatio>
      </Center>
    </Card>
  );
};
