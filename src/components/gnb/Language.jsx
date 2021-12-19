import React from 'react';
import { useStore } from 'utils';

function Language() {
  const { NavStore } = useStore();

  const handleClick = (e) => {
    NavStore.setLanguage(e.target.value);
  };

  return (
    <div className="language">
      <input type="button" value="한국어" onClick={handleClick} />
      <input type="button" value="English" onClick={handleClick} />
    </div>
  );
}

export default Language;
