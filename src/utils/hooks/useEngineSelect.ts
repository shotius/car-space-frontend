import { useState, useEffect, SyntheticEvent } from 'react';
import { useAppSelector, useAppDispatch } from 'src/redux/app/hook';
import {
  selectEngineFrom,
  selectEnginTo,
} from 'src/redux/features/auth/selectedCarFilterSlice';

export const useEngineSelect = () => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [engineFrom, setEngineFrom] = useState<number>(0);
  const [engineTo, setEngineTo] = useState<number>(0);
  const [placeholder, setPlaceholder] = useState<string>('');
  const { engineFrom: initEngineFrom, engineTo: initEngineTo } = useAppSelector(
    (state) => state.selectedCarFilters
  );
  const dispatch = useAppDispatch();

  // when ever selected value changes, placeholder changes as well
  useEffect(() => {
    if (engineFrom || engineTo) {
      setPlaceholder(`${engineFrom} - ${engineTo}`);
    } else {
      setPlaceholder(`engine`);
    }
  }, [engineFrom, engineTo]);

  // initialize if we have values in redux
  useEffect(() => {
    if (initEngineFrom) {
      setEngineFrom(Number(initEngineFrom));
    } else {
      setEngineFrom(0);
    }
    if (initEngineTo) {
      setEngineTo(Number(initEngineTo));
    } else {
      setEngineTo(0);
    }
  }, [initEngineFrom, initEngineTo]);

  // generate list of engine capacities
  const generatedEngines = (a: number, b: number) => {
    const list: number[] = [];
    for (let i = a; i <= b; i = parseFloat(((i * 100 + 10) / 100).toFixed(1))) {
      list.push(i);
    }
    return list;
  };

  const handleClose = () => {
    setAreOptionsOpen(false);
    dispatch(selectEngineFrom(engineFrom));
    dispatch(selectEnginTo(engineTo));
  };

  const claerCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    setEngineTo(0);
    setEngineFrom(0);
    dispatch(selectEngineFrom(0));
    dispatch(selectEnginTo(0));
    setPlaceholder('');
    setAreOptionsOpen(false);
  };

  const handleSelectEngineFrom = (num: number) => {
    setEngineFrom(num);
    if (num >= engineTo) {
      setEngineTo(num);
    }
  };

  const handleSelectEngineTo = (num: number) => {
    setEngineTo(num);
    if (num <= engineFrom) {
      setEngineFrom(num);
    }
  };

  const areOptionsSelected = !!(engineFrom || engineTo);

  const isBlack = areOptionsOpen || areOptionsSelected;

  return {
    areOptionsOpen,
    generatedEngines,
    engineFrom,
    engineTo,
    handleClose,
    claerCb,
    setAreOptionsOpen,
    areOptionsSelected,
    isBlack,
    placeholder,
    handleSelectEngineFrom,
    handleSelectEngineTo,
  };
};
