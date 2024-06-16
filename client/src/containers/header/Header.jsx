import React, { useEffect } from 'react';
import './header.css';
import { Navbar } from './../../components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logo from './../../assets/img/logo.png';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    gsap.to('.app__header', {
      padding: '0',
      scrollTrigger: {
        trigger: '.app__header',
        start: 'top top',
        end: '+=300px',
        scrub: true,
      }
    });

    // The scroll animation for the first h4
    gsap.to('.app__header-title h4:first-of-type', {
      x: '-15%',
      scrollTrigger: {
        trigger: '.app__header',
        start: 'top top',
        end: '+=300px',
        scrub: true,
      }
    });

    // The scroll animation for the second h4
    gsap.to('.app__header-title h4:nth-of-type(2)', {
      x: '15%',
      scrollTrigger: {
        trigger: '.app__header',
        start: 'top top',
        end: '+=300px',
        scrub: true,
      }
    });

    // Animation for the navbar
    gsap.to(".app__header-wrapper", {
      position: "fixed",
      top: "0px",
      left: '50%',
      zIndex: 10,
      transform: "translateX(-50%)",
      scrollTrigger: {
        trigger: '.app__header',
        start: '100px',
        end: '100px',
        scrub: true,
      }
    });
    // Animation for the empty span
    gsap.to(".empty-span", {
      display: "block",
      scrollTrigger: {
        trigger: '.app__header',
        start: '100px',
        end: '100px',
        scrub: true,
      }
    });
  }, []);

  return (
    <>
      <section className='app__header'>
        <div className='app__header-container'>
          <div className='app__header-wrapper'>
            <Navbar />
          </div>
          <div className="empty-span" />
          <div className="app__header-logo">
            <img src={logo} alt="logo" className='header-logo' />
          </div>
          <div className="app__header-title">
            <h4>RESERVATIONS</h4>
            <h4>SIMPLE & RAPIDE</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
