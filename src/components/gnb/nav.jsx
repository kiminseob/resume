import React, { useState } from 'react';
import { nav } from 'messages';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router';

const tabsStyle = (theme) => ({
  '.MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
  },
});

const tabStyle = (theme) => ({
  textTransform: 'none',
  '&.Mui-selected': {
    color: '#B1B1B1',
  },
  // [theme.breakpoints.down(d.fontSmall)]: {
  //   fontSize: '1px',
  // },
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
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { background: '#B1B1B1' } }}
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
