import { Container, ContainerProps } from '@chakra-ui/layout';
import React from 'react';

interface Props {
  variant: 'regular' | 'small';
}

const CustomContainer: React.FC<Props & ContainerProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <Container maxW={variant === 'regular' ? '700px' : '350px'} {...rest}>
      {children}
    </Container>
  );
};

export default CustomContainer
