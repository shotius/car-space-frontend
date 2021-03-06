import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'src/components/atoms/Selects/MultiSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectTypes } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface TypeSelectProps {}

export const TypeSelect: React.FC<TypeSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { types } = useAppSelector((state) => state.carsReducer);
  const { types: initSelection } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  const typesToShow = types.filter((condition) => condition);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
    } else {
      setSelected([]);
    }
  }, [initSelection]);

  const handleSelect = (type: string) => {
    if (selected.includes(type)) {
      setSelected(selected.filter((trans) => trans !== type));
    } else {
      setSelected([type].concat(selected));
    }
  };

  return (
    <MultiSelect
      size="md"
      selected={selected}
      label="types"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectTypes([]));
      }}
      onApply={() => dispatch(selectTypes(selected))}
      top="35px"
    >
      <SelectContent>
        {typesToShow.map((type) => (
          <SelectOptionButton
            key={type}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(type);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(type)}
            >
              <TextRegular w="full">{capitalizeEach(type)}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </MultiSelect>
  );
};
