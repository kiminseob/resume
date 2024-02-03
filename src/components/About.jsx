import React from 'react';
import S from 'components/styled/common';

function About() {
  return (
    <>
      <S.Header>
        <S.H1>
          안녕하세요. <br />
          성장하는 개발자 김인섭 입니다.
        </S.H1>
        <S.MyInfo>
          <S.Wrapper>
            <S.Stack>이력서 업데이트. 24.02.03 </S.Stack>
          </S.Wrapper>
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
        </S.MyInfo>
      </S.Header>
      <S.Aside>
        4년차 웹 프론트엔드 개발자 김인섭입니다. {'\n'}
        일상에 가치를 제공하는 서비스를 만드는 것에 큰 보람을 느낍니다. {'\n'}
        팀원들과 의견을 나누고 공유하며 같이 성장하는 것을 지향합니다. {'\n'}
      </S.Aside>
      <S.Divider />
      <S.Column>
        <S.Bold>총 경력 (3년 4개월)</S.Bold>
        <S.Description>
          티맥스소프트 / 프론트엔드 개발자 (2021.08.01 ~ 재직중) - 2년 6개월
        </S.Description>
        <S.Description>
          리보이스 / 백엔드 개발자 (2019.09 ~ 2020.06) - 10개월
        </S.Description>
      </S.Column>
      <S.Wrapper />
      <S.Column>
        <S.Bold>주요 기술</S.Bold>
        <S.Wrapper>
          <S.Row>
            <S.Row style={{ alignItems: 'center' }}>
              <S.Description>언어 : Typescript, HTML, CSS</S.Description>
            </S.Row>
          </S.Row>
        </S.Wrapper>
        <S.Wrapper>
          <S.Row>
            <S.Row style={{ alignItems: 'center' }}>
              <S.Description>
                라이브러리 : React.js, Mobx, Recoil, React Query, Styled,
                Material
              </S.Description>
            </S.Row>
          </S.Row>
        </S.Wrapper>
        <S.Row>
          <S.Row style={{ alignItems: 'center' }}>
            <S.Description>프레임워크 : Next.js</S.Description>
          </S.Row>
        </S.Row>
      </S.Column>
      <S.Divider />
    </>
  );
}

export default About;
