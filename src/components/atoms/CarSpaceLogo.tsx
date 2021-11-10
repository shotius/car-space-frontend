import { Center, CenterProps, Image } from '@chakra-ui/react';

interface LogoProps {
  imgW?: CenterProps['w']
}

export const CarSpaceLogo: React.FC<CenterProps & LogoProps> = ({
  cursor = 'pointer',
  h = 'full',
  onClick,
  imgW=['90px', null, null, '143px'],
  ...rest
}) => {
  return (
    <Center h={h} cursor={cursor} onClick={onClick} {...rest}>
      <Image src="src/assets/png/logo.png" w={imgW} />
    </Center>
  );
};
