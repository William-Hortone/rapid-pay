import React, { useEffect } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  // useEffect(() => {
  //   // Change position of .app__nav-links at 300px scroll
  //   gsap.to(".app__nav-links", {
  //     position: "fixed",
  //     top: "70px",
  //     scrollTrigger: {
  //       trigger: ".app__header",
  //       start: "top top+=300px",
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // }, []);

  return (
    <nav className="app__nav">
      <h2 className="app__logo">RapidPay</h2>
      <ul className="app__nav-links">
        <li>
          <NavLink className="app__nav-link">Accueil</NavLink>
        </li>
        <li>
          <NavLink className="app__nav-link">Hotels</NavLink>
        </li>
        <li>
          <NavLink className="app__nav-link">Transports</NavLink>
        </li>
        <li>
          <NavLink className="app__nav-link">A propos</NavLink>
        </li>
        <li>
          <NavLink className="app__nav-link">Services</NavLink>
        </li>
      </ul>
      <Button className="login-btn" variant="contained">Contained</Button>
    </nav>
  );
};

export default Navbar;
