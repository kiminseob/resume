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
              <SC.DotList>건강한 소통을 위해 노력합니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>상대에게 맞출 수 있습니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>솔직하지만 부드럽게 의견을 표출합니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                동료와 친밀한 관계를 형성하고 공감하기 위해 노력합니다.
              </SC.DotList>
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
              <SC.DotList>
                기본적인 Javascript 및 Typescript 사용에 자신 있습니다.
              </SC.DotList>
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
              <SC.DotList>
                useState, useCallback, useMemo는 꼭 필요한 경우에만 사용합니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>렌더링 과정을 이해하고 있습니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>CSR, SSR의 차이를 잘 알고 있습니다.</SC.DotList>
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
        <SC.Wrapper>
          <SC.DotList>
            <a href="https://youtu.be/BJPQihWuj9E">SKT NUGU 개발 인터뷰</a>
          </SC.DotList>
        </SC.Wrapper>
      </SC.Column>
    </section>
  );
}

export default Others3;
