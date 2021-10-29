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
  imageWidth = ['53px', null, null, '56px', '70px', '81px'],
  cardColor = "autoGrey.600",
  ...rest
}) => {
  return (
    <Card bg={cardColor} {...rest}>
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
