import { useState } from 'react';
import { capitalize as capitalizeWord } from 'src/utils/functions/capitalize';
import { ButtonRect } from './Buttons/ButtonRect';
import { InputGrey } from './Inputs/InputGrey';
import { CustomOverlay } from './overlays/CustomOverlay';
import { SelectContent } from './Wrappers/SelectContent';
import { SelectOptions } from './Wrappers/SelectOptions';
import { SelectWrapper } from './Wrappers/SelectWrapper';

interface AutocompleteProps {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  capitalize?: boolean;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  options,
  value,
  onChange,
  capitalize = false,
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState(false);

  const optionsToShow = options.filter((opt) =>
    opt.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <CustomOverlay
        isActive={areOptionsOpen}
        onClick={() => setAreOptionsOpen(false)}
      />
      <SelectContent>
        <InputGrey
          value={value}
          placeholder={placeholder}
          onFocus={() => setAreOptionsOpen(true)}
          onChange={(e) => {
            onChange(e.currentTarget.value);
            setAreOptionsOpen(true);
          }}
        />
        <SelectOptions
          isOpen={areOptionsOpen}
          onClick={() => setAreOptionsOpen(false)}
          top="40px"
        >
          {optionsToShow.map((opt, i) => (
            <ButtonRect
              textAlign="start"
              p="4"
              onClick={() => {
                setAreOptionsOpen(false);
                onChange(opt);
              }}
              key={i}
            >
              {capitalize ? capitalizeWord(opt) : opt}
            </ButtonRect>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
