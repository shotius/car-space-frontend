import { Global } from '@emotion/react';
import RobotoRegular from 'utils/fonts/Roboto-Regular.ttf';
import RobotoMedium from 'utils/fonts/Roboto-Medium.ttf';

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
        src: url(${RobotoMedium}) format('truetype');
      }
      `}
  />
);