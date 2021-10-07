import { Select, SelectProps } from '@chakra-ui/select';
import React from 'react';

interface CustomSelectProps {}

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  color = "#848484",
  bg = 'white',
  border = 'none',
  children,
  ...rest
}) => {
  return (
    <Select color={color} bg={bg} border={border} {...rest}>
      {' '}
      {children}
    </Select>
  );
};

export default CustomSelect;
