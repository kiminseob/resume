import React from 'react';
import styled from 'styled-components';
import {
  About,
  Career1,
  Career2,
  Activity,
  Library,
  Contribution,
  Project,
} from 'components';
import SC from './components/styled/common';
import { Routes, Route } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const A4 = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: transparent;
  padding: 4rem 2rem;
  margin: 0;
  
  @media print {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

const UtilityBar = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 0.8rem;
  z-index: 1000;

  @media print {
    display: none;
  }

  @media (max-width: 850px) {
    top: 1rem;
    right: 1rem; 
  }
`;

const UtilityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  color: #555;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    color: #222;
    border-color: #ccc;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

function App() {
  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크가 복사되었습니다!');
    });
  };

  return (
    <>
      <UtilityBar>
        <UtilityButton onClick={handlePrint} title="PDF로 저장 / 인쇄">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </UtilityButton>
        <UtilityButton onClick={handleCopyLink} title="링크 복사">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </UtilityButton>
      </UtilityBar>

      <Routes>
        <Route
          path="/*"
          element={
            <Container>
              <A4>
                <About />
                <Career1 />
                <Career2 />
                <Contribution />
                {/* <Career3 /> */}
                <Project />
                <SC.Divider />
                <Library />
                <SC.Divider />
                <Activity />
                {/* <Others3 /> */}
              </A4>
            </Container>
          }
        />
      </Routes>
    </>
  );
}

export default App;
