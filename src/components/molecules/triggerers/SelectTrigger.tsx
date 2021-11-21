import { InputGroup, InputGroupProps } from "@chakra-ui/input";
import { CustomSelectArrow } from "./CustomSelectArrow";

interface CustomSelectTriggerProps {
  areOptionsOpen: boolean;
  isDisabled?: boolean;
  clearCb: (e: any) => void
  areOptionsSelected: boolean;
  size?: "lg" | "md"
}

export const SelectTrigger: React.FC<CustomSelectTriggerProps & InputGroupProps> = ({
  children,
  areOptionsOpen,
  isDisabled, 
  clearCb,
  areOptionsSelected, 
  cursor="pointer",
  size,
  ...rest
}) => {
  return (
    <InputGroup cursor={cursor} {...rest}>
      {children}
      <CustomSelectArrow
        areOptionsSelected={areOptionsSelected}
        areOptionsOpen={areOptionsOpen}
        isDisabled={isDisabled}
        clearCb={clearCb}
        size={size}
      />
    </InputGroup>
  );
};
