import { createTheme } from '@mui/material/styles'

// Mesh Design System Tokens
export const colors = {
  primary: {
    light: '#E6E8F0',
    medium: '#B0B9CF',
    main: '#001C65',
    dark: '#00113D',
  },
  secondary: {
    light: '#BFDBFD',
    main: '#308CF8',
    dark: '#15568F',
  },
  error: {
    light: '#FBD9D8',
    main: '#CF2E2E',
    dark: '#90141C',
  },
  warning: {
    light: '#FBEAD2',
    main: '#F3AA47',
    dark: '#E68231',
  },
  success: {
    light: '#CDE4CA',
    main: '#7BB872',
    dark: '#25601B',
  },
  info: {
    light: '#CBE8FA',
    main: '#58B4F0',
    dark: '#2F70A9',
  },
  neutral: {
    lighter: '#FAFAFA',
    light: '#F7F7F7',
    medium: '#F5F5F5',
    main: '#DEDEDE',
    dark: '#BABABA',
    darker: '#797979',
  },
  text: {
    darker: '#212121',
    medium: '#515151',
  },
}

export const typography = {
  fontFamily: 'THICCCBOI, sans-serif',
  headline: {
    h1: { fontSize: '30px', lineHeight: '36px', fontWeight: 700 },
    h2: { fontSize: '20px', lineHeight: '26px', fontWeight: 700 },
    h3: { fontSize: '18px', lineHeight: '24px', fontWeight: 400 },
    h5: { fontSize: '16px', lineHeight: '24px', fontWeight: 600 },
    h6: { fontSize: '16px', lineHeight: '24px', fontWeight: 700 },
  },
  subtitle: {
    s1: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    s2: { fontSize: '14px', lineHeight: '20px', fontWeight: 400 },
    s3: { fontSize: '12px', lineHeight: '20px', fontWeight: 400 },
  },
  body: {
    b1: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    b2: { fontSize: '14px', lineHeight: '18px', fontWeight: 400 },
    b3: { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
  },
  button: {
    bt1: { fontSize: '16px', lineHeight: '24px', fontWeight: 500 },
    bt2: { fontSize: '16px', lineHeight: '24px', fontWeight: 500 },
    bt3: { fontSize: '12px', lineHeight: '18px', fontWeight: 500 },
  },
  inputs: {
    in1: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
    in2: { fontSize: '12px', lineHeight: '16px', fontWeight: 400 },
    in3: { fontSize: '12px', lineHeight: '16px', fontWeight: 600 },
  },
}

export const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary.light,
      main: colors.primary.main,
      dark: colors.primary.dark,
    },
    secondary: {
      light: colors.secondary.light,
      main: colors.secondary.main,
      dark: colors.secondary.dark,
    },
    error: {
      light: colors.error.light,
      main: colors.error.main,
      dark: colors.error.dark,
    },
    warning: {
      light: colors.warning.light,
      main: colors.warning.main,
      dark: colors.warning.dark,
    },
    success: {
      light: colors.success.light,
      main: colors.success.main,
      dark: colors.success.dark,
    },
    info: {
      light: colors.info.light,
      main: colors.info.main,
      dark: colors.info.dark,
    },
    background: {
      default: colors.neutral.lighter,
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.text.darker,
      secondary: colors.text.medium,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
    h1: {
      fontSize: typography.headline.h1.fontSize,
      lineHeight: typography.headline.h1.lineHeight,
      fontWeight: typography.headline.h1.fontWeight,
    },
    h2: {
      fontSize: typography.headline.h2.fontSize,
      lineHeight: typography.headline.h2.lineHeight,
      fontWeight: typography.headline.h2.fontWeight,
    },
    h3: {
      fontSize: typography.headline.h3.fontSize,
      lineHeight: typography.headline.h3.lineHeight,
      fontWeight: typography.headline.h3.fontWeight,
    },
    h5: {
      fontSize: typography.headline.h5.fontSize,
      lineHeight: typography.headline.h5.lineHeight,
      fontWeight: typography.headline.h5.fontWeight,
    },
    h6: {
      fontSize: typography.headline.h6.fontSize,
      lineHeight: typography.headline.h6.lineHeight,
      fontWeight: typography.headline.h6.fontWeight,
    },
    subtitle1: {
      fontSize: typography.subtitle.s1.fontSize,
      lineHeight: typography.subtitle.s1.lineHeight,
      fontWeight: typography.subtitle.s1.fontWeight,
    },
    subtitle2: {
      fontSize: typography.subtitle.s2.fontSize,
      lineHeight: typography.subtitle.s2.lineHeight,
      fontWeight: typography.subtitle.s2.fontWeight,
    },
    body1: {
      fontSize: typography.body.b1.fontSize,
      lineHeight: typography.body.b1.lineHeight,
      fontWeight: typography.body.b1.fontWeight,
    },
    body2: {
      fontSize: typography.body.b2.fontSize,
      lineHeight: typography.body.b2.lineHeight,
      fontWeight: typography.body.b2.fontWeight,
    },
    button: {
      fontSize: typography.button.bt1.fontSize,
      lineHeight: typography.button.bt1.lineHeight,
      fontWeight: typography.button.bt1.fontWeight,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
})
