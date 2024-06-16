import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {About, Home, Services, Transport, Hotels} from './pages';
import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Animation for the navbar on scroll 
    gsap.to(".app__logo", {
      display: "none",
      scrollTrigger: {
        trigger: '.app__header',
        start: '100px',
        end: '100px',
        scrub: true,
      }
    });

    gsap.to('.login-btn', {
      display: 'none',
      scrollTrigger: {
        trigger: '.app__header',
        start: '100px top',
        end: '100px top',
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
  }, []);


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
