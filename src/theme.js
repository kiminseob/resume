import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import customTheme from 'scss/variable.module.scss';
import _ from 'lodash';

const { fontXLarge, fontLarge, fontMedium, fontSmall } = customTheme;
const {
  mobileBreakpoint: mobile,
  laptopBreakpoint: laptop,
  tabletBreakpoint: tablet,
  desktopBreakpoint: desktop,
} = _.mapValues(customTheme, (v) => parseInt(v.replaceAll(/\D/g, ''), 10));
const breakpoints = createBreakpoints({
  values: {
    mobile,
    tablet,
    laptop,
    desktop,
  },
  unit: 'rem',
});

export const theme = createTheme({
  breakpoints,
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: '3.125rem',
          [breakpoints.up(desktop)]: {
            fontSize: fontXLarge,
          },
          [breakpoints.between(laptop, desktop)]: {
            fontSize: fontLarge,
          },
          [breakpoints.between(tablet, laptop)]: {
            fontSize: fontMedium,
          },
          [breakpoints.between(mobile, tablet)]: {
            fontSize: fontSmall,
            padding: 0,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          cursor: 'pointer',
          [breakpoints.up(desktop)]: {
            width: '4rem',
            height: '4rem',
          },
          [breakpoints.between(laptop, desktop)]: {
            width: '3.5rem',
            height: '3.5rem',
          },
          [breakpoints.between(tablet, laptop)]: {
            width: '3rem',
            height: '3rem',
          },
          [breakpoints.between(mobile, tablet)]: {
            width: '2.1875rem',
            height: '2.1875rem',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          [breakpoints.up(desktop)]: {
            fontSize: '0.8125rem',
          },
          [breakpoints.between(laptop, desktop)]: {
            fontSize: '0.7125rem',
          },
          [breakpoints.between(tablet, laptop)]: {
            fontSize: '0.6125rem',
          },
          [breakpoints.between(mobile, tablet)]: {
            fontSize: '0.5125rem',
          },
        },
      },
    },
  },
});
