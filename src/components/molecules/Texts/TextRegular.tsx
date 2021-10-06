import { Text, TextProps } from '@chakra-ui/layout';
import React from 'react';

interface TextRegularProps {}

export const TextRegular: React.FC<TextRegularProps & TextProps> = ({
  children,
  fontSize={base: "14px", xl: "16px"},
  ...rest
}) => {
  return <Text fontSize={fontSize} {...rest}>{children}</Text>;
};
