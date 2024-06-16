import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {About, Home, Services, Transport, Hotels} from './pages';
import './App.css';


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>

 
    </>
  );
};

export default App;
