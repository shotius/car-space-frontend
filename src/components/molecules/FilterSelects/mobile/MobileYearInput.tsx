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
  const [yearFrom, setYearFrom] = useState<string>('');
  const [yearTo, setYearTo] = useState<string>('');

  const { yearFrom: initYearFrom, yearTo: initYearTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    // if we have filters saved in redux assign them to components state
    if (initYearFrom) {
      setYearFrom(initYearFrom.toString());
    } else {
      setYearFrom('');
    }
    if (initYearTo) {
      setYearTo(initYearTo.toString());
    } else {
      setYearTo('');
    }
  }, [initYearFrom, initYearTo]);

  return (
    <HStack borderRadius="8px" bg="white" spacing={0} flex="1" p="2px">
      <InputRegular
        pr="2"
        placeholder="Year from"
        type="number"
        value={yearFrom}
        onChange={(e) => setYearFrom(e.currentTarget.value)}
        onFocus={() => setKeyboardActive(true)}
        onBlur={() => {
          setKeyboardActive(false);
          yearFrom
            ? dispatch(selectYearFrom(parseInt(yearFrom)))
            : dispatch(selectYearFrom(0));
        }}
      />
      <DividerVertical height="30px" />
      <InputRegular
        placeholder="Year to"
        type="number"
        value={yearTo}
        onChange={(e) => setYearTo(e.currentTarget.value)}
        onFocus={() => setKeyboardActive(true)}
        onBlur={() => {
          setKeyboardActive(false);
          yearTo ? dispatch(selectYearTo(parseInt(yearTo))) : dispatch(selectYearFrom(0));
        }}
      />
    </HStack>
  );
};
