
import * as React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Navbar = () => {
  return (
    <>

    <nav className='app__nav'>
        <h2 className="app__logo">RapidPay</h2>

        <ul className="app__nav-links">
            <li> <NavLink className="app__nav-link">Accueil</NavLink> </li>
            <li> <NavLink className="app__nav-link">hotels</NavLink></li>
            <li> <NavLink className="app__nav-link">Transports</NavLink></li>
            <li> <NavLink className="app__nav-link">A propos</NavLink></li>
            <li> <NavLink className="app__nav-link">Services</NavLink></li>
        </ul>
        <Button variant="contained">Contained</Button>
    </nav>
    </>
  )
}

export default Navbar