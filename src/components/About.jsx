import React from 'react';
import SC from 'components/styled/common';

function About() {
  return (
    <>
      <SC.Header>
        <SC.H1>
          안녕하세요. <br />웹 프론트엔드 개발자
          <br /> 김인섭입니다.
        </SC.H1>
        <SC.MyInfo>
          <div>
            <SC.Stack>업데이트. 25.01.14</SC.Stack>
          </div>
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
        일상에 가치를 제공하는 서비스를 만드는 것에 큰 보람을 느낍니다.
      </SC.Aside>
      <SC.Divider />
    </>
  );
}

export default About;
