import { Box, BoxProps } from '@chakra-ui/layout';
import React from 'react';

interface CardProps {
  bgActive?: string;
}

export const Card: React.FC<CardProps & BoxProps> = ({
  minW = ['140px', '166px', '144px'],
  minH = ['115px', '130px', null, '132px', '189'],
  bg = 'white',
  p = '2.5',
  borderRadius = 'md',
  bgActive,
  children,
  ...rest
}) => {
  return (
    <Box
      minW={minW}
      minH={minH}
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