import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Project, About, Others } from 'components';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </main>
  );
}

export default Main;
