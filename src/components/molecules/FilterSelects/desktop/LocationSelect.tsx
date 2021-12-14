import { Checkbox } from '@chakra-ui/checkbox';
import { useEffect, useState } from 'react';
import { MultiSelect } from 'src/components/atoms/Selects/MultiSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectLocations } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface LocationSelectProps {}

export const LocationSelect: React.FC<LocationSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { locations } = useAppSelector((state) => state.carsReducer);
  const {locations: initSelection} = useAppSelector(state => state.selectedCarFilters)
  const dispatch = useAppDispatch();

  const locationsToShow = locations.filter((location) => location);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection)
    }
  }, [initSelection])

  const handleSelect = (location: string) => {
    if (selected.includes(location)) {
      setSelected(selected.filter((trans) => trans !== location));
    } else {
      setSelected([location].concat(selected));
    }
  };

  return (
    <MultiSelect
      size="md"
      selected={selected}
      label="location"
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
    </MultiSelect>
  );
};
