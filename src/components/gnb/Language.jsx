import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useStore } from 'utils';
import customTheme from 'scss/variable.module.scss';

function Language() {
  const { NavStore } = useStore();
  const [value, setValue] = useState('한국어');

  const handleChange = (e, v) => {
    NavStore.setLanguage(v);
    setValue(v);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={value}
      size="small"
      exclusive
      onChange={handleChange}
      sx={{
        '&': {
          paddingTop: '0.188rem',
          justifyContent: 'flex-end',
          '.MuiButtonBase-root': {
            padding: '0',
            margin: '0 0.4rem',
            border: 0,
            lineHeight: '0.8125rem',
            '&.Mui-selected': {
              backgroundColor: 'rgba(0,0,0,0)',
              color: customTheme.navTxtSelectedColor,
              borderRadius: 0,
              borderBottom: `solid ${customTheme.navTxtSelectedColor} 1px`,
            },
          },
        },
      }}
    >
      <ToggleButton value="한국어">한국어</ToggleButton>
      <ToggleButton value="English">English</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Language;
