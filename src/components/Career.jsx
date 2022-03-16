import React from 'react';
import styled from 'styled-components';
import SC from 'components/styled/common';

const S = {};

function Carrer() {
  return (
    <section>
      <SC.H1>경력</SC.H1>
      <SC.Row>
        <SC.Column>
          <SC.Company>티맥스소프트</SC.Company>
          <SC.Job>웹 프론트엔드</SC.Job>
          <p>(2021.08 - 재직중)</p>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.ProjectName>
              WAS 통합 관리 제품 SuperFrame Admin 페이지 개발
            </SC.ProjectName>
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
                각 세부 설정 조회, 생성, 제거, 편집 API 호출 로직 구현
              </SC.MarkerList>
              <SC.MarkerList>MobX를 이용한 글로벌 상태 관리</SC.MarkerList>
              <SC.MarkerList>
                jeus 모니터링 정보 조회 및 command 호출 기능 등 약 30개 이상
                페이지 개발
              </SC.MarkerList>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Carrer;
