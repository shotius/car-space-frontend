import { Text, TextProps } from '@chakra-ui/layout';
import React from 'react';

interface TextMainProps {}

export const TextMain: React.FC<TextMainProps & TextProps> = ({
  opacity = '63%',
  color = 'autoGrey.900',
  fontSize = '16px',
  children,
  ...rest
}) => {
  return (
    <Text color={color} fontSize={fontSize} opacity={opacity} {...rest}>
      {children}
    </Text>
  );
};
