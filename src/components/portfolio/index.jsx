import React from 'react';
import { Nav } from 'components';
import { observer } from 'mobx-react';
import Main from './Main';

function Portfolio() {
  return (
    <div className="portfolio">
      <Nav />
      <Main />
    </div>
  );
}

export default observer(Portfolio);
