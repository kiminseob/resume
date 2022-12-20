import React from 'react';
import SC from 'components/styled/common';

function About() {
  return (
    <>
      <SC.Header>
        <SC.H1>김인섭</SC.H1>
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
        안녕하세요. 2년차 웹 프론트엔드 개발자 김인섭입니다. {'\n'}
        일상에 가치를 제공하는 서비스를 만드는 것에 큰 보람을 느낍니다. {'\n'}
        팀원들과 의견을 나누고, 공유하며 같이 성장하는 것을 지향합니다. {'\n'}
      </SC.Aside>
      <SC.Divider />
    </>
  );
}

export default About;
