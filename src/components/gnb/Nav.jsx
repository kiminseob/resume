import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from 'utils';
import Profile from './Profile';
import TabMenu from './TabMenu';

const routes = [
  { name: '/', value: 0 },
  { name: '/home', value: 0 },
  { name: '/project', value: 1 },
  { name: '/about', value: 2 },
  { name: '/others', value: 3 },
];

const tabsStyle = (theme) => ({
  width: '100%',
  '.MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
  },
  '& .MuiButtonBase-root': {
    textTransform: 'none',
    color: theme.navTxtColor,
    '&.Mui-selected': {
      color: theme.navTxtSelectedColor,
    },
  },
});

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

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { GnbStore } = useStore();
  const { pathname } = useLocation();
  const { value } = routes.filter(({ name }) => pathname === name)[0];
  const { nav } = GnbStore.message;
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
          <Box
            sx={{ flexGrow: 1, display: { mobile: 'none', tablet: 'flex' } }}
          >
            <Tabs
              value={value}
              TabIndicatorProps={{
                sx: { background: theme.navTxtSelectedColor },
              }}
              sx={tabsStyle(theme)}
            >
              {nav.map(({ title, path }) => (
                <LinkTab key={title} label={title} href={path} />
              ))}
            </Tabs>
          </Box>
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
export default observer(ResponsiveAppBar);
