import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTranssmision } from 'src/redux/features/auth/selectedCarFilterSlice';
import { Transmission } from 'src/redux/features/auth/types';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface TransmissionSelectProps {}

export const TransmissionSelect: React.FC<TransmissionSelectProps> = ({}) => {
  const [selected, setSelected] = useState<Transmission[]>([]);
  const dispatch = useAppDispatch();
  const { transsmision: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  const transmissions = ['Manual', 'Automatic', 'CVT'] as const;

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
    }
  }, [initSelection]);

  const handleSelect = (transmission: Transmission) => {
    if (selected.includes(transmission)) {
      setSelected(selected.filter((trans) => trans !== transmission));
    } else {
      setSelected([transmission].concat(selected));
    }
  };

  return (
    <SelectGeneral
      size="md"
      selected={selected}
      label="Transmission"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectTranssmision([]));
      }}
      onApply={() => dispatch(selectTranssmision(selected))}
    >
      <SelectContent>
        {transmissions.map((trans) => (
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
              <TextRegular>{trans}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
