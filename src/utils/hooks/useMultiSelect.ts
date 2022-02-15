import { useState, useEffect, SyntheticEvent } from 'react';

export const useMultiSelect = ({ selected, label, onApply, clearSelected }) => {
  const [areOptionsOpen, setAreOptionsOpen] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>('');

  useEffect(() => {
    if (selected.length) {
      setPlaceholder(`${selected.join(', ')}`);
    } else {
      setPlaceholder(label);
    }
  }, [selected]);

  const closeOptions = () => setAreOptionsOpen(false);

  const handeClose = () => {
    closeOptions();
    onApply();
  };

  const clearCb = (e: SyntheticEvent) => {
    if (e.stopPropagation) e.stopPropagation();
    clearSelected();
    setAreOptionsOpen(false);
  };

  const areOptionsSelected = !!selected.length;

  const isBlack = areOptionsOpen || areOptionsSelected;

  return {
    closeOptions,
    areOptionsOpen,
    setAreOptionsOpen,
    placeholder,
    handeClose,
    clearCb,
    areOptionsSelected,
    isBlack,
  };
};
