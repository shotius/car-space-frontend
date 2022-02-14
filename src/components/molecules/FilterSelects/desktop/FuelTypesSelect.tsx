import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'src/components/atoms/Selects/MultiSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectFuels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface FuelSelectProps {}

export const FuelSelect: React.FC<FuelSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { fuels } = useAppSelector((state) => state.carsReducer);
  const { fuels: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  const fuelsToShow = fuels.filter((fuel) => fuel);

  useEffect(() => {
    initSelection.length ? setSelected(initSelection) : setSelected([]);
  }, [initSelection]);

  const handleSelect = (fuel: string) => {
    if (selected.includes(fuel)) {
      setSelected(selected.filter((trans) => trans !== fuel));
    } else {
      setSelected([fuel].concat(selected));
    }
  };

  return (
    <MultiSelect
      size="md"
      selected={selected}
      label="fuel type"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectFuels([]));
      }}
      onApply={() => dispatch(selectFuels(selected))}
      top="35px"
    >
      <SelectContent>
        {fuelsToShow.map((fuel) => (
          <SelectOptionButton
            key={fuel}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(fuel);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(fuel)}
            >
              <TextRegular w="full">{capitalizeEach(fuel)}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </MultiSelect>
  );
};
