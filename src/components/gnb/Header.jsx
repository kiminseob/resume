import React from 'react';
import { useStore } from 'utils';

function Header() {
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;
  const style = {
    backgroundColor: theme.headerBackgroundColor,
  };
  return <header style={style} />;
}

export default Header;
