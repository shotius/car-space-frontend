import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'src/components/atoms/Selects/MultiSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectConditions } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface ConditionSelectProps {}

export const ConditionSelect: React.FC<ConditionSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { conditions } = useAppSelector((state) => state.carsReducer);
  const { conditions: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  const conditionsToShow = conditions.filter((condition) => condition);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
    } else {
      setSelected([]);
    }
  }, [initSelection]);

  const handleSelect = (condition: string) => {
    if (selected.includes(condition)) {
      setSelected(selected.filter((trans) => trans !== condition));
    } else {
      setSelected([condition].concat(selected));
    }
  };

  return (
    <MultiSelect
      size="md"
      selected={selected}
      label="condition"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectConditions([]));
      }}
      onApply={() => dispatch(selectConditions(selected))}
      top="35px"
    >
      <SelectContent>
        {conditionsToShow.map((condition) => (
          <SelectOptionButton
            key={condition}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(condition);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(condition)}
            >
              <TextRegular w="full">{capitalizeEach(condition)}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </MultiSelect>
  );
};
