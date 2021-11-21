import { Checkbox } from '@chakra-ui/checkbox';
import { useState } from 'react';
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
  const dispatch = useAppDispatch()

  const cylindersToShow = cylinders.filter((cylinder) => cylinder);

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
      label="Cylinders"
      clearSelected={() => {
        setSelected([])
        dispatch(selectCylinders([]))
      }}
      onApply={() => dispatch(selectCylinders(selected))}
      top="35px"
    >
      <SelectContent>
        {cylindersToShow.map((fuel) => (
          <SelectOptionButton
            onClick={(e) => {
              e.preventDefault();
              handleSelect(fuel);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(fuel)}
              key={fuel}
            >
              <TextRegular w="full">{fuel}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
