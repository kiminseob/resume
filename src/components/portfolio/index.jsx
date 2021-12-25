import React from 'react';
import { Nav, Header, Language, DarkMode } from 'components';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';
import Main from './Main';

function Portfolio() {
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;
  const style = {
    backgroundColor: theme.portfolioBackgroundColor,
    color: theme.portfolioTxtColor,
  };

  return (
    <div className="portfolio" style={style}>
      <Header />
      <Nav />
      <Main />
      <Language />
      <DarkMode />
    </div>
  );
}

export default observer(Portfolio);
