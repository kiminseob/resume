import React from 'react';
import ContentsCard from './ContentsCard';

function ContentsList() {
  return (
    <ul>
      <li>
        <ContentsCard />
      </li>
      <li>
        <ContentsCard />
      </li>
      <li>
        <ContentsCard />
      </li>
    </ul>
  );
}

export default ContentsList;
