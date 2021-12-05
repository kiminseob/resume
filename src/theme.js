import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
import customTheme from 'scss/variable.module.scss';
import _ from 'lodash';

const breakpoints = createBreakpoints({});
const { fontLarge, fontMedium, fontSmall } = customTheme;
const { mobileBreakpoint, tabletBreakpoint, desktopBreakpoint } = _.mapValues(
  customTheme,
  (v) => v.replaceAll(/\D/g, '')
);

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: '50px',
          [breakpoints.up(desktopBreakpoint)]: {
            fontSize: fontLarge,
          },
          [breakpoints.between(tabletBreakpoint, desktopBreakpoint)]: {
            fontSize: fontMedium,
          },
          [breakpoints.down(tabletBreakpoint)]: {
            fontSize: fontSmall,
            padding: 0,
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          [breakpoints.up(desktopBreakpoint)]: {
            width: '80px',
            height: '80px',
          },
          [breakpoints.between(tabletBreakpoint, desktopBreakpoint)]: {
            width: '50px',
            height: '50px',
          },
          [breakpoints.down(tabletBreakpoint)]: {
            width: '35px',
            height: '35px',
          },
        },
      },
    },
  },
});
