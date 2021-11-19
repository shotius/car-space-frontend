import { capitalizeEach } from "src/utils/functions/capitalizeEach";
import { InputGrey } from "./InputGrey";

interface SelectSearchProps {
  isDisabled?: boolean;
  placeholder: string;
  label: string;
}

type OtherProps = React.ComponentProps<typeof InputGrey>

export const SelectSearch: React.FC<SelectSearchProps & OtherProps> = ({
  label,
  placeholder,
  isDisabled,
  ...rest
}) => {
  return (
    <InputGrey
      cursor={isDisabled ? 'not-allowed' : 'text'}
      bg="transparent"
      isDisabled={isDisabled}
      border="none"
      opacity={isDisabled ? '0.4' : '1'}
      placeholder={capitalizeEach(placeholder) || label}
      isTruncated
      _focus={{
        bg: 'white',
      }}
      _hover={{
        bg: "autoGrey.200"
      }}
      pr="32px"
      {...rest}
    />
  );
};
