import React from 'react';
import SC from './styled/common';

function Project() {
  return (
    <>
      <SC.Divider />
      <section>
        <SC.Subject>개인 프로젝트</SC.Subject>
        <SC.Row>
          <SC.Column>
            <SC.Company>Support Cone</SC.Company>
          </SC.Column>
          <SC.Column>
            <SC.FullRow>
              <SC.RowHeader>Support Cone - 창작자 후원 플랫폼</SC.RowHeader>
              <SC.Row>
                <a href="https://support-cone.vercel.app" target="_blank">
                  <SC.Icon src="icon/expand.png" />
                </a>
              </SC.Row>
            </SC.FullRow>
            <SC.Row>
              <ul>
                <SC.Wrapper>
                  <SC.List>
                    <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                    <SC.MarkerList>
                      창작자가 팬들로부터 간편하게 후원을 받고 소통할 수 있는
                      플랫폼입니다. '커피 한 잔 후원' 컨셉을 넘어 '아이스크림
                      한 스쿱'이라는 귀여운 컨셉으로 접근성을 높였습니다.
                    </SC.MarkerList>
                  </SC.List>
                </SC.Wrapper>
                <SC.Wrapper>
                  <SC.List>
                    <SC.Wrapper>팀 구성</SC.Wrapper>
                    <SC.MarkerList>개인 프로젝트 (1인)</SC.MarkerList>
                  </SC.List>
                </SC.Wrapper>
                <SC.Wrapper>
                  <SC.List>
                    <SC.Wrapper>주요 업무 및 문제 해결</SC.Wrapper>
                    <SC.MarkerList>
                      기획부터 디자인, 프론트/백엔드 개발 및 배포까지 전 과정 수행
                    </SC.MarkerList>
                    <SC.MarkerList>
                      카카오페이 QR 송금 방식을 활용한 직관적인 후원 프로세스 설계 및 구현
                    </SC.MarkerList>
                    <SC.MarkerList>
                      창작자 아이덴티티를 표현할 수 있는 커스텀 프로필 페이지 및 링크 제공 서비스 개발
                    </SC.MarkerList>
                  </SC.List>
                </SC.Wrapper>
                <SC.Wrapper>
                  <SC.List>
                    <SC.Wrapper>성과</SC.Wrapper>
                    <SC.MarkerList>
                      Vercel을 통한 CI/CD 환경 구축 및 안정적인 서비스 운영
                    </SC.MarkerList>
                  </SC.List>
                </SC.Wrapper>
              </ul>
            </SC.Row>
            <SC.Row>
              <SC.Stack>Next.js, TypeScript, Tailwind CSS, MongoDB</SC.Stack>
            </SC.Row>
          </SC.Column>
        </SC.Row>
        <SC.Divider />
      </section>
    </>
  );
}

export default Project;
