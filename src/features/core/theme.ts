import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3'
}

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainText: palette.black
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  zIndices: {},
  borderRadii: {},
  textVariants: {
    defaults: {
      color: 'mainText',
      fontSize: 14
    }
  }
})

export type Theme = typeof theme

export default theme
