import { Heading, HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/redux/app/hook';
import { useMediaQueryMin } from 'src/utils/hooks/useMediaQueryMin';
import { ButtonRound } from '../Buttons/ButtonRound';
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
  // const { isMobile, isTablet, isDesktop } = useDetectScreen();
  const { isDesktop, isMobile, isTablet } = useAppSelector(
    (state) => state.globalAppState.screen
  );

  const [firstNums, setFirstNums] = useState<number[]>([]);
  const [lastNums, setLastNums] = useState<number[]>([]);
  const [midNums, setMidNums] = useState<number[]>([]);

  const { isLargerThan: isLargerThan360 } = useMediaQueryMin(360);

  // numbers to show in begining and in the end
  let toShow = 3;
  if (isTablet) toShow = 5;
  if (isDesktop) toShow = 10;

  const showLeftDots = firstNums.length === 1;
  const showRightDots = lastNums.length === 1;
  const showLastNums = activePage > lastNums.length - toShow;

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
      isMobile
        ? setMidNums([activePage - 1, activePage, activePage + 1])
        : setMidNums([
            activePage - 2,
            activePage - 1,
            activePage,
            activePage + 1,
            activePage + 2,
          ]);
    } else {
      setMidNums([]);
    }

    // handle LastNums
    if (activePage === totalPages - toShow + 1) {
      // if active num is equal to the fist of last nums  -> add one more num in the begining
      setLastNums(paginNumbers.slice(totalPages - toShow - 1, totalPages));
      setFirstNums([1]);
    } else if (activePage > totalPages - toShow) {
      // if active num is close to last nums show last nums
      setLastNums(paginNumbers.slice(totalPages - toShow, totalPages));
      setFirstNums([1]);
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
    <HStack>
      {/* If screen is smaller then 360px I will show minimalistic pagination  */}
      {isLargerThan360 ? (
        <HStack w="full" display={paginNumbers.length > 1 ? 'flex' : 'none'}>
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

          <TextRegular display={showLeftDots ? 'block' : 'none'}>
            ...
          </TextRegular>

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

          <TextRegular display={showRightDots ? 'block' : 'none'}>
            ...
          </TextRegular>

          {lastNums.map((num) => (
            <ButtonRound
              key={num}
              onClick={() => onChange(num)}
              active={activePage === num}
              display={isLargerThan360 && showLastNums ? 'block' : 'none'}
            >
              <Heading fontSize="18px" fontWeight="light">
                {num}
              </Heading>
            </ButtonRound>
          ))}
        </HStack>
      ) : (
        // Minimaliscit pagination
        <>
          <TextRegular display={activePage > 1 ? 'block' : 'none'}>
            ...
          </TextRegular>
          <ButtonRound active={true}>
            <Heading fontSize="18px" fontWeight="light">
              {activePage}
            </Heading>
          </ButtonRound>
          <TextRegular
            display={activePage < paginNumbers.length ? 'block' : 'none'}
          >
            ...
          </TextRegular>
        </>
      )}
    </HStack>
  );
};
