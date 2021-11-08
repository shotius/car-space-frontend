import { InputProps } from '@chakra-ui/input';
import { InputRegular } from './InputRegular';

interface InputGreyProps {}

export const InputGrey: React.FC<InputGreyProps & InputProps> = ({
  ...rest
}) => {
  return (
    <InputRegular
      bg="#F4F4F4"
      border="1px"
      borderColor="#EAEAEB"
      _placeholder={{ fontSize: ['16px', null,'14px'], color: 'black', opacity: '.4' }}
      {...rest}
    />
  );
};
