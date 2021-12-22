import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from 'utils';
import ContentsCard from './ContentsCard';

function ContentsList() {
  const { GnbStore } = useStore();

  return (
    <ul>
      {GnbStore.message.project.map((_project) => (
        <li key={_project.id}>
          <ContentsCard project={_project} />
        </li>
      ))}
    </ul>
  );
}

export default observer(ContentsList);
