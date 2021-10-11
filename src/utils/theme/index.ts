import { extendTheme, theme as base } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "81em",
  "2xl": "96em",
})

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
      '400': "#3D405B"
    },
  },
  fonts: {
    heading: `Roboto Medium, ${base.fonts.heading}`,
    body: `Roboto Regular, ${base.fonts.body}`,
  },
  breakpoints
});

export default theme;

// withDefaultColorScheme({
//   colorScheme: 'brand',
//   components: ['Checkbox'],
// }),
// withDefaultVariant({
//   variant: 'filled',
//   components: ['Input', 'Select'],
// })
