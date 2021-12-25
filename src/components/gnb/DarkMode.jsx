import React from 'react';
import { useStore } from 'utils';
import {
  DarkModeOutlined as DarkModeIcon,
  WbSunnyOutlined as LightModeIcon,
} from '@mui/icons-material';
import Paper from '@mui/material/Paper';

const style = (theme) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3rem',
  height: '3rem',
  position: 'fixed',
  bottom: '1rem',
  right: '1.5rem',
  borderRadius: '2rem',
  cursor: 'pointer',
  backgroundColor: theme.darkmodeBackgroundColor,
  '& .MuiSvgIcon-root': {
    color: theme.darkmodeColor,
  },
});

function DarkMode() {
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;

  const handleChange = () => GnbStore.toggleDarkMode();

  const BrightnessIcon = GnbStore.isDarkMode ? (
    <LightModeIcon />
  ) : (
    <DarkModeIcon />
  );

  return (
    <Paper elevation={3} sx={style(theme)} onClick={handleChange}>
      {BrightnessIcon}
    </Paper>
  );
}

export default DarkMode;
