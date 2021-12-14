import { Divider } from '@mui/material';
import React from 'react';

function About() {
  return (
    <div className="about">
      <h3>안녕하세요</h3>
      <p>프론트엔드 개발자 김인섭 입니다.</p>
      <p>현재 티맥스소프트에서 Superframe 어드민의 UI를 개발하고 있습니다.</p>
      <Divider />
      <h3>기술 스택</h3>
      <p>- React, MobX, SCSS, Material-UI</p>
      <h3> 경력 </h3>
      <p>- 2021.08.01. 티맥스소프트 ~ 현재</p>
      <h3>수상 이력</h3>
      <ul>
        <li>
          - 2017.11. LG 스마트씽큐 블루투스 센서를 활용한 앱/서비스 개발 공모전
          장려상
          <a href="https://canyon-honey-f8b.notion.site/Closet-Manager-2017-11-2017-12-f9d3f493fd1f41c694819878fc2818e7">
            link
          </a>
        </li>
        <li>
          - 2018.12. NUGU Play 개발 공모전 1회 최우수상
          <a href="https://canyon-honey-f8b.notion.site/NUGU-AIR-2018-11-2020-05-bfaf89c465494bf390aa5afde6b97e91">
            link
          </a>
        </li>
        <li>
          - 2019.05. NUGU Play 개발 공모전 2회 우수상
          <a href="https://canyon-honey-f8b.notion.site/LAST-BREAD-2019-02-2019-04-7d1d824f6b6a4b2da4fadb463dffc12b">
            link
          </a>
        </li>
        <li>
          - 2019.09 NUGU Play 개발 공모전 3회 우수상
          <a href="https://canyon-honey-f8b.notion.site/2019-07-2019-09-4151512d23ba4d789c82de99c05b036a">
            link
          </a>
        </li>
        <li>
          - 2019.11 빅스비 캡슐 챌린지 공모전 2회 입상
          <a href="https://canyon-honey-f8b.notion.site/2019-09-2019-10-11c60248222a4ae2b1d4af8dab73f9e3">
            link
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
