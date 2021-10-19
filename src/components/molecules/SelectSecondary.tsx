import { IconProps } from '@chakra-ui/icon';
import { Select, SelectProps } from '@chakra-ui/select';
import { DropdownIcon } from '../atoms/Icons/DropdownIcon';

interface CustomSelectProps {
  arrowColor?: IconProps['color']
}

const SelectSecondary: React.FC<CustomSelectProps & SelectProps> = ({
  color = '#a6a6a6',
  bg = 'white',
  opacity="0.5",
  border = 'none',
  fontSize= [null, null, null, '16px', null, '20px'],
  h = ['44px', null, '49px', null,null,  '59px'],
  arrowColor = "#a6a6a6" , 
  children,
  ...rest
}) => {
  return (
    <Select
      color={color}
      // pl="16px"
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

export default SelectSecondary;
