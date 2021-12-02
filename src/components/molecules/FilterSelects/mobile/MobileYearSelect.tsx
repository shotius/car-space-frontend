import { Box, BoxProps, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { MobileSelect } from 'src/components/molecules/Selects/MobileSelect';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectYearFrom,
  selectYearTo
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { MobileYearPopup } from '../../MobileSelectPopups/MobileYearPopup';

interface SelectProps {}

export const MobileYearSelect: React.FC<SelectProps & BoxProps> = ({
  w = 'full',
  ...rest
}) => {
  const searchButtonRef = useRef(null);
  const dispatch = useAppDispatch();

  const { yearFrom: selectedYearFrom, yearTo: selectedYearTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );

  // year drawer
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box {...rest} minW={w} maxW={w}>
      <MobileSelect
        onClick={onOpen}
        label={
          selectedYearFrom || selectedYearTo
            ? `${selectedYearFrom} - ${selectedYearTo}`
            : 'Year'
        }
        hasValue={!!(selectedYearFrom || selectedYearTo)}
        onClear={() => {
          dispatch(selectYearFrom(null));
          dispatch(selectYearTo(null));
        }}
      />
      <MobileYearPopup
        finalFocusRef={searchButtonRef}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
};
