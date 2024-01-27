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
          <SC.Wrapper>
            <SC.List>
              성과
              <SC.MarkerList>
                디자인 시스템을 활용한 빠른 UI 개발을 통해 개발 일정 25% 단축
              </SC.MarkerList>
              <SC.MarkerList>
                팀원들과 애자일과 적극적인 의사소통 및 문제 해결을 통해 기존
                개발 목표보다 20% 초과 달성
              </SC.MarkerList>
              <SC.MarkerList>
                Next 도입으로 초기 렌더링 속도 15% 증가
              </SC.MarkerList>
            </SC.List>
          </SC.Wrapper>
          <SC.RowDivider />
          <SC.Row>
            <SC.RowHeader>
              통합 미들웨어 플랫폼 SuperFrame(SFM) Admin 페이지 개발
            </SC.RowHeader>
          </SC.Row>
          <SC.Row>
            <SC.Stack>
              React.js, Typescript, Mobx, Material, React Query, Styled
            </SC.Stack>
          </SC.Row>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  프로젝트 소개
                  <SC.MarkerList>
                    자사 미들웨어 제품인 JEUS, WebtoB, ProObject, AnyLink 등을
                    통합하여 한 화면에서 제공하는 Admin 플랫폼 입니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  담당 업무
                  <SC.MarkerList>
                    JEUS와 관련된 여러 설정을 돕고 상태를 확인할 수 있는 Admin
                    페이지를 개발했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  개발 기간<SC.MarkerList>2021.09 ~ 2023.07</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>
                    서버, 클러스터, 도메인 설정 등 전반적인 설정 관리 페이지
                    개발
                  </SC.MarkerList>
                  <SC.MarkerList>어드민 계정 관리 페이지</SC.MarkerList>
                  <SC.MarkerList>
                    애플리케이션 배포 관리 페이지 개발
                  </SC.MarkerList>
                  <SC.MarkerList>히스토리 관리 페이지 개발</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.List>
                성과
                <SC.MarkerList>
                  체크 트리 라이브러리 추가 및 배포하여 해당 라이브러리 활용하는
                  페이지 개발의 효율성 75% 기여
                </SC.MarkerList>
                <SC.MarkerList>
                  gitlab 개발 브랜치와 Jenkins CI/CD 서버를 별도로 구축하여
                  팀원들이 각자 개발 환경을 세팅하는 비효율적 프로세스 개선을
                  통해 업무 효율성 25% 증가
                </SC.MarkerList>
                <SC.MarkerList>
                  1000개가 넘는 사내 디자인 시스템 아이콘을 다운받아 react
                  코드로 import하는 파일을 생성하는 아이콘 번들 스크립트를
                  작성하여 아이콘 작업 시 효율성 90% 기여
                </SC.MarkerList>
                <SC.MarkerList>
                  2022.12{' '}
                  <a
                    href="https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7477&pa=b3e4fdbb778cf9770a52cd9ddecb59881c927fbecc786f8674cb6e59275104ac043f63cf10207b98d3aa5c5207798e22https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7477&pa=b3e4fdbb778cf9770a52cd9ddecb59881c927fbecc786f8674cb6e59275104ac043f63cf10207b98d3aa5c5207798e22"
                    target="_blank"
                  >
                    GS인증 1등급
                  </a>{' '}
                  획득
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>

          <SC.RowDivider />

          <SC.Row>
            <SC.RowHeader>
              오픈소스 미들웨어 플랫폼 HyperFrame(HFM) Admin 페이지 개발
            </SC.RowHeader>
          </SC.Row>
          <SC.Row>
            <SC.Stack>React.js, Typescript, Mobx, Styled, Material</SC.Stack>
          </SC.Row>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  담당 업무
                  <SC.MarkerList>
                    SFM 프로젝트로부터 clone 하여 오픈소스 미들웨어에 맞는
                    구조로 커스터마이징 하는 업무를 담당했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.Wrapper>
                <SC.List>
                  개발 기간
                  <SC.MarkerList>22.10 ~ 진행중</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career2;
