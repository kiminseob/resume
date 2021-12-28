import React from 'react';
import { Nav, Language, DarkMode } from 'components';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import Main from './Main';

function Portfolio() {
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;
  const Topstyle = {
    backgroundColor: theme.portfolioBackgroundColor,
    color: theme.portfolioTxtColor,
    flexDirection: 'column',
  };
  const Leftstyle = {
    backgroundColor: theme.portfolioBackgroundColor,
    color: theme.portfolioTxtColor,
  };

  return (
    <>
      <Box sx={{ display: { mobile: 'flex', tablet: 'none' } }}>
        <div className="portfolio" style={Topstyle}>
          <Nav />
          <Main />
          <Language />
          <DarkMode />
        </div>
      </Box>
      <Box sx={{ display: { mobile: 'none', tablet: 'flex' } }}>
        <div className="portfolio" style={Leftstyle}>
          <Nav left />
          <Main />
          <Language />
          <DarkMode />
        </div>
      </Box>
    </>
  );
}

export default observer(Portfolio);
