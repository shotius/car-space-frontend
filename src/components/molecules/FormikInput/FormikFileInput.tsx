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
  ...props
}) => {
  const [field, _meta, { setValue }] = useField(name);

  return (
    <input
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
  );
};
