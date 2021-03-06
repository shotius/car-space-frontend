import { extendTheme, theme as base } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em', // 480px   mobile     [0, 480)
  md: '48em', // 768px   tablet     [480, 768)
  lg: '71em', // 1136px  laptop     [1024, 1296)
  xl: '108em', // 1740px  HD         [1740, ...)
});

const theme = extendTheme({
  colors: {
    autoOrange: {
      '50': '#FB560714',
      '100': '#f1d2de',
      '200': '#efc0d2',
      '300': '#FB560761',
      '400': '#e76296',
      '500': '#DC1864',
      '600': '#e04c70',
    },
    autoGrey: {
      '50': '#E8E8E861',
      '100': '#F8F8F8',
      '200': '#F4F4F5',
      '300': '#0000000A',
      '400': '#00000029',
      '500': '#F0F0F0',
      '600': '#E8E8E8',
      '700': '#DEDEE0',
      '800': '#707070',
    },
    autoGreen: {
      '50': '',
      '100': '#5CB5B061',
      '200': '#90cdc9',
      '300': '#69bbb6',
      '400': '#5CB5B0',
      '500': '',
      '600': '',
      '700': '',
      '800': '',
    },
    autoBlue: {
      '400': '#3D405B',
    },
  },
  fonts: {
    heading: `Roboto Medium, ${base.fonts.heading}`,
    body: `Roboto Regular, ${base.fonts.body}`,
  },
  breakpoints,
  components: { Checkbox: { baseStyle: { _focus: { boxShadow: 'none' } } } },
});

export default theme;
