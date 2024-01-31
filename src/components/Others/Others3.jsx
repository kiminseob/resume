import React from 'react';
import SC from '../styled/common';

function Others3() {
  return (
    <section>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Wrapper>
            <SC.Company>communication</SC.Company>
          </SC.Wrapper>
          <SC.Wrapper>
            <SC.Row>
              <SC.DotList>적극적인 의사소통을 위해 노력합니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                일적인 것 이외의 사담도 조금은 필요하다고 생각합니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>인간 관계에 유연합니다.</SC.DotList>
            </SC.Row>
          </SC.Wrapper>
        </SC.Column>
      </SC.Row>
      <SC.Row>
        <SC.Column>
          <SC.Wrapper>
            <SC.Company>JavaScript</SC.Company>
          </SC.Wrapper>
          <SC.Wrapper>
            <SC.Row>
              <SC.DotList>기본적으로 JS, TS의 사용에 자신 있습니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>최신 ES 문법을 잘 알고 있습니다.</SC.DotList>
            </SC.Row>
          </SC.Wrapper>
        </SC.Column>
      </SC.Row>
      <SC.Row>
        <SC.Column>
          <SC.Wrapper>
            <SC.Company>React</SC.Company>
          </SC.Wrapper>
          <SC.Wrapper>
            <SC.Row>
              <SC.DotList>
                컴포넌트 분리, 공통 로직 모듈화에 신경 씁니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>상태는 꼭 필요할 경우에만 사용합니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>렌더링 과정을 이해하고 있습니다.</SC.DotList>
            </SC.Row>
          </SC.Wrapper>
        </SC.Column>
      </SC.Row>
      <SC.Divider />
      <SC.Column>
        <SC.Wrapper>
          <SC.Company>자격증 및 기타</SC.Company>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList>정보처리기사, 18201130632D (2018.05.25)</SC.DotList>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList>
            <a href="http://jkiice.org/ebook/21-2/index.html" target="_blank">
              음성 인터페이스를 활용한 AI 대화형 항공권 검색 시스템 개발 원고
              작성(15-29p)
            </a>
          </SC.DotList>
        </SC.Wrapper>
      </SC.Column>
    </section>
  );
}

export default Others3;
