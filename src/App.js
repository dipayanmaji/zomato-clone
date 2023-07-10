import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import NotFound from './pages/NotFound/NotFound';
import Cart from './pages/Cart/Cart';
import axios from 'axios';
import { SERVER_URL } from './utils/config/config';

function App() {
  const [filterType, setFilterType] = useState("");

  //call an api for activate the free backend server
  useEffect(() => {
    const activateBackendServer = async () => {
      await axios.get(SERVER_URL + "/api/auth/users");
    }
    activateBackendServer();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home filterType={filterType} setFilterType={setFilterType} />} />
        <Route path={'/kolkata'} element={<Home filterType={filterType} setFilterType={setFilterType} />} />
        <Route path={'/kolkata/:restaurant/order/:id'} element={<Restaurant />} />
        <Route path={'/checkout'} element={<Cart />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;