import { IconProps } from '@chakra-ui/icon';
import { Select, SelectProps } from '@chakra-ui/select';

import { DropdownIcon } from '../Icons/DropdownIcon';

interface CustomSelectProps {
  arrowColor?: IconProps['color']
}

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  color = '#a6a6a6',
  bg = '#fff',
  opacity="0.5",
  border = 'none',
  fontSize = '16px',
  h = '40px',
  arrowColor = "#a6a6a6" , 
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
      icon={<DropdownIcon fill={arrowColor} boxSize={4}/>}
      {...rest}
    >
      {' '}
      {children}
    </Select>
  );
};

export default CustomSelect;
