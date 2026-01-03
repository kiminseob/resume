import React from 'react';
import SC from 'components/styled/common';

function Contribution() {
  return (
    <section>
      <SC.Divider />
      <div style={{ marginBottom: '1rem' }}>
        <SC.Company style={{ width: 'auto' }}>프로젝트 개선</SC.Company>
      </div>
      <SC.ProjectSection>
        <SC.Wrapper>
          <div style={{ marginBottom: '2rem' }}>
            <SC.ProjectTitle>Zod 기반의 선언적 유효성 검사 체계 구축</SC.ProjectTitle>
            <ul style={{ paddingLeft: 0, marginTop: '0.5rem' }}>
              <SC.DotList>
                <strong>배경</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    기존 폼 유효성 검사 로직은 각 페이지에 개별적으로 구현되어 코드
                    중복과 가독성 저하 문제가 있었습니다. 이를 해결하기 위해 Zod
                    라이브러리를 도입하여 스키마 기반의 유효성 검사 체계를
                    구축했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
              <SC.DotList>
                <strong>해결 방법</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    기존의 명령형(Imperative) 유효성 검사 방식에서
                    선언적(Declarative) 방식으로 전환하기 위해 Zod 스키마를
                    설계했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    복잡한 중첩 객체 및 배열 형태의 데이터 구조에 대응하는 커스텀
                    검증 로직을 작성하고 이를 React Hook Form의 resolver와 연동하여
                    런타임 안정성을 확보했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
              <SC.DotList>
                <strong>성과</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    페이지별로 분산되어 있던 유효성 검사 로직을 중앙 스키마로
                    관리함으로써 코드 중복을 획기적으로 제거했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    TypeScript와 연동하여 폼 데이터에 대한 강력한 타입 추론을 제공,
                    개발 중 발생할 수 있는 런타임 에러를 사전에 방지했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <SC.ProjectTitle>
              i18n 도입을 통한 다국어 지원 시스템 구축 및 유지보수성 강화
            </SC.ProjectTitle>
            <ul style={{ paddingLeft: 0, marginTop: '0.5rem' }}>
              <SC.DotList>
                <strong>배경</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    텍스트가 하드코딩되어 있거나 일부만 상수로 분리되어 있는 등
                    일관된 텍스트 관리 체계가 부재했습니다. 이로 인해 글로벌 서비스
                    확장을 위한 다국어(국제화) 대응이 어려운 상태였습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
              <SC.DotList>
                <strong>해결 방법</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    글로벌 확장을 위해 react-i18next를 기반으로 한 다국어 지원
                    아키텍처를 설계했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    공통·도메인 등으로 번역 리소스를 모듈화하여 관리
                    효율성을 높였습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>

              <SC.DotList>
                <strong>성과</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    한국어/영어 등 다국어 대응 시간을 획기적으로 단축했으며
                    비개발군(기획/번역팀)과의 협업 효율을 위해 JSON 기반의 번역 관리
                    프로세스를 정립했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    코드 내 하드코딩된 문자열을 99% 제거하여 서비스 전체의 일관성을
                    확보했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
            </ul>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <SC.ProjectTitle>
              TDS 도입을 위한 모노레포 통합 및 마이그레이션
            </SC.ProjectTitle>
            <ul style={{ paddingLeft: 0, marginTop: '0.5rem' }}>
              <SC.DotList>
                <strong>해결 방법</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    제품군 간 디자인 파편화 문제를 해결하기 위해 pnpm workspaces를
                    활용한 모노레포 환경으로의 마이그레이션을 주도했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    디자인 시스템(TDS) 도입 시 기존 제품의 UI가 깨지지 않도록 점진적
                    마이그레이션 전략을 수립하여 통합을 완료했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    TDS의 유연성을 높이기 위해 컴포넌트 조합(Composition) 패턴을
                    적극 활용하여 다양한 요구사항에 대응했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
              <SC.DotList>
                <strong>성과</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    사내 모든 제품에 걸쳐 일관된 브랜드 아이덴티티를 확립하고, 신규
                    페이지 개발 시 UI 구현 시간을 대폭 단축했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    공통 라이브러리화를 통해 프로젝트 간 코드 공유가 용이해졌으며,
                    디자인 변경 사항을 전사 제품에 동시 반영할 수 있는 체계를
                    구축했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
            </ul>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <SC.ProjectTitle>
              Next.js 서버-클라이언트 렌더링 불일치(Hydration Error) 해결
            </SC.ProjectTitle>
            <ul style={{ paddingLeft: 0, marginTop: '0.5rem' }}>
              <SC.DotList>
                <strong>배경</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    LNB 메뉴의 펼침 상태와 같이 로컬 스토리지(LocalStorage)에 저장된
                    값을 참조하는 UI에서 서버와 클라이언트의 초기 렌더링 결과가
                    달라 발생하는 Hydration Error를 경험했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>
              <SC.DotList>
                <strong>해결 방법</strong>
                <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                  <SC.MarkerList>
                    커스텀 훅을 통해 마운트(Mount) 여부를 감지하여 클라이언트
                    사이드에서만 상태를 동기화하도록 제어하고 필요 시 Dynamic
                    Import(SSR: false)를 도입하여 렌더링 안정성을 확보했습니다.
                  </SC.MarkerList>
                </ul>
              </SC.DotList>

            </ul>
          </div>

        </SC.Wrapper >
      </SC.ProjectSection >
    </section >
  );
}

export default Contribution;
