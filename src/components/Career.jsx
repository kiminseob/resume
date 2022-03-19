import React from 'react';
import SC from 'components/styled/common';

function Carrer() {
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
                WAS 통합 관리 제품 SuperFrame Admin 페이지 개발
              </SC.RowHeader>
            </SC.Row>
            <SC.Row>
              <SC.Stack>React, javascript, mobx, material-ui</SC.Stack>
            </SC.Row>
            <SC.Row>
              <ul>
                <SC.List>
                  자사 WAS 제품 JEUS Admin 페이지 (21.09 ~ 22.03) / 기여도 30%
                  (총3명)
                </SC.List>
                <SC.MarkerList>cloud 및 legacy 환경별 UI 개발</SC.MarkerList>
                <SC.MarkerList>
                  클러스터, 서버, 레플리카셋 설정 페이지 개발
                </SC.MarkerList>
                <SC.MarkerList>
                  config contorl 작업(조회, 생성, 제거, 편집 등) API 호출 로직
                  구현
                </SC.MarkerList>
                <SC.MarkerList>MobX를 이용한 글로벌 상태 관리</SC.MarkerList>
                <SC.MarkerList>
                  jeus 모니터링 정보 조회 페이지 개발
                </SC.MarkerList>
              </ul>
            </SC.Row>
            <SC.Row>
              <SC.RowHeader>개발 환경 개선</SC.RowHeader>
            </SC.Row>
            <SC.Row>
              <ul>
                <SC.List>팀 소개 노션 사이트 제작</SC.List>
              </ul>
            </SC.Row>
          </SC.Column>
        </SC.Row>
      </section>
      <SC.Divider />
    </>
  );
}

export default Carrer;
