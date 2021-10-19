import { AspectRatio, Image } from '@chakra-ui/react';


interface Slide2Props {}

export const Slide2: React.FC<Slide2Props> = ({}) => {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
    </AspectRatio>
  );
};
