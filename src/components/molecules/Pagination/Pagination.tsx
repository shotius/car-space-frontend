import { HStack, StackProps } from '@chakra-ui/react';
// import { useDetectScreen } from 'src/utils/hooks/useDetectScreen';
import { ArrowNextIcon } from '../../atoms/Icons/Arrows/ArrowNextIcon';
import { ArrowPrevIcon } from '../../atoms/Icons/Arrows/ArrowPrevIcon';
import { ButtonWithIcon } from '../Buttons/IconWithButton';
import { MiddlePaginNumbers } from './MiddlePaginaNumbers';

interface PaginationProps {
  totalPages: number;
  activePage: number;
  onPageChange: (number: number) => void;
}

export const Pagination: React.FC<PaginationProps & StackProps> = ({
  activePage,
  totalPages = 1,
  onPageChange,
  ...rest
}) => {
  // pagination nunbers to map through
  const paginNumbers = [...Array(totalPages).keys()].map((num) => num + 1); // add one to all all page

  return (
    <HStack spacing={['1', '2']} {...rest}>
      <ButtonWithIcon
        variant="ghost"
        bg="transparent"
        icon={ArrowPrevIcon}
        disabled={activePage === 1}
        onClick={() => onPageChange(activePage - 1)}
        boxSize="6"
        _active={{ bg: 'autoGrey.400' }}
        display={totalPages === 1 ? 'none' : 'block'}
      />

      {/* dinamicly generated page numbers */}
      <MiddlePaginNumbers
        activePage={activePage}
        totalPages={totalPages}
        onChange={onPageChange}
        paginNumbers={paginNumbers}
      />

      <ButtonWithIcon
        variant="ghost"
        bg="transparent"
        icon={ArrowNextIcon}
        fill="#000"
        boxSize="6"
        disabled={activePage === totalPages}
        onClick={() => onPageChange(activePage + 1)}
        _active={{ bg: 'autoGrey.400' }}
        display={totalPages === 1 ? 'none' : 'block'}
      />
    </HStack>
  );
};
