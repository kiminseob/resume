import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Project, About, Others } from 'components';

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/others" element={<Others />} />
      </Routes>
    </main>
  );
}

export default Main;
