import React from 'react';
import SC from 'components/styled/common';

function Career() {
  return (
    <>
      <section>
        <SC.Subject>경력</SC.Subject>
        <SC.Row>
          <SC.Column>
            <SC.Company>티맥스소프트</SC.Company>
            <SC.Job>연구원 - 프론트엔드 개발</SC.Job>
            <p>(2021.08.01 ~ 재직중)</p>
          </SC.Column>
          <SC.Column>
            <SC.Row>
              <SC.RowHeader>
                통합 미들웨어 플랫폼 SuperFrameManager Admin 페이지
              </SC.RowHeader>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, ES6+, mobx, material-ui</SC.Stack>
            </SC.Row>
            <SC.Row>
              <ul>
                <SC.List>담당 업무</SC.List>
                <SC.MarkerList>자사 WAS 제품 JEUS Admin 페이지</SC.MarkerList>
                <SC.List>
                  개발 기간 (총3명 / 기여도 30%)
                  <SC.MarkerList>21.09 ~ 진행중</SC.MarkerList>
                  <SC.MarkerList>
                    22.04 (현재) 고객사 이슈 처리 및 기획 변경에 따른 디자인
                    변경, 기능 추가 등
                  </SC.MarkerList>
                </SC.List>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>
                    서버, 클러스터, 서버 템플릿 추가, 삭제, 도메인 설정 편집 등
                    설정 관리 페이지 개발
                  </SC.MarkerList>
                  <SC.MarkerList>
                    웹 서버 및 DBMS 연동 등의 웹 서비스
                  </SC.MarkerList>
                  <SC.MarkerList>
                    서버 lifecycle 관리(시작, 대기, 중지 등) 기능 개발
                  </SC.MarkerList>
                  <SC.MarkerList>
                    애플리케이션 추가, 삭제, 배포 등 관리 페이지 개발
                  </SC.MarkerList>
                  <SC.MarkerList>히스토리 관리 페이지 개발</SC.MarkerList>
                </SC.List>
                <SC.List>
                  성과
                  <SC.MarkerList>
                    22.12{' '}
                    <a
                      href="https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7477&pa=b3e4fdbb778cf9770a52cd9ddecb59881c927fbecc786f8674cb6e59275104ac043f63cf10207b98d3aa5c5207798e22https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7477&pa=b3e4fdbb778cf9770a52cd9ddecb59881c927fbecc786f8674cb6e59275104ac043f63cf10207b98d3aa5c5207798e22"
                      target="_blank"
                    >
                      GS인증 1등급 획득
                    </a>
                  </SC.MarkerList>
                  <SC.MarkerList>고객사(금융권 등) 납품</SC.MarkerList>
                </SC.List>
              </ul>
            </SC.Row>
            <SC.Row>
              <SC.RowHeader>
                오픈소스 미들웨어 플랫폼 HyperFrameManager Admin 페이지
              </SC.RowHeader>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, ES6+, mobx, material-ui</SC.Stack>
            </SC.Row>
            <SC.Row>
              <ul>
                <SC.List>
                  담당 업무
                  <SC.MarkerList>
                    Apache, Nginx, Wildfly, Tomcat 등 오픈소스 미들웨어 Admin
                    페이지
                  </SC.MarkerList>
                </SC.List>
                <SC.List>
                  개발 기간 (총2명 / 기여도 90%)
                  <SC.MarkerList>22.10 ~ 진행중</SC.MarkerList>
                </SC.List>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>오픈소스 미들웨어 설정 편집</SC.MarkerList>
                  <SC.MarkerList>오픈소스 미들웨어 제어</SC.MarkerList>
                  <SC.MarkerList>
                    오픈소스 미들웨어 토폴로지 관리(상태 모니터링 등)
                  </SC.MarkerList>
                </SC.List>
                <SC.List>
                  성과
                  <SC.MarkerList>
                    23.02{' '}
                    <a
                      href="https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7583&pa=359f396b2a22e52c061d906ad3b8285b992d122e67128b243d66ca56052dc7af043f63cf10207b98d3aa5c5207798e22"
                      target="_blank"
                    >
                      GS인증 1등급 획득
                    </a>
                  </SC.MarkerList>
                </SC.List>
              </ul>
            </SC.Row>
          </SC.Column>
        </SC.Row>
      </section>
      <SC.Divider />
    </>
  );
}

export default Career;
