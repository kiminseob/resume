import { Divider } from '@mui/material';
import React from 'react';
import { useStore } from 'utils';

function About() {
  const { NavStore } = useStore();

  const handleClick = () => NavStore.updateNavTabValue(3);

  return (
    <div className="about">
      <h3>안녕하세요</h3>
      <p>신입 프론트엔드 개발자 김인섭 입니다.</p>
      <p>
        Javascript 언어와 UI 꾸미는 것을 좋아하여 react를 활용한 개발을 하고
        있습니다.
      </p>
      <p>평상시에는 만들고 싶은 아이디어를 개발하는 일을 즐겨 합니다.</p>
      <p>현재는 티맥스소프트에서 Superframe 어드민의 UI를 개발하고 있습니다.</p>
      <Divider />
      <h3>기술 스택</h3>
      <p>- React, MobX, SCSS, Material-UI</p>
      <h3> 경력 </h3>
      <p> 티맥스소프트 / 미들웨어 본부/ 2021.08.01 ~ (재직중)</p>
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

      <a href="/others" onClick={handleClick}>
        기타 이력
      </a>
    </div>
  );
}

export default About;
