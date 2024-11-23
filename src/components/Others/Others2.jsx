import React from 'react';
import SC from '../styled/common';

function Others2() {
  return (
    <section>
      <SC.Row>
        <SC.Column>
          <SC.Company>라이브러리</SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.RowDivider />
          <SC.FullRow>
            <SC.RowHeader>nugu-kit</SC.RowHeader>
            <SC.Row>
              <a href="https://www.npmjs.com/package/nugu-kit" target="_blank">
                <SC.Icon src="icon/npm.svg" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>Node.js, Express</SC.Stack>
          </SC.Row>
          <SC.Row>
            <SC.Description>
              AI 스피커 NUGU의 백엔드 서비스를 위한 라이브러리입니다.
              <br />
              NUGU API 규격에 맞춰 HTTP 요청/응답 kit를 제공합니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column id="multi-check-tree">
          <SC.FullRow>
            <SC.RowHeader>react-multi-checkbox-tree</SC.RowHeader>
            <SC.Row>
              <a
                href="https://www.npmjs.com/package/react-multi-checkbox-tree"
                target="_blank"
              >
                <SC.Icon src="icon/npm.svg" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>React.js, typescript</SC.Stack>
          </SC.Row>
          <SC.Row>
            <SC.Description>
              트리의 각 요소가 여러 상태를 관리할 수 있습니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Others2;
