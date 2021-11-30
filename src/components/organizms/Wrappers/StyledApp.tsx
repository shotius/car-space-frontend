import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { Fonts } from 'src/components/molecules/Fonts';
import theme from 'src/utils/theme';


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
  * {
    -webkit-tap-highlight-color: transparent;
  }

  // remove blue shadows from checkbox and radio buttons
  *[data-focus] {
    box-shadow: none !important;
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
