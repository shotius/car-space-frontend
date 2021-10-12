import { Container, ContainerProps } from '@chakra-ui/layout';
 ;

interface ContainerOuterProps {}

export const ContainerOuter: React.FC<ContainerOuterProps & ContainerProps> = ({
  maxW={ md: '78%', xl: "85%" },
  children,
  ...rest
}) => {
  return (
    <Container maxW={maxW} {...rest}>
      {children}
    </Container>
  );
};
