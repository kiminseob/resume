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
              트리 구조에서 다수의 체크박스 상태를 관리할 수 있는
              라이브러리입니다.
            </SC.Description>
          </SC.Row>
          <SC.Row>
            <SC.MarkerList>
              라이브러리 개발 목적
              <SC.DotList>
                복잡한 권한 구조에서 다중 선택 및 계층적 데이터 처리를
                효율적으로 관리하기 위함.
              </SC.DotList>
            </SC.MarkerList>
          </SC.Row>
          <SC.Row>
            <SC.MarkerList>
              기능
              <SC.DotList>
                체크박스를 통해 계층적 데이터의 읽기(R), 쓰기(W), 실행(X) 권한을
                시각적이고 직관적으로 관리할 수 있도록 구현
              </SC.DotList>
              <SC.DotList>
                부모-자식 관계에서 상위 항목 선택 시 하위 항목이 자동
                선택/해제되는 로직 구현
              </SC.DotList>
            </SC.MarkerList>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Others2;
