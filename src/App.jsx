import React from 'react';
import styled from 'styled-components';
import {
  About,
  Career1,
  Career2,
  Career3,
  Project,
  Others1,
  Others2,
  Others3,
} from 'components';
import { Routes, Route } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const A4 = styled.div`
  width: 700px;
  padding: 3.1rem;
  /* border: 1px solid rgb(229, 229, 229); */
  font-size: 0.9rem;
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
              <Career1 /> <Career2 /> <Career3 />
              <Project />
              <Others1 /> <Others2 /> <Others3 />
            </A4>
          </Container>
        }
      />
    </Routes>
  );
}

export default App;
