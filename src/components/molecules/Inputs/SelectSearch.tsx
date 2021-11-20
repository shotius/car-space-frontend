import { capitalizeEach } from "src/utils/functions/capitalizeEach";
import { InputGrey } from "./InputGrey";

type OtherProps = React.ComponentProps<typeof InputGrey>

interface SelectSearchProps {
  isDisabled?: boolean;
  placeholder: string;
  label: string;
  labelPadding?:  OtherProps['p']
}


export const SelectSearch: React.FC<SelectSearchProps & OtherProps> = ({
  label,
  placeholder,
  isDisabled,
  labelPadding, 
  ...rest
}) => {
  return (
    <InputGrey
      pl={labelPadding || "4"}
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
