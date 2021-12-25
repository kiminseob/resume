import React from 'react';
import { Avatar } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tab from '@mui/material/Tab';
import { useStore } from 'utils';

function LinkTab(props) {
  const { href } = props;

  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        window.open(href, '_blank');
      }}
      {...props}
    />
  );
}

function Profile(props) {
  const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu } = props;
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;
  const { profile } = GnbStore.message;

  return (
    <Box>
      <Tooltip title="Inseop Kim">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Inseop Kim" src="images/profile.jpeg" />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{
          '& .MuiList-root': {
            color: theme.navTxtColor,
            backgroundColor: theme.navBackgroundColor,
          },
          '& a': {
            textTransform: 'none',
          },
        }}
        keepMounted
      >
        {profile.map(({ title, path }) => (
          <MenuItem key={title} onClick={handleCloseUserMenu}>
            <LinkTab label={title} href={path} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default Profile;
