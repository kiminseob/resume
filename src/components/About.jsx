import React from 'react';
import SC from 'components/styled/common';

function About() {
  return (
    <>
      <SC.Header>
        <SC.H1>
          안녕하세요. <br />
          성장하는 개발자 김인섭 입니다.
        </SC.H1>
        <SC.MyInfo>
          <div>
            <strong>Github: </strong>
            <a href="https://github.com/kiminseob" target="_blank">
              kiminseob
            </a>
          </div>
          <div>
            <strong>Email: </strong>
            <a href="mailto:kis6473@naver.com">kis6473@naver.com</a>
          </div>
        </SC.MyInfo>
      </SC.Header>
      <SC.Aside>
        4년차 웹 프론트엔드 개발자 김인섭입니다. {'\n'}
        일상에 가치를 제공하는 서비스를 만드는 것에 큰 보람을 느낍니다. {'\n'}
        팀원들과 의견을 나누고 공유하며 같이 성장하는 것을 지향합니다. {'\n'}
      </SC.Aside>
      <SC.Divider />
      <SC.Column>
        <SC.Bold>총 경력</SC.Bold>
        <SC.Stack>
          티맥스소프트 / 프론트엔드 개발자 (2021.08.01 ~ 재직중) - 약 2년 6개월
        </SC.Stack>
      </SC.Column>

      <SC.Column>
        <SC.Bold>기술 스택</SC.Bold>
        <SC.Wrapper>
          <SC.Row>
            <SC.Row style={{ alignItems: 'center' }}>개발 언어</SC.Row>
            <SC.Stack>
              <SC.MarkerList>Typescript, ES6, HTML, CSS</SC.MarkerList>
            </SC.Stack>
          </SC.Row>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.Row>
            <SC.Row style={{ alignItems: 'center' }}>라이브러리</SC.Row>
            <SC.Stack>
              <SC.MarkerList>
                React.js, Mobx, Recoil, React Query, Styled, Material
              </SC.MarkerList>
            </SC.Stack>
          </SC.Row>
        </SC.Wrapper>
        <SC.Row>
          <SC.Row style={{ alignItems: 'center' }}>프레임워크</SC.Row>
          <SC.Stack>
            <SC.MarkerList>Next.js</SC.MarkerList>
          </SC.Stack>
        </SC.Row>
      </SC.Column>

      <SC.Divider />
    </>
  );
}

export default About;
