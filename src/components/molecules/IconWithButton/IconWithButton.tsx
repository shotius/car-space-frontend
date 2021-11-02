import { Button, Icon, ButtonProps, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType | React.FC;
  _activeBg?: ButtonProps['bg'];
  _hoverBg?: ButtonProps['bg'];
  boxSize?: IconProps['boxSize']
  fill?: IconProps['fill']
}

export const IconWithButton: React.FC<IconButtonProps & ButtonProps> = ({
  bg = 'white',
  _activeBg = { bg: 'white' },
  _hoverBg = { bg: 'white' },
  icon,
  fill, 
  boxSize,
  children, 
  ...rest
}) => {
  return (
    <Button
      bg={bg}
      onClick={rest.onClick}
      _active={{ bg: _activeBg }}
      _hover={{ bg: _hoverBg }}
      {...rest}
    >
      <Icon as={icon} boxSize={boxSize} fill={fill}/>
      {children}
    </Button>
  );
};
