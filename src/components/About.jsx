import React from 'react';
import styled from 'styled-components';
import SC from 'components/styled/common';

const S = {};

S.Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

S.MyInfo = styled.div`
  font-size: 0.8rem;
`;

S.Aside = styled.aside`
  white-space: pre-line;
  margin: 1.8rem 0;
`;

function About() {
  return (
    <>
      <S.Header>
        <SC.H1>김인섭</SC.H1>
        <S.MyInfo>
          <div>
            <strong>Github: </strong>
            <a
              href="https://github.com/kiminseob"
              target="_blank"
              rel="noreferer"
            >
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
        안녕하세요. 1년차 웹 프론트엔드 개발자 김인섭입니다. {'\n'}
        일상에 가치를 제공하는 서비스를 만드는 것에 큰 보람을 느낍니다. {'\n'}
        팀원들과 의견을 나누고, 공유하며 같이 성장하는 것을 지향합니다. {'\n'}
        오늘도 어제처럼 노력합니다.
      </S.Aside>
      <SC.Divider />
    </>
  );
}

export default About;
