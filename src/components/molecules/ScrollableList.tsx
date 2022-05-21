import { VStack } from '@chakra-ui/react';
import { range } from 'src/utils/functions/range';
import { TextButton } from './Buttons/TextButton';
import { TextRegular } from './Texts/TextRegular';
import { VerticalScrollable } from './Wrappers/VerticalScrollable';

interface ScrollableListProps {
  label?: string;
}

export const ScrollableList: React.FC<ScrollableListProps> = ({
  children,
  label,
}) => {
  return (
    <VStack h="full" w="full" spacing="2">
      {label ? (
        <TextRegular fontSize="16px" pr="4px">
          {label}
        </TextRegular>
      ) : null}

      <VerticalScrollable
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {children}
      </VerticalScrollable>
    </VStack>
  );
};
