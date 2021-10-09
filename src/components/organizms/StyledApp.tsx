import { ChakraProvider } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';

import { Fonts } from 'components/molecules/Fonts';
import React from 'react';
import theme from 'utils/theme';

interface StylesAppProps {}

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */

  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const StyledApp: React.FC<StylesAppProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Global styles={GlobalStyles} />
      {children}
    </ChakraProvider>
  );
};
