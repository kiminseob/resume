import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import customTheme from 'scss/variable.module.scss';
import { observer } from 'mobx-react-lite';
import { useStore } from 'utils';
import Profile from './Profile';
import Language from './Language';

const routes = [
  { name: '/', value: 0 },
  { name: '/home', value: 0 },
  { name: '/project', value: 1 },
  { name: '/about', value: 2 },
  { name: '/others', value: 3 },
];

const tabsStyle = () => ({
  width: '100%',
  '.MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
  },
});

const tabStyle = () => ({
  textTransform: 'none',
  color: customTheme.navTxtColor,
  '&.Mui-selected': {
    color: customTheme.navTxtSelectedColor,
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
      sx={tabStyle}
      {...props}
    />
  );
}

function Nav() {
  const { NavStore } = useStore();
  const { pathname } = useLocation();
  const { value } = routes.filter(({ name }) => pathname === name)[0];
  const { home, project, about, others } = NavStore.message.nav;

  return (
    <nav>
      <Language />
      <div>
        <Profile />
        <Tabs
          value={value}
          TabIndicatorProps={{
            sx: { background: customTheme.navTxtSelectedColor },
          }}
          sx={tabsStyle}
        >
          <LinkTab label={home} href="/home" />
          <LinkTab label={project} href="/project" />
          <LinkTab label={about} href="/about" />
          <LinkTab label={others} href="/others" />
        </Tabs>
      </div>
    </nav>
  );
}

export default observer(Nav);
