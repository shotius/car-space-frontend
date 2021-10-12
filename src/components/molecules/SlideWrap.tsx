import { Center, Container } from '@chakra-ui/react';
 ;

interface SlideWrapProps {
  height: string;
  width?: string;
  Slide: React.FC;
}

export const SlideWrap: React.FC<SlideWrapProps> = ({
  height,
  Slide,
  children,
}) => {
  return (
    <Container h="full">
      <Center h={height}><Slide /></Center>
    </Container>
  );
};
