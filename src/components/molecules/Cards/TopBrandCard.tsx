import Icon, { IconProps } from '@chakra-ui/icon';
import { BoxProps, Center } from '@chakra-ui/layout';
import { Card } from './Card';

interface TopBrandCardProps {
  icon: any;
  boxSize?: IconProps['boxSize'];
  imageWidth?: BoxProps['w'];
  cardColor?: BoxProps['bg'];
}

export const TopBrandCard: React.FC<TopBrandCardProps & BoxProps> = ({
  icon,
  w = ['88px', '115px', '125px', '143px'],
  h = ['80px', '110px', '125px', '132px'],
  maxW = ['120px', '130px', '140px', '143px'],
  maxH = ['90px', '120px', '135px', '132px'],
  imageWidth = ['41px', null, null, '56px'],
  cardColor = 'autoGrey.600',
  boxSize = [10, null, 14, 16],
  className,
  ...rest
}) => {
  return (
    <Card
      bg={cardColor}
      h={h}
      w={w}
      {...rest}
      className={className}
      cursor="pointer"
      maxW={maxW}
      maxH={maxH}
    >
      <Center h="full" w="full">
        <Icon as={icon} boxSize={boxSize} />
      </Center>
    </Card>
  );
};
