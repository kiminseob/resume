import React from 'react';
import SC from 'components/styled/common';

function Career2() {
  return (
    <section>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.Column>
              <SC.RowDivider />
              <SC.Row>
                <SC.RowHeader>
                  Tmaxsoft SaaS Platform(TSP) 포털 사이트 개발
                </SC.RowHeader>
              </SC.Row>
              <SC.Wrapper>
                <SC.Stack>
                  Next.js, Typescript, React Hook Form, Recoil, TanStack Query,
                  Emotion
                </SC.Stack>
              </SC.Wrapper>
              <SC.Row>
                <ul>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                      <SC.MarkerList>
                        JEUS, WebtoB 등 미들웨어 제품과 DB를 SaaS 형태로
                        제공하는 플랫폼으로 고객이 자체 인프라 없이도 서비스를
                        신속히 구축·운영할 수 있도록 지원하는 포털 사이트
                        입니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>담당 업무</SC.Wrapper>
                      <SC.MarkerList>
                        프로젝트/서비스 관리 페이지 개발
                      </SC.MarkerList>
                      <SC.MarkerList>회원 정보 관리 페이지 개발</SC.MarkerList>
                      <SC.MarkerList>결제/과금 관리 화면 구현</SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>개발 기간</SC.Wrapper>
                      <SC.MarkerList>
                        2023.08 ~ 2024.12 (1년 4개월)
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

export default Career2;
