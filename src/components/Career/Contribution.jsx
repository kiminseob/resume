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
                      <SC.Wrapper>
                        Zod 도입을 통한 폼 유효성 검사 개선
                      </SC.Wrapper>
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
                        <strong>개선 방법</strong>
                        <SC.MarkerList>
                          폼 필드의 데이터 타입과 유효성 조건을 명시적으로
                          정의한 Zod 스키마를 생성했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          동일한 검증 로직은 모듈화하여 재사용 가능하도록
                          공통화했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>결과</strong>
                        <SC.MarkerList>
                          분산되어 있던 유효성 검사 로직을 스키마 기반으로
                          통합하여 코드 중복을 줄이고 가독성을 향상시켰습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          유효성 조건 변경 시 단일 스키마만 수정하면 되어
                          유지보수 작업이 간소화되었습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>

                    <SC.List>
                      <strong>
                        i18n 도입을 통한 다국어 지원 및 상수 관리 체계화
                      </strong>
                      <SC.DotList>
                        <strong>배경</strong>
                        <SC.MarkerList>
                          글로벌 시장 확장을 고려하여 다국어 지원이
                          필요했습니다. 이를 위해 i18n 라이브러리를 도입하여
                          다국어 기반을 구축하고 상수 관리 체계를 개선했습니다.
                        </SC.MarkerList>
                      </SC.DotList>

                      <SC.DotList>
                        <strong>개선 방법</strong>
                        <SC.MarkerList>
                          언어별 번역 파일을 중앙에서 관리하도록 구조화했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          텍스트를 상수로 분리하여 코드 내 하드코딩된 문자열을
                          제거하고 번역 파일에서 동적으로 로드되도록
                          개선했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>결과</strong>
                        <SC.MarkerList>
                          글로벌 사용자에게 일관된 경험을 제공할 수 있는 다국어
                          지원 체계를 구축했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          모든 상수를 중앙에서 관리함으로써 개발 편의성과
                          유지보수성을 향상시켰습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          체계적인 상수 관리로 문자열 중복 문제를 해소할 수
                          있었습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                    </SC.List>

                    <SC.List>
                      <strong>
                        TDS(Tmaxsoft Design System) 도입을 위한 모노레포 이전
                      </strong>
                      <SC.DotList>
                        <strong>배경</strong>
                        <SC.MarkerList>
                          사내 제품들이 각기 다른 UI/UX 스타일을 사용하면서
                          사용자 경험의 일관성이 부족했고 새로운 기능 추가나
                          디자인 변경 시 비효율적인 유지보수가 발생했습니다.
                          마침 다른 부서에서 모노레포 환경 기반으로{' '}
                          <strong>TDS</strong>를 구축하고 있었지만 도입을
                          위해서는 모노레포 전환과 기존 컴포넌트 변경이 필요해
                          부담스러운 분위기가 있었습니다. 그럼에도 사내 제품의
                          일관성과 유지보수성을 강화하기 위해 모노레포 기반의{' '}
                          <strong>TDS</strong> 활용을 적극 추진했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>개선 방법</strong>
                        <SC.MarkerList>
                          저장소를 모노레포 구조로 이전했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          기존 컴포넌트를 점진적으로 교체하여 개발 중단 없이
                          통합 작업을 진행했습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          프로젝트 요구사항에 맞게 TDS 컴포넌트를 확장하고
                          커스터마이징했습니다.
                        </SC.MarkerList>
                      </SC.DotList>
                      <SC.DotList>
                        <strong>성과</strong>
                        <SC.MarkerList>
                          사용자에게 일관된 UI/UX를 제공하며 브랜드 아이덴티티를
                          강화할 수 있었습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          통합된 컴포넌트 사용으로 코드 중복을 제거하고 변경 시
                          한 번의 수정으로 모든 프로젝트에 반영할 수 있게
                          되었습니다.
                        </SC.MarkerList>
                        <SC.MarkerList>
                          디자인 시스템 통합 덕분에 팀 내 협업과 개발 속도가
                          향상되어 새로운 기능 개발에 더 많은 리소스를 집중할 수
                          있었습니다.
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
