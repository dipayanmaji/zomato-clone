import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/kolkata'} element={<Home />} />
        <Route path={'/kolkata/:restaurant'} element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;