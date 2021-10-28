import { Heading, HeadingProps } from '@chakra-ui/layout';

interface HeadingSecondaryProps {}

export const HeadingSecondary: React.FC<HeadingSecondaryProps & HeadingProps> =
  ({ fontSize = '16px', fontWeight = 'light', children, ...rest }) => {
    return (
      <Heading fontSize={fontSize} fontWeight={fontWeight} {...rest}>
        {children}
      </Heading>
    );
  };
