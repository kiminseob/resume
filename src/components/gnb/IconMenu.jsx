import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreIcon from '@mui/icons-material/More';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useStore } from 'utils';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';

const icon = {
  home: <HomeIcon />,
  project: <LaptopMacIcon />,
  about: <AccountBoxIcon />,
  others: <MoreIcon />,
};

const bottomNavStyle = (theme) => ({
  height: '100%',
  aliginItems: 'center',
  flexDirection: 'column',
  backgroundColor: theme.navBackgroundColor,
  '.MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
  },
  '& .MuiButtonBase-root': {
    padding: 0,
    textTransform: 'none',
    color: theme.navTxtColor,
    '&.Mui-selected': {
      color: theme.navTxtSelectedColor,
    },
  },
});

// const bottomNavStyle = (theme) => ({
//   width: '100%',
//   backgroundColor: theme.navBackgroundColor,
//   '.MuiTabs-flexContainer': {
//     justifyContent: 'space-evenly',
//   },
//   '& .MuiButtonBase-root': {
//     textTransform: 'none',
//     color: theme.navTxtColor,
//     '&.Mui-selected': {
//       color: theme.navTxtSelectedColor,
//     },
//   },
// });

function IconMenu() {
  const { pathname } = useLocation();
  const { GnbStore } = useStore();
  const navigate = useNavigate();
  const theme = GnbStore.themeColor;
  const { nav } = GnbStore.message;

  const [value, setValue] = useState(
    nav.filter(({ path }) => pathname.includes(path))[0]?.path ?? 'home'
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box
      sx={{ height: 'inherit', display: { mobile: 'none', tablet: 'flex' } }}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={bottomNavStyle(theme)}
      >
        {nav.map(({ title, path }) => (
          <BottomNavigationAction
            label={title}
            value={path}
            icon={icon[path]}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}

export default observer(IconMenu);
