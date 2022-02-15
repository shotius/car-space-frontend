import { useState, useEffect, SyntheticEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'src/redux/app/hook';
import {
  selectYearFrom,
  selectYearTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import useOnSubmit from './useOnSubmit';

export const useYearSelect = ({ searchOnClear }) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [yearFrom, setYearFrom] = useState<number>(0);
  const [yearTo, setYearTo] = useState<number>(0);
  const [placeholder, setPlaceholder] = useState<string>('');
  const { yearFrom: initYearFrom, yearTo: initYearTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const filters = useAppSelector((state) => state.selectedCarFilters);
  const dispatch = useAppDispatch();

  const onSubmit = useOnSubmit();

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (yearFrom || yearTo) {
      setPlaceholder(`${yearFrom} - ${yearTo}`);
    } else {
      setPlaceholder(`Year`);
    }
  }, [yearFrom, yearTo]);

  useEffect(() => {
    initYearFrom ? setYearFrom(Number(initYearFrom)) : setYearFrom(0);
    initYearTo ? setYearTo(Number(initYearTo)) : setYearTo(0);
  }, [initYearFrom, initYearTo]);

  // handler year from select
  const handleSelectYearFrom = (num: number) => {
    if (yearFrom === num) {
      setYearFrom(0);
    } else if (num >= yearTo) {
      setYearFrom(num);
      setYearTo(num);
    } else {
      setYearFrom(num);
    }
  };

  // hander year to select
  const handleSelectYearTo = (num: number) => {
    if (yearTo === num) {
      setYearTo(0);
      setYearFrom(0);
    } else if (num <= yearFrom) {
      setYearFrom(num);
      setYearTo(num);
    } else {
      setYearTo(num);
    }
  };

  const handleClose = () => {
    setAreOptionsOpen(false);
    dispatch(selectYearFrom(yearFrom));
    dispatch(selectYearTo(yearTo));
  };

  const clearCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    setYearTo(0);
    setYearFrom(0);
    dispatch(selectYearFrom(0));
    dispatch(selectYearTo(0));
    setPlaceholder('');
    setAreOptionsOpen(false);
    searchOnClear && onSubmit({ ...filters, yearFrom: 0, yearTo: 0 });
  };

  const isBlack = yearFrom || yearTo || areOptionsOpen;

  return {
    handleSelectYearFrom,
    handleSelectYearTo,
    areOptionsOpen,
    setAreOptionsOpen,
    placeholder,
    yearFrom,
    yearTo,
    handleClose,
    clearCb,
    isBlack,
  };
};
