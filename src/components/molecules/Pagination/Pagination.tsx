import { HStack } from '@chakra-ui/react';
// import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ArrowNextIcon } from '../../atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from '../../atoms/Icons/Arrows/ArrowPrevIcon';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { MiddlePaginNumbers } from './MiddlePaginaNumbers';

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
  // pagination nunbers to map through
  const paginNumbers = [...Array(totalPages).keys()]
    .map((num) => num + 1) // add one to all all page

  return (
    <HStack pt="18px" pb="18px" spacing={['1', '2']} maxW="100%" flexWrap="wrap">
      <ButtonWithIcon
        variant="ghost"
        bg="transparent"
        icon={ArrowPrevIcon}
        disabled={activePage === 1}
        onClick={() => onChange(activePage - 1)}
        boxSize="6"
        _active={{ bg: 'autoGrey.400' }}
      />


      {/* dinamicly generated page numbers */}
        <MiddlePaginNumbers
          activePage={activePage}
          totalPages={totalPages}
          onChange={onChange}
          paginNumbers={paginNumbers}
        />

      <ButtonWithIcon
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
