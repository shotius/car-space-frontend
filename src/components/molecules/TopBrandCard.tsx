import { Image } from '@chakra-ui/image';
import { AspectRatio, Center } from '@chakra-ui/layout';
 ;
import { Card } from './Card';

interface TopBrandCardProps {
  image: string
}

export const TopBrandCard: React.FC<TopBrandCardProps> = ({ image }) => {
  return (
    <Card bg="autoGrey.400" >
      <Center h="full" w="full">
        <AspectRatio ratio={1 / 1} w="57px">
          <Image src={image} />
        </AspectRatio>
      </Center>
    </Card>
  );
};
