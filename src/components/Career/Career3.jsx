import React from 'react';
import SC from 'components/styled/common';

function Career3() {
  return (
    <section>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
      </SC.Row>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Company>리보이스</SC.Company>
          <SC.Description>개발팀장 / 백엔드 개발자</SC.Description>
          <p>(2019.09.01 ~ 2020.06.30)</p>
          <p>- 약 10개월</p>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.RowHeader>
              한진 토파스여행정보와 항공권 음성 검색 솔루션 개발(한진관광,
              롯데JTB)
            </SC.RowHeader>
          </SC.Row>
          <SC.Wrapper>
            <SC.Stack>Node.js, Express, nugu-kit</SC.Stack>
          </SC.Wrapper>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                  <SC.MarkerList>
                    SKT AI 음성 스피커 NUGU를 활용한 서비스로 실시간 항공권을
                    음성으로 손쉽게 검색하고 가장 저렴한 여행 날짜를 추천하는 등
                    항공권을 음성 검색으로 제공하는 서비스 입니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    항공권 음성 검색 프로세스를 설계하고 주요 비즈니스 로직을
                    담당했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>개발 기간</SC.Wrapper>
                  <SC.MarkerList>2020.01 ~ 2020.05 (5개월)</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.List>
                <SC.Wrapper>성과</SC.Wrapper>
                <SC.MarkerList>
                  2020.09 롯데제이티비, 한진관광 NUGU play 앱 런칭 및 항공권
                  검색 사이트 유입률 증대
                </SC.MarkerList>
                <SC.MarkerList>
                  한국정보통신학회 원고(음성 인터페이스를 활용한 AI 대화형
                  항공권 검색 시스템 개발) 작성을 통해 자연스러운 대화형 음성
                  서비스를 제공하는 기반을 마련
                </SC.MarkerList>
                <SC.MarkerList>
                  <a
                    href="https://www.npmjs.com/package/javascript-state-machine"
                    target="_blank"
                  >
                    javascript-state-machine
                  </a>
                  을 도입해 사용자의 발화 상태 관리에 대한 유지보수, 확장성,
                  에러 관리 등 주요 로직 개선
                </SC.MarkerList>
              </SC.List>
            </ul>
          </SC.Row>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Career3;
