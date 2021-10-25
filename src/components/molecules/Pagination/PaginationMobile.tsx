import { Heading } from '@chakra-ui/layout';
import { ButtonRound } from '../Buttons/CurrencyButton';

interface PaginationMobileProps {
  paginNumbers: number[];
  activePage: number;
  onChange: (number: number) => void;
  totalPages: number;
}

export const PaginationMobile: React.FC<PaginationMobileProps> = ({
  paginNumbers,
  activePage,
  totalPages,
  onChange,
}) => {
  return (
    <>
      <Heading
        fontSize="18px"
        fontWeight="light"
        display={activePage === 1 || activePage === 2 ? 'none' : 'flex'}
      >
        ...
      </Heading>

      {/* list of [2, totalPages - 1] buttons*/}
      {paginNumbers.map((num) => (
        <ButtonRound
          key={num}
          onClick={() => onChange(num)}
          active={activePage === num}
          display={
            activePage === num ||
            activePage - 1 === num ||
            activePage + 1 === num
              ? 'flex'
              : 'none'
          }
        >
          <Heading fontSize="18px" fontWeight="light">
            {num}
          </Heading>
        </ButtonRound>
      ))}

      <ButtonRound
        active={activePage === 3}
        onClick={() => onChange(3)}
        display={activePage === 1 ? 'flex' : 'none'}
      >
        <Heading fontSize="18px" fontWeight="light">
          3
        </Heading>
      </ButtonRound>
      <Heading
        fontSize="18px"
        fontWeight="light"
        display={
          activePage === totalPages || activePage === totalPages - 1
            ? 'none'
            : 'flex'
        }
      >
        ...
      </Heading>
    </>
  );
};
