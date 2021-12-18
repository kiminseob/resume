import React from 'react';
import { nav } from 'messages';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';
import customTheme from 'scss/variable.module.scss';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';
import Profile from './Profile';

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
  const { navTabValue } = NavStore;
  const { home, project, about, others } = nav;

  const handleChange = (event, newValue) => {
    NavStore.updateNavTabValue(newValue);
  };

  return (
    <nav>
      <Profile handleChange={handleChange} />
      <Tabs
        value={navTabValue}
        onChange={handleChange}
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
    </nav>
  );
}

export default observer(Nav);
