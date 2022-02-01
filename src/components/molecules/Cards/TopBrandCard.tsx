import Icon, { IconProps } from '@chakra-ui/icon';
import { BoxProps, Center } from '@chakra-ui/layout';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import useWindowSize from 'src/utils/hooks/useWindowSize';
import { Card } from './Card';

interface TopBrandCardProps {
  icon: any;
  boxSize?: IconProps['boxSize'];
  imageWidth?: BoxProps['w'];
  cardColor?: BoxProps['bg'];
}

export const TopBrandCard: React.FC<TopBrandCardProps & BoxProps> = ({
  icon,
  maxW = ['120px', '130px', '140px', '143px'],
  maxH = ['90px', '120px', '135px', '132px'],
  imageWidth = ['41px', null, null, '56px'],
  cardColor = 'autoGrey.600',
  boxSize = [10, null, 14, 16],
  className,
  ...rest
}) => {
  const { isDesktop } = useDetectScreen();
  const windowSize = useWindowSize();
  let wW = windowSize?.width || 200;
  return (
    <Card
      bg={cardColor}
      {...rest}
      cursor="pointer"
      maxW={maxW}
      maxH={maxH}
      className={`${isDesktop && 'hoverable'} ${className}`}
      w={wW ? wW / 4.1 : '88px'}
      h={wW ? wW / 4.9 : '88px'}
    >
      <Center h="full" w="full">
        <Icon as={icon} boxSize={boxSize} />
      </Center>
    </Card>
  );
};
