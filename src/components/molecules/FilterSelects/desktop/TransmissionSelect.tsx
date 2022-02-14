import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'src/components/atoms/Selects/MultiSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTranssmision } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface TransmissionSelectProps {}

export const TransmissionSelect: React.FC<TransmissionSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  
  const transmissions = useAppSelector(
    (state) => state.carsReducer.transmissions
  );
  const initSelection = useAppSelector(
    (state) => state.selectedCarFilters.transmission
  );

  const transToShow = transmissions.filter((t) => t);

  useEffect(() => {
    initSelection.length ? setSelected(initSelection) : setSelected([]);
  }, [initSelection]);

  const handleSelect = (transmission: string) => {
    if (selected.includes(transmission)) {
      setSelected(selected.filter((trans) => trans !== transmission));
    } else {
      setSelected([transmission].concat(selected));
    }
  };

  return (
    <MultiSelect
      size="md"
      selected={selected}
      label="transmission"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectTranssmision([]));
      }}
      onApply={() => dispatch(selectTranssmision(selected))}
    >
      <SelectContent>
        {transToShow.map((trans) => (
          <SelectOptionButton
            key={trans}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(trans);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(trans)}
            >
              <TextRegular>{capitalizeEach(trans)}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </MultiSelect>
  );
};
