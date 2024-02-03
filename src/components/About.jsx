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
        <SC.Bold>총 경력 (3년 4개월)</SC.Bold>
        <SC.Description>
          티맥스소프트 / 프론트엔드 개발자 (2021.08.01 ~ 재직중) - 2년 6개월
        </SC.Description>
        <SC.Description>
          리보이스 / 백엔드 개발자 (2019.09 ~ 2020.06) - 10개월
        </SC.Description>
      </SC.Column>
      <SC.Wrapper />
      <SC.Column>
        <SC.Bold>기술 스택</SC.Bold>
        <SC.Wrapper>
          <SC.Row>
            <SC.Row style={{ alignItems: 'center' }}>
              언어 : Typescript, HTML, CSS
            </SC.Row>
          </SC.Row>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.Row>
            <SC.Row style={{ alignItems: 'center' }}>
              라이브러리 : React.js, Mobx, Recoil, React Query, Styled, Material
            </SC.Row>
          </SC.Row>
        </SC.Wrapper>
        <SC.Row>
          <SC.Row style={{ alignItems: 'center' }}>프레임워크 : Next.js</SC.Row>
        </SC.Row>
      </SC.Column>

      <SC.Divider />
    </>
  );
}

export default About;
