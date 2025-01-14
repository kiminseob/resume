import React from 'react';
import SC from 'components/styled/common';
import { getTotalCareerDate } from 'utils/date';

function Career1() {
  return (
    <section>
      <SC.Subject>경력</SC.Subject>
      <SC.Column style={{ gap: 20 }}>
        <Description
          company="티맥스소프트"
          role="React 프론트엔드 개발자"
          term="2021.08.01 ~ 재직중"
          totalCareerDate={getTotalCareerDate('2021.08.01')}
        />
        <Description
          company="리보이스"
          role="Node 백엔드 개발자"
          term="2019.09 ~ 2020.06"
          totalCareerDate={getTotalCareerDate('2019.09.01', '2020.06.01')}
        />
      </SC.Column>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Company>티맥스소프트</SC.Company>
          <SC.Description>프론트엔드 개발자</SC.Description>
          <SC.Description>
            {getTotalCareerDate('2021.08.01')} (재직중)
          </SC.Description>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.Column>
              <SC.Row>
                <SC.RowHeader>
                  Tmaxsoft SaaS Platform(TSP) 웹페이지 개발
                </SC.RowHeader>
              </SC.Row>
              <SC.Wrapper>
                <SC.Stack>
                  Next.js, Typescript, React Hook Form, Recoil, TanStack Query,
                  Emotion
                </SC.Stack>
              </SC.Wrapper>
              <SC.Row>
                <ul>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                      <SC.MarkerList>
                        TSP는 사내 미들웨어 제품(JEUS, WebtoB) 및 오픈소스
                        미들웨어(Apache, Nginx, Tomcat, Wildfly), DB(MySQL) 등을
                        손쉽게 배포하고 관리할 수 있는 SaaS 플랫폼입니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>담당 업무</SC.Wrapper>
                      <SC.MarkerList>
                        프로젝트 및 서비스를 관리하는 페이지를 설계하고
                        구현했습니다.
                      </SC.MarkerList>
                      <SC.MarkerList>
                        계정 관리 페이지를 개발했습니다.
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>개발 기간</SC.Wrapper>
                      <SC.MarkerList>
                        2023.08 ~ 2024.12 (1년 4개월)
                      </SC.MarkerList>
                    </SC.List>
                  </SC.Wrapper>
                  <SC.Wrapper>
                    <SC.List>
                      <SC.Wrapper>프로젝트 기여한 점</SC.Wrapper>
                      <SC.MarkerList>
                        <strong>Zod 도입을 통한 폼 유효성 검사 개선</strong>
                        <SC.DotList>
                          <strong>배경</strong>
                          <SC.DotList>
                            폼 유효성 검사 로직은 각각의 페이지에 개별적으로
                            구현되어 있었습니다. 이로 인해 유효성 검사 코드가
                            중복되고 코드 가독성 저하와 같은 문제점이
                            발생했습니다. 이를 해결하기 위해 Zod 라이브러리를
                            도입하여, 스키마 기반의 유효성 검사 체계를
                            구축했습니다.
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>개선 방법</strong>
                          <SC.DotList>
                            폼 필드의 데이터 타입과 유효성 조건을 명시적으로
                            정의한 Zod 스키마를 생성했습니다.
                          </SC.DotList>
                          <SC.DotList>
                            동일한 검증 로직은 재사용 가능하도록 모듈화하고
                            공통화 했습니다.
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>결과</strong>
                          <SC.DotList>
                            기존에 분산되어 있던 유효성 검사 로직을 스키마
                            기반으로 통합하여 코드 중복을 줄이고 가독성을 높일
                            수 있었습니다.
                          </SC.DotList>
                          <SC.DotList>
                            유효성 조건 변경 시 단일 스키마만 수정하면 되어
                            유지보수 작업이 간소화 됐습니다.
                          </SC.DotList>
                        </SC.DotList>
                      </SC.MarkerList>
                      <SC.MarkerList>
                        <strong>
                          i18n 도입을 통한 다국어 지원 및 상수 관리 체계화
                        </strong>
                        <SC.DotList>
                          <strong>배경</strong>
                          <SC.DotList>
                            글로벌 시장 확장을 고려하여 다국어 지원에 대한
                            고려를 하게 됐습니다. 이를 위해 i18n 라이브러리를
                            도입하여 다국어 지원 기반을 구축하고 상수 관리
                            체계를 개선했습니다.
                          </SC.DotList>
                        </SC.DotList>

                        <SC.DotList>
                          <strong>개선 방법</strong>
                          <SC.DotList>
                            언어별 번역 파일을 중앙에서 관리하도록 구조화
                            했습니다.
                          </SC.DotList>
                          <SC.DotList>
                            텍스트를 상수로 분리하여 코드 내 하드코딩된 문자열을
                            제거하고 번역 파일에서 동적으로 로드되도록
                            개선했습니다.
                          </SC.DotList>
                          <SC.DotList>
                            언어 전환 기능을 구현하여 사용자 환경에 따라
                            실시간으로 언어를 변경할 수 있는 유연성을
                            제공했습니다.
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>결과</strong>
                          <SC.DotList>
                            글로벌 사용자에게 동일한 경험을 제공할 수 있는
                            다국어 지원 체계를 구현할 수 있었습니다.
                          </SC.DotList>
                          <SC.DotList>
                            모든 상수를 중앙에서 관리함으로써 개발의 편리성과
                            유지 보수성을 향상시킬 수 있었습니다.
                          </SC.DotList>
                          <SC.DotList>
                            상수 관리를 체계화하여 문자열의 중복을 해소할 수
                            있었습니다.
                          </SC.DotList>
                        </SC.DotList>
                      </SC.MarkerList>
                      <SC.MarkerList>
                        <strong>
                          TDS(Tmaxsoft Design System) 도입을 위한 모노레포 이전
                          및 적용
                        </strong>
                        <SC.DotList>
                          <strong>배경</strong>
                          <SC.DotList>
                            사내 제품들이 각기 다른 UI/UX 스타일을 사용하고 있어
                            사용자 경험의 일관성이 부족했고 새로운 기능 추가나
                            디자인 변경 시 비효율적인 유지보수가 발생했습니다.
                            마침 다른 부서에서 모노레포 환경을 구축해 내부적으로{' '}
                            <strong>TDS</strong>를 구축하고 있었습니다.{' '}
                            <strong>TDS</strong> 도입을 위해서는 모노레포로
                            옮기고 기존의 컴포넌트를 변경해야 하기 때문에
                            꺼려하는 분위기 였습니다. 하지만 사내 제품의
                            통일성과 유지보수성을 강화하기 위해 모노레포로
                            도입된 <strong>TDS</strong> 활용을 적극
                            추진했습니다.
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>개선 방법</strong>
                          <SC.DotList>
                            모노레포로 저장소를 이전했습니다.
                          </SC.DotList>
                          <SC.DotList>
                            기존 컴포넌트를 점진적으로 변경하여 개발 중단 없이
                            통합 작업을 진행했습니다.
                          </SC.DotList>
                          <SC.DotList>
                            프로젝트의 요구 사항에 맞게 TDS 컴포넌트를 확장 및
                            커스터마이징 했습니다.
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>결과</strong>
                          <SC.DotList>
                            사용자에게 통일된 UI/UX를 제공하며 브랜드
                            아이덴티티를 강화할 수 있었습니다.
                          </SC.DotList>
                          <SC.DotList>
                            통합된 컴포넌트를 사용하여 코드의 중복을 제거하고
                            컴포넌트 변경 시 한 번의 수정으로 모든 프로젝트에
                            적용이 가능해졌습니다.
                          </SC.DotList>
                          <SC.DotList>
                            통합된 디자인 시스템 덕분에 팀 내 협업과 개발 속도가
                            증가하여 새로운 기능 개발에 더 많은 리소스를 집중할
                            수 있었습니다.
                          </SC.DotList>
                        </SC.DotList>
                      </SC.MarkerList>
                      <SC.MarkerList>
                        <strong>빌드 프로세스 개선 및 최적화</strong>
                        <SC.DotList>
                          <strong>배경</strong>
                          <SC.DotList>
                            기존에 구축되어 있는 자동화된 빌드 프로세스
                            파이프라인을 이용해 빌드 시간을 단축하여 효율성을
                            높이는 것을 목표로 했습니다.
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>개선 방법</strong>
                          <SC.DotList>
                            <strong>Jenkins 기반 빌드 프로세스 자동화</strong>
                            <SC.DotList>
                              GitLab의 Version TAG를 Jenkins Trigger로 설정하여,
                              매 릴리스마다 이미지가 자동으로 빌드 되도록 CI/CD
                              파이프라인을 연결했습니다.
                            </SC.DotList>
                          </SC.DotList>
                          <SC.DotList>
                            <strong>Turborepo Remote Cache 적용</strong>
                            <SC.DotList>
                              오픈소스인 turborepo-remote-cache를 서버에
                              설치하고 이를 빌드 과정에 통합하여 캐싱 기능을
                              활성화 했습니다.
                            </SC.DotList>
                          </SC.DotList>
                        </SC.DotList>
                        <SC.DotList>
                          <strong>성과</strong>
                          <SC.DotList>
                            여러 서버에서 동일한 빌드 작업이 발생할 경우, Remote
                            Cache를 통해 빌드 시간이 평균 65% 단축되어 개발
                            생산성이 크게 향상 되었습니다.
                          </SC.DotList>
                          <SC.DotList>
                            릴리스 과정의 안정성을 높이고 수고로움을 덜게
                            되었습니다.
                          </SC.DotList>
                          <SC.DotList>
                            빌드 프로세스 최적화를 통해 팀의 작업 효율성이 향상
                            되었습니다.
                          </SC.DotList>
                        </SC.DotList>
                      </SC.MarkerList>
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

const Description = (props) => {
  const { company, role, term, totalCareerDate } = props;

  const Text = ({ label, description, width }) => (
    <SC.Column
      style={{
        display: 'flex',
        position: 'relative',
        width,
      }}
    >
      <SC.Bold style={{ fontSize: 13, position: 'absolute', top: -24 }}>
        {label}
      </SC.Bold>
      {description}
    </SC.Column>
  );

  return (
    <SC.Description
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 50,
      }}
    >
      <Text label="회사" description={company} width="120px" />
      <Text label="직무" description={role} width="160px" />
      <Text label="근무 기간" description={term} width="140px" />
      <Text label="" description={totalCareerDate} />
    </SC.Description>
  );
};

export default Career1;
