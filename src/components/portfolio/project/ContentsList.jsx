import React from 'react';
import { project } from 'messages';
import ContentsCard from './ContentsCard';

function ContentsList() {
  return (
    <ul>
      {project.map((_project) => (
        <li>
          <ContentsCard project={_project} />
        </li>
      ))}
    </ul>
  );
}

export default ContentsList;
