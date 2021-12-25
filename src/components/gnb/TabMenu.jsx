import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';
import { useStore } from 'utils';

function LinkTab(props) {
  const navigate = useNavigate();
  const { href } = props;

  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
      {...props}
    />
  );
}

function TabMenu(props) {
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = props;
  const { GnbStore } = useStore();
  const { nav } = GnbStore.message;
  const theme = GnbStore.themeColor;

  const handleClose = () => {
    handleCloseNavMenu();
  };

  return (
    <Box sx={{ display: { mobile: 'fixed', tablet: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        sx={{ color: theme.navTxtColor }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        keepMounted
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: {
            mobile: 'block',
            tablet: 'none',
          },
          '& .MuiList-root': {
            color: theme.navTxtColor,
            backgroundColor: theme.navBackgroundColor,
          },
          '& a': {
            textTransform: 'none',
          },
        }}
      >
        {nav.map(({ title, path }) => (
          <MenuItem key={title} onClick={handleClose}>
            <LinkTab label={title} href={path} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default TabMenu;
