import { ButtonProps } from '@chakra-ui/react';
import { range } from 'src/utils/functions/range';
import { YearSelectButton } from './FilterSelects/desktop/YearSelect';
import { ScrollableList } from './ScrollableList';

interface YearSelectScrollableProps {
  label: string;
  yearFrom: number;
  yearTo: number;
  handleYearSelect: (year: number) => void; 
}

export const YearSelectScrollable: React.FC<
  YearSelectScrollableProps & ButtonProps
> = ({ label, color, handleYearSelect, yearFrom, yearTo }) => {
  return (
    <ScrollableList label={label}>
      {range(yearFrom, yearTo)
        .reverse()
        .map((num) => (
          <YearSelectButton
            key={num}
            num={num}
            onClick={() => handleYearSelect(num)}
            color={color}
          />
        ))}
    </ScrollableList>
  );
};
