import React from 'react';
import SC from './styled/common';

function Project() {
  return (
    <>
      <SC.Divider />
      <section>
        <SC.Subject>개인 프로젝트</SC.Subject>

        <div style={{ marginBottom: '1rem' }}>
          <SC.Company style={{ width: 'auto' }}>Support Cone</SC.Company>
        </div>

        <SC.ProjectSection>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <SC.ProjectTitle>Support Cone - 창작자 후원 플랫폼</SC.ProjectTitle>
            <a href="https://support-cone.vercel.app" target="_blank">
              <SC.Icon src="icon/expand.png" />
            </a>
          </div>

          <SC.Wrapper>
            <SC.Stack>Next.js · TypeScript · Tailwind CSS · MongoDB</SC.Stack>
          </SC.Wrapper>

          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>프로젝트 소개</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                창작자가 팬들로부터 간편하게 후원을 받고 소통할 수 있는
                플랫폼입니다. '아이스크림 한 스쿱'이라는 귀여운 컨셉으로 접근성을
                높였습니다.
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>팀 구성</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>개인 프로젝트 (1인)</SC.MarkerList>
            </ul>
          </SC.Wrapper>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>주요 업무 및 문제 해결</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                기획부터 디자인·프론트/백엔드 개발 및 배포까지 전 과정을 수행했습니다.
              </SC.MarkerList>
              <SC.MarkerList>
                카카오페이 QR 송금 방식을 활용한 직관적인 후원 프로세스를 설계 및 구현했습니다.
              </SC.MarkerList>
              <SC.MarkerList>
                창작자 아이덴티티를 표현할 수 있는 커스텀 프로필 페이지 및 링크 제공 서비스를 개발했습니다.
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
          <SC.Wrapper>
            <ul>
              <SC.List>
                <SC.Wrapper>성과</SC.Wrapper>
              </SC.List>
              <SC.MarkerList>
                Vercel을 통한 CI/CD 환경 구축 및 안정적인 서비스를 운영
                중이며 현재 결제 시스템 연동 등 지속적인 기능 고도화를 진행하고
                있습니다.
              </SC.MarkerList>
            </ul>
          </SC.Wrapper>
        </SC.ProjectSection>
      </section>
    </>
  );
}

export default Project;
