import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectCylinders } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface CylinderSelectProps {}

export const CylinderSelect: React.FC<CylinderSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { cylinders } = useAppSelector((state) => state.carsReducer);
  const { cylinders: initSelection} = useAppSelector(state=> state.selectedCarFilters)
  const dispatch = useAppDispatch();

  const cylindersToShow = cylinders.filter((cylinder) => cylinder);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection)
    }
  }, [initSelection])

  const handleSelect = (cylinder: string) => {
    if (selected.includes(cylinder)) {
      setSelected(selected.filter((trans) => trans !== cylinder));
    } else {
      setSelected([cylinder].concat(selected));
    }
  };

  return (
    <SelectGeneral
      size="md"
      selected={selected}
      label="cylinders"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectCylinders([]));
      }}
      onApply={() => dispatch(selectCylinders(selected))}
      top="35px"
    >
      <SelectContent>
        {cylindersToShow.map((cylinder) => (
          <SelectOptionButton
            key={cylinder}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(cylinder);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(cylinder)}
            >
              <TextRegular w="full">{cylinder}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
