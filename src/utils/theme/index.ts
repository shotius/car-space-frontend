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
      '100': '#FB56073D',
      '200': '#FB560752',
      '300': '#FB560761',
      '400': '#fc8c57',
      '500': '#FB5607',
      '600': '#EB3E16',
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