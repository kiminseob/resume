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
  width: 800px;
  background-color: #ffffff;
  padding: 4rem;
  margin: 3rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  font-size: 0.95rem;

  @media print {
    width: 100%;
    margin: 0;
    padding: 2rem;
    box-shadow: none;
  }
`;

function App() {
  return (
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
  );
}

export default App;
