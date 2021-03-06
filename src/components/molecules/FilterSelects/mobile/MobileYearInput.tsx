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
  const dispatch = useAppDispatch();

  const initYearFrom = useAppSelector(
    (state) => state.selectedCarFilters.yearFrom
  );
  const initYearTo = useAppSelector((state) => state.selectedCarFilters.yearTo);

  // if we have filters saved in redux assign them to components state
  useEffect(() => {
    initYearFrom ? setYearFrom(initYearFrom.toString()) : setYearFrom('');
    initYearTo ? setYearTo(initYearTo.toString()) : setYearTo('');
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
          // if yea from is more then year to make year to equal to year from
          if (parseInt(yearFrom) >= (parseInt(yearTo) || 0)) {
            dispatch(selectYearTo(parseInt(yearFrom)));
          }
          dispatch(selectYearFrom(parseInt(yearFrom)));
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
          // if year to is less then year from, move year from down to equel year to
          parseInt(yearTo) <= parseInt(yearFrom) &&
            dispatch(selectYearFrom(parseInt(yearTo)));
          // assign "0" if yearTo is null
          dispatch(selectYearTo(parseInt(yearTo) || 0));
        }}
      />
    </HStack>
  );
};
