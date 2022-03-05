import { Divider } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from 'utils';

const Contents = ({ contents }) =>
  Array.isArray(contents)
    ? contents.map((v) => <AboutItem key={v.subtitle} item={v} />)
    : contents;

function AboutItem({ item }) {
  const { title, subtitle, contents } = item;

  return (
    <>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      <div className="about-item">
        <Contents contents={contents} />
      </div>
    </>
  );
}

function About() {
  const { GnbStore } = useStore();
  const { introduce, tech, career, project } = GnbStore.message.about;

  return (
    <div className="about">
      <p>{introduce}</p>
      <Divider />
      <AboutItem item={tech} />
      <Divider />
      <AboutItem item={career} />

      <AboutItem item={project} />
      <Divider />
    </div>
  );
}

export default observer(About);
