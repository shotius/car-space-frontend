import { InputRightElement } from '@chakra-ui/input';
import { CloseIcon } from 'src/components/atoms/Icons/CloseIcon';
import { DropdownIcon } from 'src/components/atoms/Icons/DropdownIcon';

interface CustomSelectArrowProps {
  areOptionsSelected: boolean;
  areOptionsOpen: boolean;
  clearCb: (e: any) => void;
  isDisabled?: boolean;
  size?: "lg" | "md"
}

export const CustomSelectArrow: React.FC<CustomSelectArrowProps> = ({
  areOptionsSelected,
  isDisabled,
  areOptionsOpen,
  clearCb,
  size = "lg", 
}) => {
  return (
    <>
      {areOptionsSelected ? (
        <InputRightElement
          children={<CloseIcon />}
          cursor="pointer"
          opacity="0.6"
          transition="all .3s"
          transform="rotate(90deg)"
          onClick={clearCb}
        />
      ) : (
        <InputRightElement
          children={
            <DropdownIcon
              opacity={isDisabled ? '0.18' : '0.4'}
              boxSize={size === "lg" ? 5 : 4}
              transform={areOptionsOpen ? 'rotate(180deg)' : ''}
              transition="all .2s"
            />
          }
          pointerEvents="painted"
        />
      )}
    </>
  );
};
