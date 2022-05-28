import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useField } from 'formik';

interface InputFileProps {
  name: string;
}

export const FormikFileInput: React.FC<
  InputFileProps & React.HTMLProps<HTMLInputElement> // extendind html props
> = ({
  name,
  type = 'file',
  multiple = false,
  value = undefined,
  style = { marginTop: '10px' },
  label,
  ...props
}) => {
  const [field, _meta, { setValue }] = useField(name);

  return (
    <FormControl>
      <FormLabel mb="0" htmlFor={label}>
        {label}
      </FormLabel>
      <input
        id={label}
        type={type}
        multiple={multiple}
        {...field}
        value={value}
        style={style}
        {...props}
        onChange={(e) => {
          const files = e.currentTarget.files;
          setValue(files);
        }}
      />
    </FormControl>
  );
};
