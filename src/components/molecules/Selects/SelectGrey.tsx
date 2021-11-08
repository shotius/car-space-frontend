import { Select } from '@chakra-ui/react';
import { SelectProps } from '@chakra-ui/select';

interface SelectGreyProps {}

export const SelectGrey: React.FC<SelectGreyProps & SelectProps> = ({children, ...rest}) => {
  return (
    <Select
      bg="#F4F4F4"
      border="1px"
      opacity="0.8"
      borderColor="#EAEAEB"
      _focus={{
        borderColor: '#EAEAcc',
      }}
      _placeholder={{
      }}
      h="40px"
      color="#a5a5a5"
      fontSize={['16px',null, "14px"]}
      {...rest}
    >
     {children}
    </Select>
  );
};
