import { Container, ContainerProps } from '@chakra-ui/layout';
 ;

interface ContainerOuterProps {}

export const ContainerOuter: React.FC<ContainerOuterProps & ContainerProps> = ({
  maxW={ base: '1004px', xl: '1640px' },
  children,
  ...rest
}) => {
  return (
    <Container maxW={maxW} {...rest}>
      {children}
    </Container>
  );
};
