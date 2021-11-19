import { InputGroup } from "@chakra-ui/input";
import { CustomSelectArrow } from "./CustomSelectArrow";

interface CustomSelectTriggerProps {
  selectedValues: any | any[]
  areOptionsOpen: boolean;
  isDisabled?: boolean;
  clearCb: (e: any) => void
}

export const SelectTrigger: React.FC<CustomSelectTriggerProps> = ({
  children,
  selectedValues, 
  areOptionsOpen,
  isDisabled, 
  clearCb
}) => {
  return (
    <InputGroup>
      {children}
      <CustomSelectArrow
        areOptionsSelected={!!selectedValues.length}
        areOptionsOpen={areOptionsOpen}
        isDisabled={isDisabled}
        clearCb={clearCb}
      />
    </InputGroup>
  );
};
