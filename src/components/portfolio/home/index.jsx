import React from 'react';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';

function Home() {
  const { GnbStore } = useStore();

  const src = GnbStore.isKorean ? '/images/home.png' : '/images/home_en.png';

  return (
    <div className="home">
      <img alt="home" src={src} style={{ width: '100%' }} />
    </div>
  );
}

export default observer(Home);
