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
                스스로 만족할 수 있는 서비스를 만들기 위해 적극적으로 소통하고
                의견을 냅니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                우물 안의 개구리는 더 이상 성장하지 못합니다. 나와 다른 생각을
                언제나 환영합니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                건강한 육체에 건강한 정신이 깃든다! 주 5일 운동을 하고 있습니다.
              </SC.DotList>
            </SC.Row>
            <SC.Row>
              <SC.DotList>
                생산적인 활동을 하지 않으면 몸이 간지럽습니다. 글쓰기, 개발,
                독서, 운동을 좋아합니다.
              </SC.DotList>
            </SC.Row>
          </SC.Wrapper>
        </SC.Column>
      </SC.Row>
    </section>
  );
}

export default Others3;
