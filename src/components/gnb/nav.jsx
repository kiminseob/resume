import React, { useState } from 'react';
import { nav } from 'messages';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';
import customTheme from 'scss/variable.module.scss';
import Profile from './Profile';

const tabsStyle = () => ({
  width: '100%',
  '.MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
  },
});

const tabStyle = () => ({
  textTransform: 'none',
  '&.Mui-selected': {
    color: customTheme.navTxtColor,
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
  const [value, setValue] = useState(0);
  const { home, project, about, others } = nav;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav>
      <div className="profile">
        <Profile />
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { background: customTheme.navTxtColor } }}
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

export default Nav;
