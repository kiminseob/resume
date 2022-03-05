import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Project, About, Others } from 'components';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/others" element={<Others />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </main>
  );
}

export default Main;
