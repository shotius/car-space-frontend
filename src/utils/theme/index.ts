import { extendTheme, theme as base } from '@chakra-ui/react';

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
      '300': '#FB560761',
      '400': '#0000000A',
      '500': '#00000029',
      '600': '#F0F0F0',
      '700': '#E8E8E8',
      '800': '#DEDEE0',
      '900': '#707070',
    },
    autoBlue: {
      '400': "#3D405B"
    }
  },
  fonts: {
    heading: `Roboto Medium, ${base.fonts.heading}`,
    body: `Roboto Regular, ${base.fonts.body}`,
  },
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
