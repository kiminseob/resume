import React from 'react';
import SC from '../styled/common';

function Library() {
  return (
    <section>
      <div style={{ marginBottom: '1rem' }}>
        <SC.Company style={{ width: 'auto' }}>라이브러리</SC.Company>
      </div>

      <SC.ProjectSection>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <SC.ProjectTitle style={{ marginBottom: 0 }}>nugu-kit</SC.ProjectTitle>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#555',
              backgroundColor: '#eee',
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: 500,
            }}
          >
            Backend
          </span>
          <a href="https://www.npmjs.com/package/nugu-kit" target="_blank" style={{ paddingTop: '3px' }}>
            <SC.Icon src="icon/npm.svg" />
          </a>
        </div>
        <SC.Wrapper>
          <SC.Stack>Node.js · Express</SC.Stack>
        </SC.Wrapper>
        <SC.Description>
          AI 스피커 NUGU의 백엔드 서비스를 위한 라이브러리입니다.
          <br />
          NUGU API 규격에 맞춰 HTTP 요청/응답 kit를 제공합니다.
        </SC.Description>
      </SC.ProjectSection>

      <SC.ProjectSection>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <SC.ProjectTitle style={{ marginBottom: 0 }}>react-multi-checkbox-tree</SC.ProjectTitle>
          <span
            style={{
              fontSize: '0.75rem',
              color: '#555',
              backgroundColor: '#eee',
              padding: '2px 6px',
              borderRadius: '4px',
              fontWeight: 500,
            }}
          >
            Frontend
          </span>
          <a href="https://www.npmjs.com/package/react-multi-checkbox-tree" target="_blank" style={{ paddingTop: '3px' }}>
            <SC.Icon src="icon/npm.svg" />
          </a>
        </div>
        <SC.Wrapper>
          <SC.Stack>React.js · TypeScript</SC.Stack>
        </SC.Wrapper>
        <SC.Description>
          트리 구조에서 다수의 체크박스 상태를 관리할 수 있는
          라이브러리입니다.
        </SC.Description>
      </SC.ProjectSection>
      <SC.Wrapper />
    </section>
  );
}

export default Library;
