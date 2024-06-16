import React from 'react'
import './header.css';
import {Navbar} from './../../components';

import logo from './../../assets/img/logo.png';
const Header = () => {
  return (
    <>

    <section className='app__header'>
      <div className='app__header-container'>
        <div className='app__header-wrapper'>
          <Navbar />
        </div>
      
        <div className="app__header-logo">
          <img src={logo} alt="logo" className='header-logo' />
        </div>

        <div className="app__header-title">
          <h4>RESERVATIONS </h4>
          <h4>SIMPLE & RAPIDE</h4>
        </div>


      </div>
    </section>
    </>
  )
}

export default Header