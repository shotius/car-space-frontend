import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

interface CardProps {
  minW?: Array<string> | string;
  h?: Array<string> | string;
  bg?: string;
  p?: Array<string> | string;
  borderRadius?: Array<string> | string;
  bgActive?: string;
}

export const Card: React.FC<CardProps & BoxProps> = ({
  minW = ['140px', '166px'],
  minH = ['115px', '130px'],
  bg = 'white',
  p = '2.5',
  borderRadius = 'md',
  bgActive = 'autoBlue.400',
  children,
  ...rest
}) => {
  return (
    <Box
      minW={minW}
      minh={minH}
      bg={bg}
      p={p}
      borderRadius={borderRadius}
      _active={{
        bg: `${bgActive}`,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};
