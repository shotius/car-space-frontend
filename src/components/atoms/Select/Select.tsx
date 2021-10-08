import { Select, SelectProps } from '@chakra-ui/select';
import React from 'react';

interface CustomSelectProps {}

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  color = '#848484',
  bg = 'white',
  border = 'none',
  fontSize = ['16px', null, null, '18px', '24px'],
  h = ['50px', null, null, '60px'],
  children,
  ...rest
}) => {
  return (
    <Select
      color={color}
      bg={bg}
      border={border}
      fontSize={fontSize}
      h={h}
      {...rest}
    >
      {' '}
      {children}
    </Select>
  );
};

export default CustomSelect;
