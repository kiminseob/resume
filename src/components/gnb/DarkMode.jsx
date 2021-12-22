import React from 'react';
import Switch from '@mui/material/Switch';
import { observer } from 'mobx-react';
import { useStore } from 'utils';

function DarkMode() {
  const { GnbStore } = useStore();

  const handleChange = () => GnbStore.toggleDarkMode();

  return <Switch onChange={handleChange} />;
}

export default observer(DarkMode);
