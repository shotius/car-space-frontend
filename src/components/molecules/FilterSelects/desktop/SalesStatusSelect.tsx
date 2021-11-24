import { Checkbox } from '@chakra-ui/checkbox';
import { useState } from 'react';
import { SelectGeneral } from 'src/components/atoms/Selects/SelectGeneral';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hook';
import {
  selectSalesStatus,
  selectTypes,
} from 'src/redux/features/auth/selectedCarFilterSlice';
import { SelectOptionButton } from '../../Buttons/SelectOptionButton';
import { TextRegular } from '../../Texts/TextRegular';
import { SelectContent } from '../../Wrappers/SelectContent';

interface SalesStatusSelectProps {}

export const SalesStatusSelect: React.FC<SalesStatusSelectProps> = ({}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const { salesStatus } = useAppSelector((state) => state.carsReducer);
  const dispatch = useAppDispatch();

  const salesStatusToShow = salesStatus.filter((status) => status);

  const handleSelect = (status: string) => {
    if (selected.includes(status)) {
      setSelected(selected.filter((trans) => trans !== status));
    } else {
      setSelected([status].concat(selected));
    }
  };

  return (
    <SelectGeneral
      size="md"
      selected={selected}
      label="Sales Status"
      clearSelected={() => {
        setSelected([]);
        dispatch(selectSalesStatus([]));
      }}
      onApply={() => dispatch(selectTypes(selected))}
      top="35px"
    >
      <SelectContent>
        {salesStatusToShow.map((status) => (
          <SelectOptionButton
            key={status}
            onClick={(e) => {
              e.preventDefault();
              handleSelect(status);
            }}
          >
            <Checkbox
              colorScheme="autoOrange"
              isChecked={selected?.includes(status)}
            >
              <TextRegular w="full">{status}</TextRegular>
            </Checkbox>
          </SelectOptionButton>
        ))}
      </SelectContent>
    </SelectGeneral>
  );
};
