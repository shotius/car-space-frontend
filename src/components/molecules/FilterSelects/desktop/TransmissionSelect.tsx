import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTranssmision } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface TransmissionSelectProps {}

export const TransmissionSelect: React.FC<TransmissionSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const {transmissions} = useAppSelector(state => state.carsReducer)
  const { transmission: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  const transToShow = transmissions.filter(t => t)

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
    }
  }, [initSelection]);

  const handleSelect = (transmission: string) => {
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
              <TextRegular>{trans}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
