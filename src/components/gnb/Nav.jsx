import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { observer } from 'mobx-react-lite';
import { useStore } from 'utils';
import Profile from './Profile';
import IconMenu from './IconMenu';
import TabMenu from './TabMenu';

const Nav = (props) => {
  const { left } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { GnbStore } = useStore();
  const theme = GnbStore.themeColor;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const leftAppBarStyle = {
    '&': { width: '5rem', padding: '0.5rem 0' },
    '& .MuiContainer-root': { height: '100%', padding: 0 },
    '& .MuiToolbar-root': {
      flexDirection: 'column',
      height: '100%',
      padding: 0,
    },
  };

  const topAppBarStyle = {
    width: '100%',
    padding: '0.2rem 0',
  };
  const appBarStyle = left ? leftAppBarStyle : topAppBarStyle;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.navBackgroundColor,
        ...appBarStyle,
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Profile
            anchorElUser={anchorElUser}
            handleOpenUserMenu={handleOpenUserMenu}
            handleCloseUserMenu={handleCloseUserMenu}
          />
          <IconMenu />
          <TabMenu
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default observer(Nav);
