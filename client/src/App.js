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

     // Pin the description section
    //  gsap.to('.app__description', {
    //   position:'fixed',
    //   top: 0,
    //   left: 0,
    //   scrollTrigger: {
    //     trigger: '.app__description',
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     pin: true,
    //     scrub: true,
    //     markers: true, // Enable markers for debugging
    //   }
    // });

    // Scroll Footer on top of Description
    // gsap.to('.app__footer', {
    //   scrollTrigger: {
    //     trigger: '.app__description',
    //     start: 'bottom bottom', // Start when the bottom of Description reaches the bottom of the viewport
    //     end: 'bottom top', // End when the top of the Footer reaches the top of the viewport
    //     // toggleActions: 'play none none reverse',
    //     // Optional: To ensure smooth transitions
    //     scrub: true,
    //     markers: true,
    //   }
    // });
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
