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
          <SC.RowDivider />
          <SC.Row>
            <SC.RowHeader>
              통합 미들웨어 플랫폼 SuperFrame(SFM) Admin 페이지 개발
            </SC.RowHeader>
          </SC.Row>
          <SC.Wrapper>
            <SC.Stack>
              React.js, Typescript, Mobx, Material, React Query, Styled
            </SC.Stack>
          </SC.Wrapper>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                  <SC.MarkerList>
                    사내 미들웨어 제품인 JEUS, WebtoB, ProObject, AnyLink 등을
                    통합 관리하는 Admin 플랫폼입니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    JEUS Admin 페이지를 담당했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>개발 기간</SC.Wrapper>
                  <SC.MarkerList>2021.09 ~ 2023.07 (1년 10개월)</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>개발 내용</SC.Wrapper>
                  <SC.MarkerList>
                    서버, 클러스터, 도메인 등 JEUS 설정 관리 페이지
                  </SC.MarkerList>
                  <SC.MarkerList>계정 관리 페이지</SC.MarkerList>
                  <SC.MarkerList>애플리케이션 배포 관리 페이지</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.List>
                <SC.Wrapper>프로젝트 기여한 점</SC.Wrapper>
                <SC.MarkerList>
                  <a href="#multi-check-tree">react-multi-checkbox-tree</a>{' '}
                  라이브러리를 배포해 권한 관리(RWX)를 쉽게 다룰 수 있도록
                  했습니다.
                </SC.MarkerList>
                <SC.MarkerList>
                  미들웨어 서버 구축 및 Jenkins 연동을 통해 개발 서버 환경을
                  제공했습니다.
                </SC.MarkerList>
                <SC.MarkerList>
                  약 1000개가 넘는 사내 아이콘을 react에서 바로 사용할 수 있도록
                  아이콘 폴더를 읽어와 react import문 코드를 생성해주는
                  스크립트를 만들었습니다.
                </SC.MarkerList>
                <SC.MarkerList>
                  2022.12{' '}
                  <a
                    href="https://cs.tta.or.kr/tta/notification/ttaCertProductListR.do?tnc_lab=&up_tnc_cls_no=&tnc_cls_no=&cert_year=&searchKey=product&searchWord=%EC%A0%9C%EC%9A%B0%EC%8A%A4+21"
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
          <SC.Wrapper>
            <SC.Stack>React.js, Typescript, Mobx, Styled, Material</SC.Stack>
          </SC.Wrapper>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    SFM 프로젝트의 오픈소스 미들웨어 버전입니다. Apache, Nginx,
                    Wildfly, Tomcat을 관리합니다.
                  </SC.MarkerList>
                </SC.List>
                <SC.Wrapper>
                  <SC.List>
                    <SC.Wrapper>개발 기간</SC.Wrapper>
                    <SC.MarkerList>2022.10 ~ 2023.06 (9개월)</SC.MarkerList>
                  </SC.List>
                </SC.Wrapper>
                <SC.Wrapper>
                  <SC.List>
                    <SC.Wrapper>개발 내용</SC.Wrapper>
                    <SC.MarkerList>미들웨어 제어/설정 관리</SC.MarkerList>
                  </SC.List>
                </SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 기여한 점</SC.Wrapper>
                  <SC.MarkerList>
                    2023.02{' '}
                    <a
                      href="https://cs.tta.or.kr/tta/notification/ttaCertProductListR.do?tnc_lab=&up_tnc_cls_no=&tnc_cls_no=&cert_year=&searchKey=product&searchWord=%ED%95%98%EC%9D%B4%ED%8D%BC%ED%94%84%EB%A0%88%EC%9E%84+21"
                      target="_blank"
                    >
                      GS인증 1등급
                    </a>{' '}
                    획득
                  </SC.MarkerList>
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
