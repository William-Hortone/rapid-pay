import React, { useEffect } from "react";
import "./description.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Description = () => {
    useEffect(() => {
        // Pin the description when it enters the viewport
        gsap.to(".app__description", {
            zIndex: 10,
       position:'fixed',
       top:0,
            scrollTrigger: {
              trigger: '.app__description',
              start: '10px',
              end: '100vh',
              scrub: true,
            }
          });
      }, []);
  return (
    <>
      <div className="app__description">
        <h2>RApiDPay</h2>
        <h4>RESERVATIONS  <br/> SIMPLE & RAPIDE</h4>
      </div>
    </>
  );
};

export default Description;
