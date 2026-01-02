import React from 'react';
import SC from 'components/styled/common';

function Contribution() {
  return (
    <section>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Company>프로젝트 개선</SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.Column>
              <SC.Row>
                <ul>
                  <SC.Wrapper>
                    <SC.List>
                      <strong>
                        Zod 도입을 통한 폼 유효성 검사 개선
                      </strong>
                      <SC.DotList>
                        <strong>배경</strong>
                        <SC.MarkerList>
                          기존 폼 유효성 검사 로직은 각 페이지에 개별적으로
                          구현되어 코드 중복과 가독성 저하 문제가 있었습니다.
                          이를 해결하기 위해 Zod 라이브러리를 도입하여 스키마
                          기반의 유효성 검사 체계를 구축했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>문제 해결 과정</strong>
                        <SC.MarkerList>
                          기존의 명령형(Imperative) 유효성 검사 방식에서 선언적(Declarative) 방식으로 전환하기 위해 Zod 스키마를 설계했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          복잡한 중첩 객체 및 배열 형태의 데이터 구조에 대응하는 커스텀 검증 로직을 작성하고, 이를 React Hook Form의 resolver와 연동하여 런타임 안정성을 확보했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>성과</strong>
                        <SC.MarkerList>
                          페이지별로 분산되어 있던 유효성 검사 로직을 중앙 스키마로 관리함으로써 코드 중복을 획기적으로 제거했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          TypeScript와 연동하여 폼 데이터에 대한 강력한 타입 추론을 제공, 개발 중 발생할 수 있는 런타임 에러를 사전에 방지했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>

                    <SC.List>
                      <strong>
                        i18n 도입을 통한 다국어 지원 및 상수 관리 체계화
                      </strong>
                      <SC.DotList>
                        <strong>문제 해결 과정</strong>
                        <SC.MarkerList>
                          글로벌 확장을 위해 react-i18next를 기반으로 한 다국어 지원 아키텍처를 설계했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          단순 텍스트 번역을 넘어 날짜, 숫자 포맷팅 등 국가별 로케일 설정을 자동화하고, 번역 파일 로드 시의 성능 최적화를 위해 Lazy Loading을 적용했습니다.
                        </SC.MarkerList>
                      </SC.DotList>

                      <SC.DotList>
                        <strong>성과</strong>
                        <SC.MarkerList>
                          한국어/영어 등 다국어 대응 시간을 획기적으로 단축했으며, 비개발군(기획/번역팀)과의 협업 효율을 위해 JSON 기반의 번역 관리 프로세스를 정립했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          코드 내 하드코딩된 문자열을 99% 제거하여 서비스 전체의 일관성을 확보했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>

                    <SC.List>
                      <strong>
                        TDS(Tmaxsoft Design System) 도입을 위한 모노레포 이전
                      </strong>
                      <SC.DotList>
                        <strong>문제 해결 과정</strong>
                        <SC.MarkerList>
                          제품군 간 디자인 파편화 문제를 해결하기 위해 pnpm workspaces를 활용한 모노레포 환경으로의 마이그레이션을 주도했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          디자인 시스템(TDS) 도입 시 기존 제품의 UI가 깨지지 않도록 점진적 마이그레이션 전략을 수립하여 통합을 완료했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          TDS의 유연성을 높이기 위해 컴포넌트 조합(Composition) 패턴을 적극 활용하여 다양한 요구사항에 대응했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>성과</strong>
                        <SC.MarkerList>
                          사내 모든 제품에 걸쳐 일관된 브랜드 아이덴티티를 확립하고, 신규 페이지 개발 시 UI 구현 시간을 대폭 단축했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          공통 라이브러리화를 통해 프로젝트 간 코드 공유가 용이해졌으며, 디자인 변경 사항을 전사 제품에 동시 반영할 수 있는 체계를 구축했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>
                    <SC.List>
                      <strong>
                        Next.js 서버-클라이언트 렌더링 불일치(Hydration Error) 해결
                      </strong>
                      <SC.DotList>
                        <strong>문제 상황</strong>
                        <SC.MarkerList>
                          프로젝트 초기, 브라우저 스토리지나 실시간 데이터를 참조하는 컴포넌트에서 서버와 클라이언트의 렌더링 결과가 달라 발생하는 Hydration Error를 다수 경험했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>해결 방법</strong>
                        <SC.MarkerList>
                          useEffect를 활용해 마운트 이후에만 브라우저 전용 로직이 실행되도록 제어하고, Dynamic Import와 No-SSR 패턴을 도입하여 렌더링 안정성을 확보했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>성과</strong>
                        <SC.MarkerList>
                          사용자 경험을 저해하는 화면 깜빡임과 런타임 에러를 완전히 제거했으며, 안정적인 SEO 대응이 가능한 렌더링 아키텍처를 수립했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>

                    <SC.List>
                      <strong>
                        pnpm 워크스페이스 기반 의존성 충돌 및 빌드 최적화
                      </strong>
                      <SC.DotList>
                        <strong>문제 상황</strong>
                        <SC.MarkerList>
                          모노레포 환경에서 여러 하위 프로젝트 간 공통 라이브러리 버전이 엉키면서 빌드가 실패하거나, 특정 수정사항이 반영되지 않는 이슈가 발생했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>해결 방법</strong>
                        <SC.MarkerList>
                          pnpm의 엄격한 의존성 관리 방식을 활용하여 유령 의존성(Ghost Dependency) 문제를 해결하고, pnpm-workspace.yaml 및 peerDependencies 체계를 정립했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>성과</strong>
                        <SC.MarkerList>
                          의존성 충돌로 인한 빌드 오류를 제로화했으며, 중복된 패키지 설치를 줄여 빌드 속도 향상과 저장소 용량 최적화를 동시에 달성했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>
                  </SC.Wrapper>
                </ul>
              </SC.Row>
            </SC.Column>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Contribution;
