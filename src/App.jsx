import React from 'react';
import styled from 'styled-components';
import { About, Career, Project, Others } from 'components';

const Container = styled.div`
  padding-top: 2rem;
`;

const A4 = styled.div`
  width: 700px;
  height: 1024px;
  margin: 3rem;
  padding: 3.1rem;
  border: 1px solid rgb(229, 229, 229);
  font-size: 0.9rem;
  margin: auto;
`;

function App() {
  return (
    <>
      <Container>
        <A4>
          <About />
          <Career />
          <Project />
        </A4>
        <A4>
          <Others />
        </A4>
      </Container>
    </>
  );
}

export default App;
