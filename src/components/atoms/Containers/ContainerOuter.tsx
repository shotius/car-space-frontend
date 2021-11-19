import { Container, ContainerProps } from '@chakra-ui/layout';
interface ContainerOuterProps {}

export const ContainerOuter: React.FC<ContainerOuterProps & ContainerProps> = ({
  // maxW = { base: '100vw', lg: '1100px'},
  maxW=['full', null, null, '1132px'],
  p=[null, null, null,  '0px 16px'],
  children,
  ...rest
}) => {
  return (
    <Container maxW={maxW} p={p} {...rest}>
      {children}
    </Container>
  );
};
