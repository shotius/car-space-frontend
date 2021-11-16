import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectLocations } from 'src/redux/features/auth/selectedCarFilterSlice';
import { SearchInput } from '../Inputs/SearchInput';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileLocationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileLocationPopup: React.FC<MobileLocationPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchWord, setSearchWord] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { locations: allLocations } = useAppSelector(
    (state) => state.carsReducer
  );
  // already selected conditions
  const { locations: initSelectedLocations } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedLocations.length) {
      setSelectedLocation(initSelectedLocations);
    } else {
      setSelectedLocation([])
    }
  }, [initSelectedLocations]);

  // conditions filtered base on search word
  // if condition is empty it means it is not demaged so "New"
  const LocationsToShow = () =>
    allLocations
      .filter((loc) =>
        loc.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
      );

  // checkbox change handler
  const onChangeHandler = (location: string) => {
    if (!selectedLocation.includes(location)) {
      setSelectedLocation(selectedLocation.concat(location));
    } else {
      setSelectedLocation(selectedLocation.filter((c) => c !== location));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectLocations(selectedLocation));
        onClose();
      }}
      header={
        <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} />
      }
    >
      <VStack w="full" alignItems="flex-start" spacing="16px">
        {LocationsToShow().map((locations) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedLocations?.includes(locations)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(locations);
            }}
            key={locations}
          >
            {locations}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
