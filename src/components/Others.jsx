import React from 'react';
import SC from './styled/common';

function Others() {
  return (
    <section>
      <SC.Subject>기타</SC.Subject>
      <SC.Row>
        <SC.Column>
          <SC.Company>수상</SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.FullRow>
            <SC.RowHeader>AI 음성 스피커 서비스 개발 공모전</SC.RowHeader>
            <SC.Row>
              <a href="https://github.com/kiminseob/skyti" target="_blank">
                <SC.Icon src="icon/github.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/NUGU-AIR-2018-11-2020-05-bfaf89c465494bf390aa5afde6b97e91"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>Node.js</SC.Stack>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.FullRow>
            <SC.RowHeader>빅스비 캡슐 챌린지 공모전</SC.RowHeader>
            <SC.Row>
              <a
                href="https://github.com/revoiceStudio/private_bixby"
                target="_blank"
              >
                <SC.Icon src="icon/github.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/2019-09-2019-10-11c60248222a4ae2b1d4af8dab73f9e3t"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>Node.js, bixby</SC.Stack>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Row>
        <SC.Column>
          <SC.Company>npm 모듈</SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.FullRow>
            <SC.RowHeader>nugu-kit</SC.RowHeader>
            <SC.Row>
              <a href="https://www.npmjs.com/package/nugu-kit" target="_blank">
                <SC.Icon src="icon/npm.svg" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>javascript</SC.Stack>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Others;
