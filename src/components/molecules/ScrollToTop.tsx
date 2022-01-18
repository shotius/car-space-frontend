import React, { useEffect } from 'react';

interface ScrollToTopProps {}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({}) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return null;
};
