import React from 'react';
import SC from 'components/styled/common';

function Career1() {
  return (
    <section>
      <SC.Subject>경력</SC.Subject>
      <SC.Row>
        <SC.Column>
          <SC.Company>티맥스소프트</SC.Company>
          <SC.Description>프론트엔드 개발자</SC.Description>
          <SC.Description>(21.08.01 ~ 재직중)</SC.Description>
          <SC.Description>- 약 2년 6개월</SC.Description>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.Column>
              <SC.Row>
                <SC.RowHeader>
                  Tmaxsoft SaaS Platform(TSP) 포털 사이트 개발
                </SC.RowHeader>
              </SC.Row>
              <SC.Wrapper>
                <SC.Stack>
                  Next.js, Typescript, Recoil, React Query, Styled, Material
                </SC.Stack>
              </SC.Wrapper>
              <SC.Row>
                <ul>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                      <SC.MarkerList>
                        TSP는 국내 시장 점유율 1위 미들웨어 제품인 JEUS,
                        WebtoB를 SaaS로 제공하여 고객들이 손쉽게 비즈니스 환경을
                        구축할 수 있도록 도와주는 온라인 플랫폼 입니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>담당 업무</SC.Wrapper>
                      <SC.MarkerList>
                        SaaS 포털 사이트에서 사용자가 카탈로그를 생성해 서버
                        환경을 손쉽게 구축할 수 있도록 하는 전반적인 UI 프로세스
                        개발을 담당하고 있습니다. 프로젝트 초기 구조를 잡았으며
                        인증/인가 및 사이트 주요 기능을 담당 중입니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>개발 기간</SC.Wrapper>
                      <SC.MarkerList>2023.08 ~ 진행중</SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>개발 내용</SC.Wrapper>
                      <SC.MarkerList>
                        Jeus, WebtoB, PostgreSQL로 구성된 카탈로그 생성 및 관리
                        페이지
                      </SC.MarkerList>
                      <SC.MarkerList>
                        회원정보, 결제, 요금 조회 관리 페이지
                      </SC.MarkerList>
                      <SC.MarkerList>
                        SSO keycloak 사용한 인증, 인가
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>성과</SC.Wrapper>
                      <SC.MarkerList>
                        디자인 시스템을 활용한 빠른 UI 개발을 통해 개발 일정
                        단축
                      </SC.MarkerList>
                      <SC.MarkerList>
                        팀원들과 애자일과 적극적인 의사소통 및 문제 해결을 통해
                        기존 개발 목표 초과 달성
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                </ul>
              </SC.Row>
            </SC.Column>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career1;
