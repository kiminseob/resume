import React from 'react';
import SC from '../styled/common';

function Others3() {
  return (
    <section>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Wrapper>
            <SC.Company>Communication</SC.Company>
          </SC.Wrapper>
          <SC.Wrapper>
            <SC.Row>
              <SC.DotList>건강하고 적극적인 소통을 위해 노력합니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>솔직하지만 부드럽게 의견을 표현합니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                단 하나의 정답은 없다고 생각합니다. 나와 다른 의견도 적극
                수용합니다.
              </SC.DotList>
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
              <SC.DotList>최신 ES 문법에 관심을 가지고 찾아봅니다.</SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>JS 모듈화를 좋아합니다.</SC.DotList>
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
              <SC.DotList>
                서버 상태와 클라이언트 상태를 분리하여 적절하게 활용합니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                CRA가 아닌 webpack, babel 설정을 직접 구성해보며 모듈 번들링
                시스템을 이해하기 위해 노력합니다.
              </SC.DotList>
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
          <SC.DotList>2018.05.25. 정보처리기사, 18201130632D</SC.DotList>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList id="manuscript">
            2020.12. 음성 인터페이스를 활용한 AI 대화형 항공권 검색 시스템 개발{' '}
            <a href="http://jkiice.org/ebook/21-2/index.html" target="_blank">
              KIICE 원고 작성 (15-29p)
            </a>
            <SC.Wrapper>
              <SC.MarkerList>
                배운 것들을 기록하고 공유하는 것을 좋아합니다.
              </SC.MarkerList>
            </SC.Wrapper>
          </SC.DotList>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList>
            2021.{' '}
            <a href="https://youtu.be/BJPQihWuj9E" target="_blank">
              SKT NUGU 개발 인터뷰
            </a>
            <SC.Wrapper>
              <SC.MarkerList>도전을 좋아합니다.</SC.MarkerList>
              <SC.MarkerList>
                다양한 활동을 통해 세상을 여러 관점으로 바라보는 시야를
                길렀습니다.
              </SC.MarkerList>
            </SC.Wrapper>
          </SC.DotList>
        </SC.Wrapper>
      </SC.Column>
    </section>
  );
}

export default Others3;
