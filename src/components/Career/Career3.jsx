import React from 'react';
import SC from 'components/styled/common';

function Career3() {
  return (
    <section>
      <SC.Row>
        <SC.Column>
          <SC.Company></SC.Company>
        </SC.Column>
        <SC.Column>
          <SC.Wrapper>
            <SC.List>
              개발 내용
              <SC.MarkerList>미들웨어 LifeCycle 관리</SC.MarkerList>
              <SC.MarkerList>미들웨어 설정 관리</SC.MarkerList>
            </SC.List>
          </SC.Wrapper>
          <SC.List>
            성과
            <SC.MarkerList>
              gitlab과 Jenkins 연동을 통해 CI/CD 구축하여 팀원들의 번거로운 개발
              환경 세팅 시간 50% 단축
            </SC.MarkerList>
            <SC.MarkerList>
              2023.02{' '}
              <a
                href="https://sw.tta.or.kr/product/prod_gsce_view.jsp?num=7583&pa=359f396b2a22e52c061d906ad3b8285b992d122e67128b243d66ca56052dc7af043f63cf10207b98d3aa5c5207798e22"
                target="_blank"
              >
                GS인증 1등급
              </a>{' '}
              획득
            </SC.MarkerList>
          </SC.List>
        </SC.Column>
      </SC.Row>
      <SC.Divider />
    </section>
  );
}

export default Career3;
