import { Center, CenterProps, Icon } from '@chakra-ui/react';
import { LogoIcon } from './Icons/LogoIcon';

interface LogoProps {
  imgW?: CenterProps['w'];
}

export const CarSpaceLogo: React.FC<CenterProps & LogoProps> = ({
  cursor = 'pointer',
  h = ['20px', '25px', null, '25px'],
  onClick,
  imgW = ['100px', '130px', '143px'],
  ...rest
}) => {
  return (
    <Center h={h} cursor={cursor} onClick={onClick} w={imgW} {...rest}>
      <Icon as={LogoIcon} w={'300px'} h={h} ml="26px" />
    </Center>
  );
};
