import { Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ButtonRound } from '../Buttons/CurrencyButton';
import { TextRegular } from '../Texts/TextRegular';

interface MiddlePaginNumbersProps {
  totalPages: number;
  activePage: number;
  onChange: (a: number) => void;
  paginNumbers: number[];
}

export const MiddlePaginNumbers: React.FC<MiddlePaginNumbersProps> = ({
  activePage,
  totalPages,
  onChange,
  paginNumbers,
}) => {
  const { isMobile, isDesktop } = useDetectScreen();

  const [firstNums, setFirstNums] = useState<number[]>([]);
  const [lastNums, setLastNums] = useState<number[]>([]);
  const [midNums, setMidNums] = useState<number[]>([]);

  const showLeftDots = firstNums.length === 1;
  const showRightDots = lastNums.length === 1;
  
  // numbers to show in the middle
  let midNumsToShow = 3;
  if (!isMobile) midNumsToShow = 5;


  // numbers to show in begining and in the end
  let toShow = 10;
  if (isMobile) toShow = 3;
  if (isDesktop) toShow = 10;

  // handle with pagin numbers
  useEffect(() => {
    // handle first page numbers
    if (activePage === toShow) {
      // if active page is equal to the last first num -> show one more num
      setFirstNums(paginNumbers.slice(0, toShow + 1));
    } else if (activePage > toShow) {
      // if active num is more then nums to show first first num will be 1
      setFirstNums([1]);
    } else {
      // if active num is less then nums to show -> show first nums
      setFirstNums(paginNumbers.slice(0, toShow));
    }

    // handle MinNums
    if (activePage > toShow && activePage <= totalPages - toShow) {
      setMidNums(
        paginNumbers.slice(
          activePage - Math.floor(midNumsToShow / 2) - 1,
          activePage + Math.floor(midNumsToShow / 2)  
        )
      );
    } else {
      console.log('activePage', activePage, 'total', totalPages)
      console.log()
      setMidNums([]);
    }

    // handle LastNums
    if (activePage === totalPages - toShow + 1) {
      // if active num is equal to the fist of last nums  -> add one more num in the begining
      setLastNums(paginNumbers.slice(totalPages - toShow - 1, totalPages));
    } else if (activePage > totalPages - toShow) {
      // if active num is close to last nums show last nums
      setLastNums(paginNumbers.slice(totalPages - toShow, totalPages));
    } else {
      // else last nums will just the last one
      setLastNums([totalPages]);
    }

    // handle case when ther are not enough pages
    if (paginNumbers.length < toShow + 3) {
      setFirstNums([...paginNumbers]);
      setMidNums([]);
      setLastNums([]);
    }
  }, [activePage, totalPages]);

  return (
    <>
      {firstNums.map((num) => (
        <ButtonRound
          key={num}
          onClick={() => onChange(num)}
          active={activePage === num}
        >
          <Heading fontSize="18px" fontWeight="light">
            {num}
          </Heading>
        </ButtonRound>
      ))}

      <TextRegular display={showLeftDots ? 'block' : 'none'}>...</TextRegular>

      {midNums.map((num) => (
        <ButtonRound
          key={num}
          onClick={() => onChange(num)}
          active={activePage === num}
        >
          <Heading fontSize="18px" fontWeight="light">
            {num}
          </Heading>
        </ButtonRound>
      ))}

      <TextRegular display={showRightDots ? 'block' : 'none'}>...</TextRegular>

      {lastNums.map((num) => (
        <ButtonRound
          key={num}
          onClick={() => onChange(num)}
          active={activePage === num}
        >
          <Heading fontSize="18px" fontWeight="light">
            {num}
          </Heading>
        </ButtonRound>
      ))}
    </>
  );
};
