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
                    SuperFrame은 사내 미들웨어 제품(JEUS, WebtoB, ProObject,
                    AnyLink 등)을 통합 관리하는 Admin 플랫폼입니다. 다양한
                    미들웨어를 효율적으로 관리하고, 대규모 설정 데이터를
                    직관적으로 처리할 수 있는 기능을 제공합니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>JEUS Admin 설정 페이지</SC.MarkerList>
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
                    서버, 클러스터, 상태 페이지 등 설정 관리 페이지 설계 및 구현
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 기여한 점</SC.Wrapper>
                  <SC.MarkerList>
                    <strong>
                      <a href="#multi-check-tree">react-multi-checkbox-tree</a>{' '}
                      라이브러리 배포를 통한 권한 관리 효율성 개선
                    </strong>
                    <SC.DotList>
                      커스텀 NPM 라이브러리인 react-multi-checkbox-tree를 개발
                      및 적용함으로써 복잡한 권한 관리 요구사항을 효과적으로
                      해결.
                    </SC.DotList>
                  </SC.MarkerList>
                  <SC.MarkerList>
                    <strong>
                      미들웨어 서버 구축 및 Jenkins 연동을 통한 개발 서버 환경
                      제공
                    </strong>
                    <SC.DotList>
                      <strong>문제점</strong>
                      <SC.DotList>
                        SFM 프로젝트는 미들웨어 서버(JEUS, WebtoB 등)가 세팅된
                        백엔드에 연결해야만 개발이 가능한 구조였습니다.
                        개발자마다 개별적으로 환경을 설정하는 과정이 반복되며,
                        많은 시간이 소요되고 작업 효율성이 저하되는 문제를
                        발견했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>해결</strong>
                      <SC.DotList>
                        미들웨어 세팅 서버를 구축하고 Jenkins를 이용해 개발
                        서버를 배포하는 파이프라인을 구성. 여러 개발자가 공통된
                        개발 환경에서 작업할 수 있도록 통합된 개발 환경 제공
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>성과</strong>
                      <SC.DotList>개발 환경 구축 소요 시간 단축</SC.DotList>
                      <SC.DotList>
                        환경 설정 오류 발생을 방지하여 초기 개발 단계의 생산성
                        향상
                      </SC.DotList>
                      <SC.DotList>
                        팀원들이 개발 본연의 작업에 집중할 수 있는 환경 조성
                      </SC.DotList>
                    </SC.DotList>
                  </SC.MarkerList>
                  <SC.MarkerList>
                    <strong>아이콘 자동화 스크립트 개발</strong>
                    <SC.Description>
                      약 1,000개 이상의 사내 아이콘을 효율적으로 관리하고 React
                      컴포넌트에서 바로 사용할 수 있도록 하기 위해 자동화
                      스크립트를 개발
                    </SC.Description>
                    <SC.DotList>
                      <strong>문제점</strong>
                      <SC.DotList>
                        기존에는 아이콘을 개별적으로 import하거나, 필요할 때마다
                        파일 경로를 확인하며 코드를 작성해야 했습니다. 이 방식은
                        대규모 프로젝트에서 개발 속도를 저하시킬 뿐만 아니라,
                        반복적인 작업으로 인해 실수 발생 가능성도 높았습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>해결 방법</strong>
                      <SC.DotList>
                        프로젝트 아이콘 폴더를 스캔해 파일 목록을 읽어오고,
                        아이콘별 React import 문을 자동 생성하는 스크립트를
                        작성했습니다. 스크립트 실행 시, 모든 아이콘을 통합
                        관리할 수 있는 React 컴포넌트 모듈이 자동으로 생성되도록
                        설계했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>성과</strong>
                      <SC.DotList>
                        아이콘 import 작업에 소요되던 시간을 90% 이상 절감
                      </SC.DotList>
                      <SC.DotList>
                        신규 아이콘 추가 시 수작업 없이 자동으로 React 코드가
                        생성되도록 하여 유지보수 효율성을 크게 향상
                      </SC.DotList>
                      <SC.DotList>
                        통합 관리가 가능해져 중복 코드 및 누락된 아이콘 사용
                        문제를 방지
                      </SC.DotList>
                      <SC.DotList>
                        React 프로젝트에서 아이콘을 재사용하고 접근하기 쉽게
                        하여 팀원 간 작업 일관성을 확보
                      </SC.DotList>
                    </SC.DotList>
                  </SC.MarkerList>
                  <SC.MarkerList>
                    <strong>HFM 프로젝트 뼈대 설계 및 구축</strong>
                    <SC.Description>
                      SFM 프로젝트는 사내 미들웨어 제품(JEUS, WebtoB 등)을 통합
                      관리하는 플랫폼으로 설계되었지만, 오픈소스
                      미들웨어(Apache, Nginx, Tomcat 등)를 관리할 수 있는 확장된
                      플랫폼에 대한 필요성이 제기되었습니다. 이와 같은
                      요구사항을 해결하기 위해 SFM 프로젝트를 Fork하여 새로운
                      HFM 프로젝트를 구축하는 작업을 주도했습니다.
                    </SC.Description>
                    <SC.DotList>
                      <strong>기여 내용</strong>
                      <SC.DotList>
                        SFM의 코어 구조와 재사용 가능한 모듈을 분석하여, HFM
                        프로젝트에서 활용 가능한 부분을 선별 및 확장
                      </SC.DotList>
                      <SC.DotList>
                        오픈소스 미들웨어(Apache, Nginx, Tomcat 등) 관리에
                        특화된 새로운 기능 요구사항을 정의하고 이를 반영한
                        프로젝트 초기 뼈대를 설계
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>성과</strong>
                      <SC.DotList>
                        SFM 기반으로 신속히 HFM 프로젝트를 구축해 초기 개발
                        기간을 약 40% 단축
                      </SC.DotList>
                      <SC.DotList>
                        공통 모듈의 재사용을 통해 개발 비용 절감과 코드 품질을
                        동시에 확보
                      </SC.DotList>
                      <SC.DotList>
                        HFM 프로젝트 뼈대를 기반으로, 오픈소스 미들웨어 통합
                        관리 플랫폼으로의 확장 가능성을 열어둠
                      </SC.DotList>
                    </SC.DotList>
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>
              <SC.List>
                <SC.Wrapper>프로젝트 성과</SC.Wrapper>
                <SC.MarkerList>
                  <a
                    href="https://cs.tta.or.kr/tta/notification/ttaCertProductListR.do?tnc_lab=&up_tnc_cls_no=&tnc_cls_no=&cert_year=&searchKey=product&searchWord=%EC%A0%9C%EC%9A%B0%EC%8A%A4+21"
                    target="_blank"
                  >
                    SFM GS인증 1등급
                  </a>{' '}
                  및{' '}
                  <a
                    href="https://cs.tta.or.kr/tta/notification/ttaCertProductListR.do?tnc_lab=&up_tnc_cls_no=&tnc_cls_no=&cert_year=&searchKey=product&searchWord=%ED%95%98%EC%9D%B4%ED%8D%BC%ED%94%84%EB%A0%88%EC%9E%84+21"
                    target="_blank"
                  >
                    HFM GS인증 1등급
                  </a>{' '}
                  획득
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career2;
