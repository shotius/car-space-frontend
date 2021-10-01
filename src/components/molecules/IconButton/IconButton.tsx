import { Button, Icon, ButtonProps } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType | React.FC;
  boxSize?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const IconButton: React.FC<IconButtonProps & ButtonProps> = ({ icon, ...rest }) => {
  return (
    <Button aria-label="person profile" bg="white" onClick={rest.onClick} {...rest}>
      <Icon as={icon} boxSize={rest.boxSize} />
    </Button>
  );
};
