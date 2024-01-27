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
            <SC.RowHeader>AI 음성 스피커 서비스 개발</SC.RowHeader>
            <SC.Row>
              <a href="https://github.com/kiminseob/nuguAir" target="_blank">
                <SC.Icon src="icon/github.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/NUGU-AIR-2018-11-2020-05-bfaf89c465494bf390aa5afde6b97e91"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/LAST-BREAD-2019-02-2019-04-9db2593ec77b4b0a8b27576f0365f75b"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/2019-07-2019-09-5bb063ad7f1a4eda81301065ade2bed7"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>Node.js, Express, Redis, MySQL</SC.Stack>
          </SC.Row>
          <SC.Row>
            <SC.Description>
              SKT의 AI 스피커 NUGU의 음성 서비스를 개발했습니다. <br />
              '항공권 음성 검색' 최우수상, '멀티 배팅 게임' 우수상, '셀보이스'
              우수상을 각각 수상했습니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Wrapper />
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.FullRow>
            <SC.RowHeader>빅스비 캡슐 챌린지</SC.RowHeader>
            <SC.Row>
              <a
                href="https://github.com/revoiceStudio/private_bixby"
                target="_blank"
              >
                <SC.Icon src="icon/github.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/2019-09-2019-10-57a930f39b704cd1bfcfa6647451130d"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>Node.js, MySQL, bixby</SC.Stack>
          </SC.Row>
          <SC.Row>
            <SC.Description>
              삼성의 음성 AI 빅스비 캡슐 '마이 셀러'를 개발했습니다. 마이 셀러는
              온라인 판매자들을 위한 상품 및 배송 관리 음성 서비스 입니다.
              입상을 수상했습니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Wrapper />
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.FullRow>
            <SC.RowHeader>
              LG 스마트 블루투스 센서를 활용한 앱 개발
            </SC.RowHeader>
            <SC.Row>
              <a
                href="https://github.com/kiminseob/LG-smart-ThinkQ"
                target="_blank"
              >
                <SC.Icon src="icon/github.png" />
              </a>
              <a
                href="https://canyon-honey-f8b.notion.site/Closet-Manager-2017-11-2017-12-f9d3f493fd1f41c694819878fc2818e7"
                target="_blank"
              >
                <SC.Icon src="icon/notion.png" />
              </a>
            </SC.Row>
          </SC.FullRow>
          <SC.Row>
            <SC.Stack>Java Android</SC.Stack>
          </SC.Row>
          <SC.Row>
            <SC.Description>
              LG 블루투스 센서를 활용해 온습도 관리 안드로이드 어플을 개발하여
              장려상을 수상했습니다.
            </SC.Description>
          </SC.Row>
        </SC.Column>
      </SC.Row>
      <SC.Wrapper />
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

export default Others;
