import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectDrives } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface DrivesSelectProps {}

export const DrivesSelect: React.FC<DrivesSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { drives } = useAppSelector((state) => state.carsReducer);
  const { drives: initSelection} = useAppSelector(state => state.selectedCarFilters)
  const dispatch = useAppDispatch();

  const drivesToShow = drives.filter((el) => el);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection)
    }
  }, [initSelection])

  const handleSelect = (drive: string) => {
    if (selected.includes(drive)) {
      setSelected(selected.filter((trans) => trans !== drive));
    } else {
      setSelected([drive].concat(selected));
    }
  };

  return (
    <SelectGeneral
      size="md"
      selected={selected}
      label="Drives"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectDrives([]));
      }}
      onApply={() => dispatch(selectDrives(selected))}
      top="35px"
    >
      <SelectContent>
        {drivesToShow.map((drive) => (
          <SelectOptionButton
            key={drive}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(drive);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(drive)}
            >
              <TextRegular w="full">{drive}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
