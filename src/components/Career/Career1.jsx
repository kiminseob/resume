import React from 'react';
import SC from 'components/styled/common';
import { getTotalCareerDate } from 'utils/date';

function Career1() {
  return (
    <section>
      <SC.Subject>경력</SC.Subject>
      <SC.Column style={{ gap: 40, marginBottom: 40, padding: '1rem 0' }}>
        <Description
          company="티맥스소프트"
          role="웹 프론트엔드 개발자"
          term="2021.08.01 ~ 재직중"
          totalCareerDate={getTotalCareerDate('2021.08.01')}
        />
        <Description
          company="리보이스"
          role="백엔드 개발자"
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
            <SC.RowHeader>JEUS Admin 페이지 개발</SC.RowHeader>
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
                    JEUS를 관리·운영할 수 있는 Admin 페이지 입니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    JEUS는 국내 시장 점유율 1위 애플리케이션 서버(WAS)로 대규모
                    기업 환경에서 안정적인 미들웨어 운영을 지원합니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>팀 구성</SC.Wrapper>
                  <SC.MarkerList>
                    프론트엔드 2명, 백엔드 1명, 디자인 1명, 기획 1명
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    서버, 클러스터, 도메인 설정 및 애플리케이션 배포, 계정/권한
                    관리 등 주요 기능을 UI로 제공하여 운영자가 보다 직관적이고
                    효율적으로 시스템을 제어할 수 있도록 했습니다.
                  </SC.MarkerList>
                  <SC.MarkerList>
                    복잡하고 반복적인 설정 구조의 유지보수를 위해 Config UI
                    설계를 하여 재사용성에 주력했으며 이를 통해 개발 효율성을
                    상당 부분 개선했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>주요 성과</SC.Wrapper>
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
                    획득에 기여
                  </SC.MarkerList>
                  <SC.MarkerList>
                    수백 개의 설정 항목이 포함된 복잡한 WAS 리소스 관리 화면을 사용자 친화적인 워크플로우로 재구성하여 운영 효율성 제고
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
      <SC.Bold
        style={{
          fontSize: 11,
          position: 'absolute',
          top: -24,
          color: '#888',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </SC.Bold>
      <div style={{ fontWeight: 500, color: '#111' }}>{description}</div>
    </SC.Column>
  );

  return (
    <SC.Description
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 60,
      }}
    >
      <Text label="회사" description={company} width="140px" />
      <Text label="직무" description={role} width="180px" />
      <Text label="근무 기간" description={term} width="160px" />
      <Text label="" description={totalCareerDate} />
    </SC.Description>
  );
};

export default Career1;
