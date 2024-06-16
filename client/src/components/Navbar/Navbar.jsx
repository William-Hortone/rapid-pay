import Button from "@mui/material/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {


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
      <Button className="login-btn" variant="contained">Se connecter</Button>
    </nav>
  );
};

export default Navbar;
