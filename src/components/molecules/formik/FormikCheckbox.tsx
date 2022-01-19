import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react';
import { useField } from 'formik';
import { TextRegular } from '../Texts/TextRegular';

interface FormikCheckboxProps {
  name: string;
  label?: string;
}

export const FormikCheckbox: React.FC<FormikCheckboxProps & CheckboxProps> = ({
  name,
  children,
  label,
  ...rest
}) => {
  const [field, { error, touched }] = useField(name);

  return (
    <FormControl isInvalid={!!(error && touched)}>
      <HStack w="full" pt="2">
        <Checkbox colorScheme="autoOrange" {...field} {...rest} />
        {children || <TextRegular>{label}</TextRegular>}
      </HStack>
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
