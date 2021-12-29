import React from 'react';
import { useStore } from 'utils';

function Others() {
  const { GnbStore } = useStore();
  const { others } = GnbStore.message;
  const { award } = others;

  return (
    <>
      <h3>{award.title}</h3>
      <ul>
        {award.list.map(({ name, link }) => (
          <li>
            {name}
            <a href={link}>link</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Others;
