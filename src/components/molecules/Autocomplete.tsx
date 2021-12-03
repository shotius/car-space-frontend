import { useState } from 'react';
import { ButtonRect } from './Buttons/ButtonRect';
import { InputGrey } from './Inputs/InputGrey';
import { SelectOverlay } from './overlays/SelectOverlay';
import { SelectContent } from './Wrappers/SelectContent';
import { SelectOptions } from './Wrappers/SelectOptions';
import { SelectWrapper } from './Wrappers/SelectWrapper';

interface AutocompleteProps {
  placeholder: string;
  options: string[];
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  placeholder,
  options,
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState(false);
  const [value, setValue] = useState('');

  const optionsToShow = options.filter(opt => opt.toLowerCase().includes(value.toLowerCase()))
  return (
    <SelectWrapper areOptionsOpen={areOptionsOpen}>
      <SelectOverlay isActive={areOptionsOpen} onClick={() => setAreOptionsOpen(false)}/>
      <SelectContent>
        <InputGrey
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.currentTarget.value);
            setAreOptionsOpen(true);
          }}
        />
        <SelectOptions isOpen={areOptionsOpen} onClick={() => setAreOptionsOpen(false)} top="40px">
          {optionsToShow.map((opt, i) => (
            <ButtonRect p="4" onClick={() => {
              setAreOptionsOpen(false)
              setValue(opt)
            }} key={i}>{opt}</ButtonRect>
          ))}
        </SelectOptions>
      </SelectContent>
    </SelectWrapper>
  );
};
