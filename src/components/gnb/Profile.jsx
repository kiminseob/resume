import React from 'react';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router';

function Profile(props) {
  const { setValue } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    setValue(0);
    navigate('/home');
  };

  return (
    <Avatar alt="inseop" src="/images/profile.jpeg" onClick={handleClick} />
  );
}

export default Profile;
