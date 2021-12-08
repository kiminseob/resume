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
    <div className="profile">
      <Avatar alt="inseop" src="/images/profile.jpeg" onClick={handleClick} />
    </div>
  );
}

export default Profile;
