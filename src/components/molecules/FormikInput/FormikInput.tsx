import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputProps
} from '@chakra-ui/react';
import { useField } from 'formik';
import { InputGrey } from '../Inputs/InputGrey';

type InputFieldProps = InputProps & {
  name: string;
  label?: string;
};

export const FormikInput: React.FC<InputFieldProps> = ({
  label,
  size: _,
  h, 
  ...props
}) => {
  const [field, { error }] = useField(props.name);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputGrey {...field} {...props} h={h}/>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
