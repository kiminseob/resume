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
          <SC.Description>- 약 3년 4개월</SC.Description>
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
                        TSP는 사내 미들웨어 제품(JEUS, WebtoB) 및 오픈소스
                        미들웨어(Apache, Nginx, Tomcat, Wildfly), DB(MySQL) 등을
                        서비스로 손쉽게 구축할 수 있는 SaaS 플랫폼입니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>담당 업무</SC.Wrapper>
                      <SC.MarkerList>
                        프로젝트 및 서비스 구축을 중점으로 담당하고 있습니다.
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
                        프로젝트 및 서비스 관리 페이지
                      </SC.MarkerList>
                      <SC.MarkerList>
                        회원정보, 결제정보, 요금정보 관리 페이지
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
