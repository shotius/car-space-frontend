import { Heading, HStack } from '@chakra-ui/react';
import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ArrowNextIcon } from '../../atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from '../../atoms/Icons/Arrows/ArrowPrevIcon';
import { ButtonRound } from '../Buttons/CurrencyButton';
import { IconWithButton } from '../IconWithButton';
import { PaginationMobile } from './PaginationMobile';

interface PaginationProps {
  totalPages: number;
  activePage: number;
  onChange: (number: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  activePage,
  totalPages = 0,
  onChange,
}) => {
  const { isMobile, isTablet } = useDetectScreen();

  // pagination nunbers to map through
  const paginNumbers = [...Array(totalPages).keys()]
    .map((num) => num + 1) // add one to all all page
    .slice(1, -1); // remove fist and last elements

    console.log('isMobile', isMobile)

  return (
    <HStack pt="18px" pb="18px" spacing={['1', '1']}>
      <IconWithButton
        variant="ghost"
        bg="transparent"
        icon={ArrowPrevIcon}
        disabled={activePage === 1}
        onClick={() => onChange(activePage - 1)}
        boxSize="6"
        _active={{ bg: 'autoGrey.400' }}
      />

      <ButtonRound active={activePage === 1} onClick={() => onChange(1)}>
        <Heading fontSize="18px" fontWeight="light">
          1
        </Heading>
      </ButtonRound>

      {(isMobile || isTablet) && (
        <PaginationMobile
          activePage={activePage}
          totalPages={totalPages}
          onChange={onChange}
          paginNumbers={paginNumbers}
        />
      )}
      
      {}

      <ButtonRound
        active={activePage === totalPages}
        onClick={() => onChange(totalPages)}
      >
        <Heading fontSize="18px" fontWeight="light">
          {totalPages}
        </Heading>
      </ButtonRound>
      <IconWithButton
        variant="ghost"
        bg="transparent"
        icon={ArrowNextIcon}
        fill="#000"
        boxSize="6"
        disabled={activePage === totalPages}
        onClick={() => onChange(activePage + 1)}
        _active={{ bg: 'autoGrey.400' }}
      />
    </HStack>
  );
};
