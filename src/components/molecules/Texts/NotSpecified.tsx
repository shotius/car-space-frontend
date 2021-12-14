import { TextProps } from '@chakra-ui/react';
import { TextRegular } from './TextRegular';

export const NotSpecified: React.FC<TextProps> = ({
  children = '-',
  ...rest
}) => (
  <TextRegular as="span" pl="1" {...rest}>
    {children}
  </TextRegular>
);
