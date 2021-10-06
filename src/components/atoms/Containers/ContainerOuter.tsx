import { Container, ContainerProps } from '@chakra-ui/layout';
import React from 'react';

interface ContainerOuterProps {}

export const ContainerOuter: React.FC<ContainerOuterProps & ContainerProps> = ({
  children,
  ...rest
}) => {
  return (
    <Container maxW={{ base: '1004px', xl: '1640px' }} {...rest}>
      {children}
    </Container>
  );
};
