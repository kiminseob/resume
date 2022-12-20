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
            <SC.Job>웹 프론트엔드</SC.Job>
            <p>(2021.08 - 재직중)</p>
          </SC.Column>
          <SC.Column>
            <SC.Row>
              <SC.RowHeader>
                통합 미들웨어 플랫폼 SuperFrame Admin 페이지 개발
              </SC.RowHeader>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, ES6+, mobx, material-ui</SC.Stack>
            </SC.Row>
            <SC.Row>
              <ul>
                <SC.List>자사 WAS 제품 JEUS Admin 페이지</SC.List>
                <SC.List>
                  개발 기간 (총3명 / 기여도 30%)
                  <SC.MarkerList>21.09 ~ 22.12 GS인증 1급</SC.MarkerList>
                  <SC.MarkerList>
                    22.12 ~ 기능 추가, 디자인 변경, 리팩토링 등
                  </SC.MarkerList>
                </SC.List>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>cloud 및 legacy 환경별 UI 개발</SC.MarkerList>
                  <SC.MarkerList>
                    클러스터, 서버, 레플리카셋 설정 페이지 개발
                  </SC.MarkerList>
                  <SC.MarkerList>jeus 설정 CRUD 작업</SC.MarkerList>
                  <SC.MarkerList>
                    모니터링 조회 및 컨트롤 페이지 개발
                  </SC.MarkerList>
                </SC.List>
              </ul>
            </SC.Row>
            <SC.Row>
              <SC.RowHeader>
                오픈소스 미들웨어 플랫폼 HyperFrame Admin 페이지 개발
              </SC.RowHeader>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, ES6+, mobx, material-ui</SC.Stack>
            </SC.Row>
            <SC.Row>
              <ul>
                <SC.List>Apache, Nginx, Wildfly 관리 Admin 페이지</SC.List>
                <SC.List>
                  개발 기간 (총1명 / 기여도 100%)
                  <SC.MarkerList>22.10 ~ ing</SC.MarkerList>
                </SC.List>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>
                    Apache, Nginx, Wildfly 설정 CRUD 작업
                  </SC.MarkerList>
                  <SC.MarkerList>
                    Apache, Nginx, Wildfly 시작 및 종료 기능
                  </SC.MarkerList>
                  <SC.MarkerList>설정 파일 CRUD 작업</SC.MarkerList>
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
