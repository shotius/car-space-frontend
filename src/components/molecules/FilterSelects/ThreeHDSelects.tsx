import {StackProps,  Stack } from '@chakra-ui/react';
import { Select } from 'components/atoms/Select';
import React from 'react';

interface ThreeHDSelectsProps {}

export const ThreeHDSelects: React.FC<ThreeHDSelectsProps & StackProps> = ({
  p = '2',
  bg = 'white',
  direction = 'row',
  borderRadius = 'md',
  ...rest
}) => {
  return (
    <Stack
      p={p}
      bg={bg}
      direction={direction}
      borderRadius={borderRadius}
      {...rest}
    >
      <Select placeholder="Brand"></Select>
      <Select placeholder="Model"></Select>
      <Select placeholder="Year"></Select>
    </Stack>
  );
};
