import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStore } from 'utils';
import Profile from './Profile';

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
      // sx={tabStyle}
      {...props}
    />
  );
}

function Nav() {
  const { GnbStore } = useStore();
  const { pathname } = useLocation();
  const { value } = routes.filter(({ name }) => pathname === name)[0];
  const { home, project, about, others } = GnbStore.message.nav;
  const theme = GnbStore.themeColor;

  return (
    <nav style={{ backgroundColor: theme.navBackgroundColor }}>
      <Profile />
      <Tabs
        value={value}
        TabIndicatorProps={{
          sx: { background: theme.navTxtSelectedColor },
        }}
        sx={tabsStyle(theme)}
      >
        <LinkTab label={home} href="/home" />
        <LinkTab label={project} href="/project" />
        <LinkTab label={about} href="/about" />
        <LinkTab label={others} href="/others" />
      </Tabs>
    </nav>
  );
}

export default observer(Nav);
