import React from 'react';
import SC from 'components/styled/common';

function Career1() {
  return (
    <section>
      <SC.Subject>경력</SC.Subject>
      <SC.Row>
        <SC.Column>
          <SC.Company>티맥스소프트</SC.Company>
          <SC.Description>프론트엔드 개발자</SC.Description>
          <p>(2021.08.01 ~ 재직중)</p>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.RowHeader>통합 미들웨어 플랫폼 SFM Admin 페이지</SC.RowHeader>
          </SC.Row>
          <SC.Row>
            <SC.Stack>React, ES6, Mobx, Material UI, React Query</SC.Stack>
          </SC.Row>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  담당 업무
                  <SC.MarkerList>
                    자사 WAS 제품 JEUS Admin 페이지를 개발하고 있습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  개발 기간<SC.MarkerList>21.09 ~ 진행중</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  개발 내용
                  <SC.MarkerList>
                    서버, 클러스터, 도메인 설정 등 설정 관리 페이지 개발
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
                  22.12{' '}
                  <a
                    href="https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7477&pa=b3e4fdbb778cf9770a52cd9ddecb59881c927fbecc786f8674cb6e59275104ac043f63cf10207b98d3aa5c5207798e22https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7477&pa=b3e4fdbb778cf9770a52cd9ddecb59881c927fbecc786f8674cb6e59275104ac043f63cf10207b98d3aa5c5207798e22"
                    target="_blank"
                  >
                    GS인증 1등급
                  </a>
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career1;
