import { Checkbox } from '@chakra-ui/checkbox';
import { useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectConditions } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface ConditionSelectProps {}

export const ConditionSelect: React.FC<ConditionSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const { conditions } = useAppSelector((state) => state.carsReducer);

  const dispatch = useAppDispatch();

  const conditionsToShow = conditions.filter((condition) => condition);

  const handleSelect = (condition: string) => {
    if (selected.includes(condition)) {
      setSelected(selected.filter((trans) => trans !== condition));
    } else {
      setSelected([condition].concat(selected));
    }
  };

  return (
    <SelectGeneral
      size="md"
      selected={selected}
      label="Condition"
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
              <TextRegular w="full">{condition}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
