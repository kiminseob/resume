import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import customTheme from 'scss/variable.module.scss';
import _ from 'lodash';

const { fontXLarge, fontLarge, fontMedium, fontSmall } = customTheme;
const {
  mobileBreakpoint,
  laptopBreakpoint,
  tabletBreakpoint,
  desktopBreakpoint,
} = _.mapValues(customTheme, (v) => parseInt(v.replaceAll(/\D/g, ''), 10));
const breakpoints = createBreakpoints({
  values: {
    mobile: mobileBreakpoint,
    tablet: tabletBreakpoint,
    laptop: laptopBreakpoint,
    desktop: desktopBreakpoint,
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
          [breakpoints.up(desktopBreakpoint)]: {
            fontSize: fontXLarge,
          },
          [breakpoints.between(laptopBreakpoint, desktopBreakpoint)]: {
            fontSize: fontLarge,
          },
          [breakpoints.between(tabletBreakpoint, laptopBreakpoint)]: {
            fontSize: fontMedium,
          },
          [breakpoints.between(mobileBreakpoint, tabletBreakpoint)]: {
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
          [breakpoints.up(desktopBreakpoint)]: {
            width: '5rem', // 80px
            height: '5rem',
          },
          [breakpoints.between(laptopBreakpoint, desktopBreakpoint)]: {
            width: '4.0625rem', // 65px
            height: '4.0625rem',
          },
          [breakpoints.between(tabletBreakpoint, laptopBreakpoint)]: {
            width: '3.125rem', // 50px
            height: '3.125rem',
          },
          [breakpoints.between(mobileBreakpoint, tabletBreakpoint)]: {
            width: '2.1875rem', // 35px
            height: '2.1875rem',
          },
        },
      },
    },
  },
});
