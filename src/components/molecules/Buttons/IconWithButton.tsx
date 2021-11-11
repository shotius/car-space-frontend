import {
  Button,
  Icon,
  ButtonProps,
  IconProps,
} from '@chakra-ui/react';

interface ButtonWithIconProps {
  // icon: IconButtonProps['icon'];
  icon: any
  _activeBg?: ButtonProps['bg'];
  _hoverBg?: ButtonProps['bg'];
  boxSize?: IconProps['boxSize'];
  fill?: IconProps['fill'];
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps & ButtonProps> = ({
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
      <Icon as={icon} boxSize={boxSize} fill={fill} />
      {children}
    </Button>
  );
};
