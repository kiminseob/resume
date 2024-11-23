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
          <SC.Description>백엔드 개발자</SC.Description>
          <SC.Description>(19.09.01 ~ 20.06.30)</SC.Description>
          <SC.Description>- 약 10개월</SC.Description>
        </SC.Column>
        <SC.Column>
          <SC.Row>
            <SC.RowHeader>
              AI 스피커를 활용한 항공권 검색 서비스 개발
            </SC.RowHeader>
          </SC.Row>
          <SC.Wrapper>
            <SC.Stack>Node.js, Express, Redis</SC.Stack>
          </SC.Wrapper>
          <SC.Row>
            <ul>
              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>프로젝트 소개</SC.Wrapper>
                  <SC.MarkerList>
                    AI 음성 스피커 NUGU를 활용한 실시간 항공권 검색 및 추천
                    서비스입니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>담당 업무</SC.Wrapper>
                  <SC.MarkerList>
                    항공권 검색 프로세스 설계 및 백엔드 개발을 담당했습니다.
                  </SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.Wrapper>
                <SC.List>
                  <SC.Wrapper>개발 기간</SC.Wrapper>
                  <SC.MarkerList>2020.01 ~ 2020.06 (6개월)</SC.MarkerList>
                </SC.List>
              </SC.Wrapper>

              <SC.List>
                <SC.Wrapper>성과</SC.Wrapper>
                <SC.MarkerList>
                  2020.09 롯데제이티비, 한진관광 NUGU play 앱 런칭
                </SC.MarkerList>
                <SC.MarkerList>
                  {`대화형 항공권 검색 시스템 설계에 대한 `}
                  <a href="#manuscript">KIICE 원고</a>를 작성했습니다.
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
