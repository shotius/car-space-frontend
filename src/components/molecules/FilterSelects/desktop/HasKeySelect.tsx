import { useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch } from 'src/redux/app/hook';
import { selectCarKeys } from 'src/redux/features/auth/selectedCarFilterSlice';
import { Keys } from 'src/redux/features/auth/types';
import { SelectContent } from '../../Wrappers/SelectContent';

interface HasKeySelectProps {}

export const HasKeySelect: React.FC<HasKeySelectProps> = ({}) => {
  const [selected, setSelected] = useState<Keys | null>(null);

  const dispatch = useAppDispatch();

  return (
    <SelectGeneral
      size="md"
      selected={[]}
      label="Keys"
      clearSelected={() => setSelected(null)}
      onApply={() => dispatch(selectCarKeys(selected))}
      top="35px"
    >
      <SelectContent>
        {/* <HStack>
          <input
            type="radio"
            name="has_keys"
            value="YES"
            checked={selected === 'YES'}
            onChange={() => setSelected('YES')}
          />
          <TextRegular>Yes</TextRegular>
        </HStack>
        <HStack>
          <input
            type="radio"
            name="has_keys"
            value="NO"
            checked={selected === 'NO'}
            onChange={() => setSelected('NO')}
          />
          <TextRegular>No</TextRegular>
        </HStack>{' '} */}
      </SelectContent>
    </SelectGeneral>
  );
};
