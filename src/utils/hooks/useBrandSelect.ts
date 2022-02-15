import { useState, useEffect, SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import { getModels, setModels } from 'src/redux/features/auth/carsSlice';
import {
  selectBrand,
  selectModels,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { addLettersToSortedArray } from '../functions/addLettersToSortedArray';
import useOnSubmit from './useOnSubmit';

// In the compont I have 4 different variables
//1. Value: is used to display selected option
//2. Placeholder: is displayed when not searching
//3. searchWord: when user writing in search box, search word is changing
//4. selected: are Selected options, used to keep track of other three variables
export const useBrandSelect = ({
  searchOnClear,
}: {
  searchOnClear: boolean;
}) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const dispatch = useAppDispatch();

  const options = useAppSelector((state) => state.carsReducer.brands);
  const initSelection = useAppSelector(
    (state) => state.selectedCarFilters.brands
  );

  const filters = useAppSelector((state) => state.selectedCarFilters);

  const onSubmit = useOnSubmit();

  // whenever selected values change change value and placeholder
  useEffect(() => {
    if (areOptionsOpen) {
      setValue(selected.join(', '));
    }

    updatePlaceholder();
  }, [selected.length]);

  useEffect(() => {
    if (initSelection.length) {
      setSelected(initSelection);
    } else {
      setSelected([]);
    }
  }, [initSelection]);

  // handle option select
  const handleSelect = (opt: string) => {
    // search keyword will be cleared
    // if option is in selected values remove, else include
    if (selected.includes(opt)) {
      setSelected(selected.filter((o) => o !== opt));
      setValue(selected.join(', '));
    } else {
      setSelected([opt].concat(selected));
    }
  };

  const updatePlaceholder = () => {
    if (selected.length) {
      setPlaceholder(() => `${selected.join(', ')}`);
    } else {
      setPlaceholder(() => `Brands`);
    }
  };

  // filter options when searchWord is specified
  const optionsToShow = addLettersToSortedArray(options).filter((option) => {
    return option.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase());
  });

  const handleClose = () => {
    setAreOptionsOpen(false);
    updatePlaceholder();
    dispatch(selectBrand(selected));
    dispatch(getModels(selected));
    setValue('');
    setSearchWord('');
  };

  const clearCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    setSelected([]);
    setValue('');
    setPlaceholder('');
    setAreOptionsOpen(false);
    dispatch(setModels([]));
    dispatch(selectBrand([])).payload;
    dispatch(selectModels([]));
    searchOnClear && onSubmit({ ...filters, brands: [], models: [] });
  };

  const onFocus = () => {
    // onFocus open Options
    setAreOptionsOpen(true);
    // if something is selected, display in placeholder
    updatePlaceholder();
    // clear value in the search field
    setValue('');
  };

  return {
    optionsToShow,
    handleSelect,
    areOptionsOpen,
    handleClose,
    setAreOptionsOpen,
    selected,
    clearCb,
    placeholder,
    value,
    searchWord,
    setSearchWord,
    onFocus,
  };
};
