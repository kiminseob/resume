import React from 'react';
import { nav } from 'messages';

function Nav() {
  const { home, about, others } = nav;

  return (
    <>
      <nav>
        <ul>
          <li>{home}</li>
          <li>{about}</li>
          <li>{others}</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
