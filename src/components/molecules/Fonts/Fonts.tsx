 
import { Global } from '@emotion/react';
import RobotoRegular from 'src/utils/fonts/Roboto-Regular.ttf';
import RobotoMedium from 'src/utils/fonts/Roboto-Medium.ttf';

export const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Roboto Regular';
        src: url(${RobotoRegular}) format('truetype');
      }
      /* latin */
      @font-face {
        font-family: 'Roboto Medium';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(${RobotoMedium}) format('truetype');
      }
      `}
  />
);