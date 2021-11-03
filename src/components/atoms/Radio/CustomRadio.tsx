import { Radio, RadioProps } from '@chakra-ui/radio';

const CustomRadio: React.FC<RadioProps> = ({
  value,
  colorScheme = 'autoOrange',
  children,
  ...rest
}) => {
  return (
    <Radio
      colorScheme={colorScheme}
      value={value}
      outline="none"
      boxShadow="none !important"
      {...rest}
    >
      {children}
    </Radio>
  );
};

export default CustomRadio