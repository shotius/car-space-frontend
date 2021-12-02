import { HStack } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { DividerVertical } from 'src/components/atoms/Divider';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { InputRegular } from '../../Inputs/InputRegular';

interface MobileYearInputProps {
  setKeyboardActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileYearInput: React.FC<MobileYearInputProps> = ({
  setKeyboardActive,
}) => {
  const [yearFrom, setYearFrom] = useState(0);
  const [yearTo, setYearTo] = useState(0);

  const { yearFrom: initYearFrom, yearTo: initYearTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if we have filters saved in redux assign them to components state
    if (initYearFrom) {
      setYearFrom(parseInt(initYearFrom));
    } else {
      setYearFrom(0);
    }
    if (initYearTo) {
      setYearTo(parseInt(initYearTo));
    } else {
      setYearTo(0);
    }
  }, [initYearFrom, initYearTo]);

  return (
    <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
      <InputRegular
        pr="2"
        placeholder="Year from"
        type="number"
        value={yearFrom}
        onChange={(e) => setYearFrom(parseInt(e.currentTarget.value))}
        onFocus={() => setKeyboardActive(true)}
        onBlur={() => {
          setKeyboardActive(false);
          yearFrom
            ? dispatch(selectYearFrom(yearFrom))
            : dispatch(selectYearFrom(null));
        }}
      />
      <DividerVertical height="30px" />
      <InputRegular
        placeholder="Year to"
        type="number"
        value={yearTo}
        onChange={(e) => setYearTo(parseInt(e.currentTarget.value))}
        onFocus={() => setKeyboardActive(true)}
        onBlur={() => {
          setKeyboardActive(false);
          yearTo
            ? dispatch(selectYearTo(yearTo))
            : dispatch(selectYearFrom(null));
        }}
      />
    </HStack>
  );
};
