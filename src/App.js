import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './pages/counter';
import Login from './pages/login';

function App() {
  return (
    <Router> {/* ✅ This must wrap everything */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
