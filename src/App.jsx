
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
import WhatWeDo from '@/pages/WhatWeDo';
import ModuleDetail from '@/pages/ModuleDetail';
import Purpose from '@/pages/Purpose';
import Comparison from '@/pages/Comparison';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/modules/:id" element={<ModuleDetail />} />
        
        {/* Legacy Redirects */}
        <Route path="/modules/intelligence" element={<Navigate to="/modules/module-1" replace />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
