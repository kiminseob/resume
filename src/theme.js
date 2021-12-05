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
          [breakpoints.up(desktopBreakpoint)]: {
            fontSize: fontLarge,
          },
          [breakpoints.between(tabletBreakpoint, desktopBreakpoint - 1)]: {
            fontSize: fontMedium,
          },
          [breakpoints.between(mobileBreakpoint, tabletBreakpoint - 1)]: {
            fontSize: fontSmall,
          },
        },
      },
    },
  },
});
