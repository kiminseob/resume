import React from 'react';
import SC from 'components/styled/common';

function Career3() {
  return (
    <section>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Company>리보이스</SC.Company>
          <SC.Description>Node 백엔드 개발자</SC.Description>
          <SC.Description>10개월</SC.Description>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.RowHeader>
              AI 스피커를 활용한 항공권 검색 서비스 개발
            </SC.RowHeader>
          </SC.Row>
          <SC.Wrapper>
            <SC.Stack>Node.js, Express, Redis</SC.Stack>
          </SC.Wrapper>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                  <SC.MarkerList>
                    AI 음성 스피커 NUGU를 활용한 실시간 항공권 검색 및 추천
                    서비스입니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    사용자의 자연어 음성 명령을 분석하여 항공권 검색
                    조건(출발지, 도착지, 날짜 등)을 추출하는 프로세스를
                    설계했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    대화형 인터페이스 설계를 통해 사용자의 추가 질문 및 조건
                    변경 요청을 유연하게 처리할 수 있는 검색 시스템
                    구축했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    항공권 API와 실시간 연동하여 검색 결과를 AI 스피커를 통해
                    즉시 전달하는 시스템을 개발했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>개발 기간</SC.Wrapper>
                  <SC.MarkerList>2020.01 ~ 2020.06 (6개월)</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.List>
                <SC.Wrapper>개발 배경</SC.Wrapper>
                <SC.MarkerList>
                  <SC.Description>
                    기존의 항공권 검색 서비스는 웹이나 앱 기반으로만 제공되어
                    사용자가 직접 입력하고 검색하는 방식에 의존했습니다. 이
                    과정에서 접근성과 사용자 경험이 제한되었으며 보다 직관적이고
                    편리한 대안이 필요했습니다. 이를 해결하기 위해 AI 스피커인
                    NUGU를 활용해 실시간 항공권 검색 및 추천 서비스를 개발하게
                    되었습니다.
                  </SC.Description>
                </SC.MarkerList>
              </SC.List>
              <SC.List>
                <SC.Wrapper>성과</SC.Wrapper>
                <SC.MarkerList>
                  롯데제이티비와 한진관광의 NUGU Play 앱 런칭을 성공적으로
                  마치며 AI 스피커 기반 여행 서비스의 기반을 마련했습니다.
                </SC.MarkerList>
                <SC.MarkerList>
                  대화형 인터페이스 설계를 통해 사용자 경험을 크게 향상시키고,
                  항공권 검색의 접근성과 편리성을 강화했습니다.
                </SC.MarkerList>
                <SC.MarkerList>
                  대화형 항공권 검색 시스템 설계와 관련된 기술적 기여를 인정받아{' '}
                  <a href="#manuscript">KIICE 원고</a>에 설계 원고를 게재할 수
                  있었습니다.
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career3;
