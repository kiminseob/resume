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
              React.js, Typescript, Mobx, TanStack Query, Emotion
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
                      <strong>배경</strong>
                      <SC.DotList>
                        트리 구조 형태로 제공되는 읽기(Read), 쓰기(Write),
                        실행(Execute) 옵션을 효과적으로 제어할 수 있도록 멀티
                        체크박스 기반의 트리 구조를 설계 및 구현했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>개선 방법</strong>
                      <SC.DotList>
                        단일 체크 트리 구조를 확장하여 다수의 체크박스 상태를
                        효과적으로 관리할 수 있는 구조로 개선하였습니다.
                      </SC.DotList>
                      <SC.DotList>
                        모듈화된 컴포넌트로 제공하여 프로젝트 내 다양한
                        페이지에서 재사용할 수 있게 하였고 문서화와 배포를
                        완료했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>결과</strong>
                      <SC.DotList>
                        권한 설정 과정이 단순화되어 관련 개발 생산성을 높이는 데
                        기여했습니다.
                      </SC.DotList>
                      <SC.DotList>
                        사내뿐 아니라 외부에서도 활용 가능한 범용 라이브러리로
                        오픈 소스 생태계에 기여했습니다.
                      </SC.DotList>
                    </SC.DotList>
                  </SC.MarkerList>
                  <SC.MarkerList>
                    <strong>
                      미들웨어 서버 구축 및 Jenkins 연동을 통한 개발 서버 환경
                      제공
                    </strong>
                    <SC.DotList>
                      <strong>배경</strong>
                      <SC.DotList>
                        SFM 프로젝트는 미들웨어 서버(JEUS, WebtoB 등)가 세팅된
                        백엔드에 연결해야만 개발이 가능한 구조였습니다. 개발
                        서버가 따로 존재하지 않아 개발자마다 개별적으로 환경을
                        설정하는 과정이 반복되며, 많은 시간이 소요되고 작업
                        효율성이 저하되는 문제를 발견했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>개선 방법</strong>
                      <SC.DotList>
                        미들웨어 세팅 서버를 구축하고 Jenkins를 이용해 개발
                        서버를 배포하는 파이프라인을 구성. 여러 개발자가 공통된
                        개발 환경에서 작업할 수 있도록 통합된 개발 환경을
                        제공했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>성과</strong>
                      <SC.DotList>
                        개발 환경 구축 소요 시간이 단축되었습니다.
                      </SC.DotList>
                      <SC.DotList>
                        팀원들이 개발 본연의 작업에 집중할 수 있는 환경이
                        조성되었습니다.
                      </SC.DotList>
                    </SC.DotList>
                  </SC.MarkerList>
                  <SC.MarkerList>
                    <strong>아이콘 import문 생성 자동화 스크립트 개발</strong>
                    <SC.DotList>
                      <strong>배경</strong>
                      <SC.DotList>
                        기존에는 아이콘을 개별적으로 확인 후 수동으로 import하여
                        사용해야 했습니다. 이 방식은 개발 속도를 저하시킬 뿐만
                        아니라, 반복적인 작업으로 인한 실수 발생 가능성이 높고
                        비효율적이라는 문제가 있었습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>개선 방법</strong>
                      <SC.DotList>
                        약 1,000개 이상의 사내 아이콘을 폴더 규칙에 따라
                        체계적으로 관리하고, 해당 규칙을 기반으로 React
                        컴포넌트에서 바로 사용할 수 있도록 import문을 자동
                        생성하는 스크립트를 개발하였습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>결과</strong>
                      <SC.DotList>
                        아이콘 import 작업에 소요되던 시간을 절감했습니다.
                      </SC.DotList>
                      <SC.DotList>
                        신규 아이콘 추가 시 수작업 없이 자동으로 React 코드가
                        생성되도록 하여 유지보수 효율성을 크게 향상시켰습니다.
                      </SC.DotList>
                      <SC.DotList>
                        통합 관리가 가능해져 중복 코드 및 누락된 아이콘 사용
                        문제를 방지 했습니다.
                      </SC.DotList>
                      <SC.DotList>
                        React 프로젝트에서 아이콘을 재사용하고 접근하기 쉽게
                        하여 팀원 간 작업 일관성을 확보했습니다.
                      </SC.DotList>
                    </SC.DotList>
                  </SC.MarkerList>
                  <SC.MarkerList>
                    <strong>HFM 프로젝트 뼈대 설계 및 구축</strong>
                    <SC.DotList>
                      <strong>배경</strong>
                      <SC.DotList>
                        SFM 프로젝트는 사내 미들웨어 제품을 통합 관리하는
                        플랫폼으로 설계되었지만, 오픈소스 미들웨어(Apache,
                        Tomcat 등)를 관리할 수 있는 확장된 플랫폼에 대한
                        필요성이 제기되었습니다. 이와 같은 요구사항을 해결하기
                        위해 SFM 프로젝트를 Fork하여 HFM 프로젝트를 구축하는
                        작업을 주도했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>개선 방법</strong>
                      <SC.DotList>
                        SFM의 코어 구조와 재사용 가능한 모듈을 분석하여 HFM
                        프로젝트에서 활용 가능한 부분을 선별하고 확장했습니다.
                      </SC.DotList>
                      <SC.DotList>
                        오픈소스 미들웨어(Apache, Nginx, Tomcat 등) 관리에
                        특화된 새로운 기능 요구사항을 정의하고 이를 반영한
                        프로젝트 초기 뼈대를 빠르게 구축했습니다.
                      </SC.DotList>
                    </SC.DotList>
                    <SC.DotList>
                      <strong>결과</strong>
                      <SC.DotList>
                        SFM 기반으로 신속히 HFM 프로젝트를 구축해 초기 개발
                        기간을 약 40% 단축했습니다.
                      </SC.DotList>
                      <SC.DotList>
                        HFM 프로젝트 뼈대를 기반으로 오픈소스 미들웨어 통합 관리
                        플랫폼으로의 확장 가능성을 열었습니다.
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
