import { Container, ContainerProps } from '@chakra-ui/layout';


type Props = {
  variant: 'full' | 'regular' | 'small';
};

const CustomContainer: React.FC<Props & ContainerProps> = ({
  variant,
  children,
  ...rest
}) => {
  return (
    <Container
      maxW={
        variant === 'full'
          ? '1640px'
          : variant === 'regular'
          ? '860px'
          : '350px'
      }
      {...rest}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
