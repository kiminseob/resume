import React from 'react';
import { useStore } from 'utils';
import { observer } from 'mobx-react-lite';

function Others() {
  const { GnbStore } = useStore();
  const { message, themeColor } = GnbStore;
  const { award } = message.others;

  return (
    <div className="others">
      <h3>{award.title}</h3>
      <ul>
        {award.list.map(({ name, link }) => (
          <li key={name}>
            <a href={link} style={{ color: themeColor.portfolioTxtColor }}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default observer(Others);
