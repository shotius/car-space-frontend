import  React, { useRef, useState } from 'react';

interface ScrollDragProps {}

export const ScrollDrag: React.FC<ScrollDragProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [scrollX, setScrollX] = useState<number>(0);
  const [clientX, setClientX] = useState<number>(0);

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    console.log("mouse down")
    setIsScrolling(true);
    setClientX(e.clientX);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    console.log('on mouse up')
    setIsScrolling(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    console.log('mouse move')
    console.log('is Scrolling', isScrolling)
    if (isScrolling) {
      // console.log(ref.current?.scrollLeft);
      if (ref.current) {
        console.log('isScrolling', isScrolling);
        ref.current.scrollLeft = scrollX + e.clientX - clientX;
        setScrollX(scrollX + e.clientX - clientX);
        setClientX(e.clientX);
      }
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {React.Children.map(children, child =>
            React.Children.only(child))}
    </div>
  );
};
