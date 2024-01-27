import React from 'react';
import styled from 'styled-components';
import { About, Career1, Career2, Project, Others } from 'components';
import { Routes, Route } from 'react-router-dom';
import Career3 from 'components/Career/Career3';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const A4 = styled.div`
  width: 700px;
  height: 1024px;
  padding: 3.1rem;
  border: 1px solid rgb(229, 229, 229);
  font-size: 0.9rem;
  &:not(:last-child) {
    /* margin-bottom: 2rem; */
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
            </A4>
            <A4>
              <Career2 />
            </A4>
            <A4>
              <Career3 />
              <Project />
            </A4>
            <A4>
              <Others />
            </A4>
          </Container>
        }
      />
    </Routes>
  );
}

export default App;
