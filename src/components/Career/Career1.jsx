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
          <p>(2021.08.01 ~ 재직중)</p>
          <p>- 약 2년 6개월</p>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.Column>
              <SC.Row>
                <SC.RowHeader>
                  Tmaxsoft SaaS Platform(TSP) 포털 사이트 개발 및 프론트 리딩
                </SC.RowHeader>
              </SC.Row>
              <SC.Row>
                <SC.Stack>
                  Next.js, Typescript, Recoil, React Query, Styled, Material
                </SC.Stack>
              </SC.Row>
              <SC.Row>
                <ul>
                  <SC.Wrapper>
                    <SC.List>
                      프로젝트 소개
                      <SC.MarkerList>
                        TSP는 국내 시장 점유율 1위 미들웨어 제품인 JEUS,
                        WebtoB를 SaaS로 제공하여 고객들이 손쉽게 비즈니스 환경을
                        구축할 수 있도록 도와주는 온라인 플랫폼 입니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      담당 업무
                      <SC.MarkerList>
                        SaaS 포털 사이트의 전반적인 화면 개발을 담당하고 있으며
                        프론트엔드를 리딩하고 있습니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      개발 기간
                      <SC.MarkerList>2023.08 ~ 진행중</SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      개발 내용
                      <SC.MarkerList>
                        프로젝트 및 서비스 관리 페이지
                      </SC.MarkerList>
                      <SC.MarkerList>
                        회원정보, 결제, 요금 조회 관리 페이지
                      </SC.MarkerList>
                      <SC.MarkerList>
                        SSO keycloak 사용한 인증, 인가
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
