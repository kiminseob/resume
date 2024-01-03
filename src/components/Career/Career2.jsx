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
            <SC.RowHeader>
              오픈소스 미들웨어 플랫폼 HFM Admin 페이지
            </SC.RowHeader>
          </SC.Row>
          <SC.Row>
            <SC.Stack>React, ES6, Mobx, Material UI</SC.Stack>
          </SC.Row>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  담당 업무
                  <SC.MarkerList>
                    Apache, Nginx, Wildfly, Tomcat 등 오픈소스 미들웨어 Admin
                    페이지를 개발하고 있습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.Wrapper>
                <SC.List>
                  개발 기간
                  <SC.MarkerList>22.10 ~ 진행중</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.Wrapper>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>
                    apache, Nginx, Wildfly, Tomcat 제어 및 설정 관리 페이지
                  </SC.MarkerList>
                  <SC.MarkerList>미들웨어 토폴로지 상태 모니터링</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.List>
                성과
                <SC.MarkerList>
                  23.02{' '}
                  <a
                    href="https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7583&pa=359f396b2a22e52c061d906ad3b8285b992d122e67128b243d66ca56052dc7af043f63cf10207b98d3aa5c5207798e22"
                    target="_blank"
                  >
                    GS인증 1등급
                  </a>
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>

          <SC.RowDivider />
          <SC.Row>
            <SC.Column>
              <SC.Row>
                <SC.RowHeader>Tmaxsoft SaaS Platform 포털 사이트</SC.RowHeader>
              </SC.Row>
              <SC.Row>
                <SC.Stack>Next.js, ES6, Recoil, React Query</SC.Stack>
              </SC.Row>
              <SC.Row>
                <ul>
                  <SC.Wrapper>
                    <SC.List>
                      담당 업무
                      <SC.MarkerList>
                        계정, 프로젝트 및 서비스 생성 관리, 결제 관리 등
                        전반적인 화면 개발을 담당하고 있습니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      개발 기간
                      <SC.MarkerList>23.08 ~ 진행중</SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      개발 내용
                      <SC.MarkerList>
                        프로젝트 및 서비스 생성 관리 페이지
                      </SC.MarkerList>
                      <SC.MarkerList>이벤트 조회 페이지</SC.MarkerList>
                      <SC.MarkerList>회원정보 관리 페이지</SC.MarkerList>
                      <SC.MarkerList>결제 관리 페이지</SC.MarkerList>
                      <SC.MarkerList>요금 조회 페이지</SC.MarkerList>
                      <SC.MarkerList>
                        로그인/회원가입 (인증, 인가)
                        <SC.DividerList>keycloak 사용</SC.DividerList>
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.List>
                    성과
                    <SC.MarkerList>1월 말 서비스 1차 오픈 예정</SC.MarkerList>
                  </SC.List>
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
