import React from 'react'
import './home.css';
import {Booking, Header} from './../../containers';

const Home = () => {
  return (
    <>

    <div className='app__home'>
      <Header />
      <Booking />
    </div>
    </>
  )
}

export default Home