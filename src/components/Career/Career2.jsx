import React from 'react';
import SC from 'components/styled/common';

function Career2() {
  return (
    <section>
      <SC.ProjectSection>
        <SC.ProjectTitle>
          Tmaxsoft SaaS Platform(TSP) 포털 사이트 개발
        </SC.ProjectTitle>
        <SC.Wrapper>
          <SC.Stack>
            Next.js · Typescript · React Hook Form · Recoil · TanStack Query ·
            Emotion
          </SC.Stack>
        </SC.Wrapper>
        <div>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>프로젝트 소개</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                JEUS, WebtoB 등 미들웨어 제품과 DB를 SaaS 형태로
                제공하는 플랫폼으로 고객이 자체 인프라 없이도 서비스를
                신속히 구축·운영할 수 있도록 지원하는 포털 사이트
                입니다.
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>팀 구성</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                프론트엔드 3명 · 백엔드 2명 · 디자인 1명 · 기획 2명
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>담당 업무</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                프로젝트 및 서비스 관리 페이지를 개발했습니다.
              </SC.MarkerList>
              <SC.MarkerList>
                로그인(Auth) 및 권한 관리 시스템을 구현했습니다.
              </SC.MarkerList>
              <SC.MarkerList>
                결제 및 과금 관리 페이지를 구현했습니다.
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>개발 기간</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                2023.08 ~ 2024.12 (1년 4개월)
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
        </div>
      </SC.ProjectSection>
    </section>
  );
}

export default Career2;
