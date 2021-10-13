import { IconProps } from '@chakra-ui/icon';
import { Select, SelectProps } from '@chakra-ui/select';
 ;
import { DropdownIcon } from '../Icons/DropdownIcon';

interface CustomSelectProps {
  arrowColor?: IconProps['color']
}

const CustomSelect: React.FC<CustomSelectProps & SelectProps> = ({
  color = '#848484',
  bg = 'white',
  border = 'none',
  fontSize = ['16px', null, null, '18px',null,  '24px'],
  h = ['44px', null, '40px', null,null,  '62px'],
  arrowColor = "#848484" , 
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
      icon={<DropdownIcon fill={arrowColor}/>}
      {...rest}
    >
      {' '}
      {children}
    </Select>
  );
};

export default CustomSelect;
