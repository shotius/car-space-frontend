import { Checkbox, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { selectFuels } from 'src/redux/features/auth/selectedCarFilterSlice';
import { capitalizeEach } from 'src/utils/functions/capitalizeEach';
import { SearchInput } from '../Inputs/SearchInput';
import { MobileFilterPopup } from '../Popups/MobileFIlterPopup';

interface MobileFuelPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileFuelsPopup: React.FC<MobileFuelPopupProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchWord, setSearchWord] = useState('');
  const [selectedFuels, setSelectedFuels] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  // all conditions
  const { fuels: allFuels } = useAppSelector(
    (state) => state.carsReducer
  );
  // already selected conditions
  const { fuels: initSelectedFuels } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // asign already selected conditions to the state
  useEffect(() => {
    if (initSelectedFuels.length) {
      setSelectedFuels(initSelectedFuels);
    }
  }, [initSelectedFuels]);

  // conditions filtered base on search word
  // if condition is empty it means it is not demaged so "New"
  const fuelsToShow = () =>
    allFuels
      .filter((fuels) =>
        fuels && fuels.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
      );

  // checkbox change handler
  const onChangeHandler = (fuel: string) => {
    if (!selectedFuels.includes(fuel)) {
      setSelectedFuels(selectedFuels.concat(fuel));
    } else {
      setSelectedFuels(selectedFuels.filter((c) => c !== fuel));
    }
  };

  return (
    <MobileFilterPopup
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => {
        dispatch(selectFuels(selectedFuels));
        onClose();
      }}
      header={
        <SearchInput searchWord={searchWord} setSearchWord={setSearchWord} />
      }
    >
      <VStack w="full" alignItems="flex-start" spacing="16px" minH="30vh">
        {fuelsToShow().map((fuel) => (
          <Checkbox
            colorScheme="autoOrange"
            defaultChecked={initSelectedFuels?.includes(fuel)}
            onChange={(e) => {
              e.preventDefault();
              onChangeHandler(fuel);
            }}
            key={fuel}
          >
            {capitalizeEach(fuel)}
          </Checkbox>
        ))}
      </VStack>
    </MobileFilterPopup>
  );
};
