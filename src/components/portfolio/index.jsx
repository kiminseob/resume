import React from 'react';
import { Nav, Language, DarkMode } from 'components';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';
import Main from './Main';

function Portfolio() {
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;
  const Topstyle = {
    backgroundColor: theme.portfolioBackgroundColor,
    color: theme.portfolioTxtColor,
    flexDirection: 'column',
  };

  return (
    <div className="portfolio" style={Topstyle}>
      <Nav left />
      <Main />
      <Language />
      <DarkMode />
    </div>
  );
}

export default observer(Portfolio);
