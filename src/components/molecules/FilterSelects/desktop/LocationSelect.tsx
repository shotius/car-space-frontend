import { Checkbox } from '@chakra-ui/checkbox';
import { useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectLocations } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface LocationSelectProps {}

export const LocationSelect: React.FC<LocationSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const { locations } = useAppSelector((state) => state.carsReducer);
  const dispatch = useAppDispatch();

  const locationsToShow = locations.filter((location) => location);

  const handleSelect = (location: string) => {
    if (selected.includes(location)) {
      setSelected(selected.filter((trans) => trans !== location));
    } else {
      setSelected([location].concat(selected));
    }
  };

  return (
    <SelectGeneral
      size="md"
      selected={selected}
      label="Location"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectLocations([]));
      }}
      onApply={() => dispatch(selectLocations(selected))}
      top="35px"
    >
      <SelectContent>
        {locationsToShow.map((location) => (
          <SelectOptionButton
            key={location}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(location);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(location)}
            >
              <TextRegular w="full">{location}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};