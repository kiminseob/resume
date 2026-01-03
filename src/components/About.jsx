import React from 'react';
import SC from 'components/styled/common';

function About() {
  return (
    <>
      <SC.HeaderContainer>
        <SC.ProfileImage src="/images/profile.png" alt="Profile" />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
          <SC.IntroHeader style={{ margin: 0, fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            안녕하세요.
          </SC.IntroHeader>
          <SC.IntroHeader style={{ margin: 0, fontSize: '1.5rem' }}>
            프론트엔드 개발자 김인섭입니다.
          </SC.IntroHeader>
          <SC.MyInfo style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            <div>
              <a href="https://github.com/kiminseob" target="_blank" style={{ textDecoration: 'none', color: '#666' }}>
                Github
              </a>
            </div>
            <div style={{ color: '#ccc' }}>|</div>
            <div>
              <a href="mailto:kis6473@naver.com" style={{ textDecoration: 'none', color: '#666' }}>
                Email
              </a>
            </div>
            <div style={{ color: '#ccc' }}>|</div>
            <div>
              <a href="https://profile.inseop.pe.kr/" target="_blank" style={{ textDecoration: 'none', color: '#666' }}>
                Portfolio
              </a>
            </div>
          </SC.MyInfo>
        </div>

      </SC.HeaderContainer>
      <SC.Aside>
        일상에 가치를 더하는 서비스를 만드는 데 큰 보람을 느낍니다. 단순히
        화면을 구성하는 것을 넘어 사용자의 경험을 고려한 UI/UX 설계와 구현에
        깊은 흥미를 가지고 있습니다.
      </SC.Aside>
      <SC.Divider />
    </>
  );
}

export default About;
