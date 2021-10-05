import { HStack } from '@chakra-ui/layout';
import React, { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';


interface ScrollableDivProps {}

export const ScrollableDiv: React.FC<ScrollableDivProps> = ({ children }) => {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  return (
    <HStack
      ref={ref}
      onMouseDown={onMouseDown}
      w="full"
      overflow="auto"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {children}
    </HStack>
  );
};
