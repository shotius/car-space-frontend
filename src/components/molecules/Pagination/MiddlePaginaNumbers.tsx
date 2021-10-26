import { Heading } from '@chakra-ui/react';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ButtonRound } from '../Buttons/CurrencyButton';

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
  const { isMobile, isTablet, isDesktop } = useDetectScreen();

  // page numbers to show in the begining
  let pagesToDisplay = 3;
  if (isMobile) pagesToDisplay = 3;
  if (isTablet) pagesToDisplay = 5;
  if (isDesktop) pagesToDisplay = 10;

  // page numbers to show in the middle 
  let middlePages: number = 1;
  if (isMobile) middlePages = 1;
  if (isTablet) middlePages = 2;
  if (isDesktop) middlePages = 3;

  switch (true) {
    // cases untill active page becomes more than specified
    case activePage <= Math.ceil(pagesToDisplay / 2):
      return (
        // very first page number
        <>
          {paginNumbers.slice(0, pagesToDisplay -1).map((num) => (
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
          ...
        </>
      );
    case activePage >= totalPages - Math.floor(pagesToDisplay / 2):
      return (
        // last page numbers (depends on pagesToDisplay)
        <>
          ...
          {paginNumbers
            .slice(totalPages - pagesToDisplay  - 1, totalPages)
            .map((num) => (
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
    default:
      // middle pages, here pages numbers are surounded with dots
      return (
        <>
          ...
          {paginNumbers
            .slice(activePage - middlePages - 2, activePage + middlePages - 1)
            .map((num) => (
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
          ...
        </>
      );
  }
};
