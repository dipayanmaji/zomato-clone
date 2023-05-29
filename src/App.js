import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/kolkata'} element={<Home />} />
        <Route path={'/kolkata/:restaurant/order/:id'} element={<Restaurant />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;