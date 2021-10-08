import { Button, Icon, ButtonProps, IconProps } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType | React.FC;
  // icon: ComponentWithAs<"svg", IconProps> | undefined
  _activeBg?: ButtonProps['bg'];
  _hoverBg?: ButtonProps['bg'];
  boxSize?: IconProps['boxSize']
}

export const IconWithButton: React.FC<IconButtonProps & ButtonProps> = ({
  bg = 'white',
  _activeBg = { bg: 'white' },
  _hoverBg = { bg: 'white' },
  h = { md: '40px', lg: '50px', xl: '62px' },
  icon,
  boxSize,
  ...rest
}) => {
  return (
    <Button
      bg={bg}
      onClick={rest.onClick}
      _active={{ bg: _activeBg }}
      _hover={{ bg: _hoverBg }}
      h={h}
      {...rest}
    >
      <Icon as={icon} boxSize={boxSize} />
    </Button>
  );
};
