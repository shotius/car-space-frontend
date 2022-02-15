import {
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { useEffect } from 'react';
import { InputGrey } from '../Inputs/InputGrey';

interface FormikTelInputProps {
  name: string;
}

export const FormikTelInput: React.FC<FormikTelInputProps> = (props) => {
  const [field, { error, touched }, { setValue }] = useField(props.name);
  const { value, ...restField } = field;

  const formatedNumber = FormatGeoPhoneNumber(value);

  useEffect(() => {
    setValue(formatedNumber);
  }, [formatedNumber]);

  return (
    <FormControl isInvalid={!!error && !!touched} py="8px">
      <InputGroup>
        <InputLeftAddon
          children="+995"
          h={['53px', null, '40px']}
          bg="#F4F4F4"
        />
        <InputGrey
          {...restField}
          value={formatedNumber}
          type="tel"
          placeholder="Phone Number"
          h={['53px', null, '40px']}
          borderLeftRadius="none"
          isRequired
        />
      </InputGroup>
      {error && <FormErrorMessage as="p">{error}</FormErrorMessage>}
    </FormControl>
  );
};

const FormatGeoPhoneNumber = (phone: string) => {
  const strippedNumber = phone.startsWith('+995') ? phone.slice(4) : phone;
  const numbers = strippedNumber.split('').filter((num) => num !== ' ');
  return numbers.join('');
};
