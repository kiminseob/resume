import React from 'react';
import SC from '../styled/common';

function Others3() {
  return (
    <section>
      <SC.Divider />
      <SC.Column>
        <SC.Wrapper>
          <SC.Company>자격증 및 기타</SC.Company>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList>2018.05.25. 정보처리기사(18201130632D)</SC.DotList>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList id="manuscript">
            2020.12. 대화형 항공권 검색 시스템 설계{' '}
            <a href="http://jkiice.org/ebook/21-2/index.html" target="_blank">
              KIICE 원고(15-29p)
            </a>
          </SC.DotList>
        </SC.Wrapper>
        <SC.Wrapper>
          <SC.DotList>
            2017.03 ~ 2018.01{' '}
            <a
              href="https://post.naver.com/viewer/postView.naver?volumeNo=11262675&memberNo=5999164"
              target="_blank"
            >
              KT 모바일 퓨처리스트 대외활동
            </a>
          </SC.DotList>
        </SC.Wrapper>
        <SC.DotList>
          2019.{' '}
          <a href="https://youtu.be/BJPQihWuj9E" target="_blank">
            AI 스피커(NUGU) 개발 공모전
          </a>
        </SC.DotList>
      </SC.Column>
      <SC.Divider />
      <SC.Row>
        <SC.Column>
          <SC.Wrapper>
            <SC.Company>저는</SC.Company>
          </SC.Wrapper>
          <SC.Wrapper>
            <SC.Row>
              <SC.DotList>
                스스로 만족할 수 있는 서비스를 만들기 위해 더 나은 방법이 없는지
                고민하고 개선하기 위해 노력합니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                동료들과 함께 의견을 나누고 문제를 해결해나가는 것에 성취감과
                동기부여를 얻습니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                하루 종일 앉아있는 업무이다 보니 운동을 통해 체력을 기르고
                있습니다. 주 5일 헬스를 하고 있습니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                주어진 환경을 좀 더 효율적으로 만드는 것을 좋아합니다. 반복,
                수동적인 업무 프로세스를 최소화하고 자동화하는 것에 관심이
                있습니다.
              </SC.DotList>
            </SC.Row>
          </SC.Wrapper>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Others3;
