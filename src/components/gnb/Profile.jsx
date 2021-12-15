import React from 'react';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router';

function Profile(props) {
  const { setNavTabValue, LocalStore } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    setNavTabValue(0);
    LocalStore.setItem('navTabValue', 0);
    navigate('/home');
  };

  return (
    <div className="profile">
      <Avatar alt="inseop" src="/images/profile.jpeg" onClick={handleClick} />
    </div>
  );
}

export default Profile;
