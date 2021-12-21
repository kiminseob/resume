import { Divider } from '@mui/material';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from 'utils';

function About() {
  const { NavStore } = useStore();
  const { introduce, tech, career } = NavStore.message.about;

  return (
    <div className="about">
      <p>{introduce}</p>
      <Divider />
      <h3>{tech.title}</h3>
      <p>- {tech.contents}</p>
      <h3>{career.title}</h3>
      <p>{career.contents}</p>
      <p>- Superframe 어드민 페이지 개발</p>
      <h3> 경력 프로젝트</h3>
      <p>프로젝트명</p>
      <p>Superframe</p>
      <p>프로젝트 기간</p>
      <p>- 2021.10.01 ~ ing</p>
      <p>개발 언어 및 라이브러리</p>
      <p>- Javascript, React, MobX, SCSS, Material-UI</p>
      <p>상세 업무</p>
      <p> - jeus 관련 페이지 - 공통 영역</p>
      <a href="/others">기타 이력</a>
    </div>
  );
}

export default observer(About);
