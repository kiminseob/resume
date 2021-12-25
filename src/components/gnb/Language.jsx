import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';

const style = (theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3rem',
  height: '3rem',
  position: 'fixed',
  bottom: '5rem',
  right: '1rem',
  borderRadius: '2rem',
  cursor: 'pointer',
  backgroundColor: theme.darkmodeBackgroundColor,
  '& .MuiButton-root': {
    minWidth: 0,
    padding: 0,
    color: theme.darkmodeColor,
  },
});

function Language() {
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;

  const handleChange = () => {
    GnbStore.toggleLanguage();
  };

  const currentLanguage = GnbStore.isKorean ? 'A' : '가';

  return (
    <Paper elevation={3} sx={style(theme)} onClick={handleChange}>
      <Button disableRipple>{currentLanguage}</Button>
    </Paper>
  );
}

export default observer(Language);
