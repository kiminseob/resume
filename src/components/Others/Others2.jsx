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
              SKT AI 스피커 NUGU의 play를 만드는 과정에서 직접 정의한 파라미터와
              Backend proxy API Reference에서 제공하는 규격에 맞게 HTTP
              Request/Response의 JSON 파싱과 응답을 손쉽게 하도록 도와줍니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column>
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
              멀티 체크 박스 트리는 각 트리들이 필요로 하는 여러가지 상태를
              손쉽게 관리할 수 있도록 도와줍니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Others2;
