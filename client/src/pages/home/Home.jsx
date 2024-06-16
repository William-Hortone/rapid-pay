import React from 'react'
import './home.css';
import {SearchContainer, Header} from './../../containers';

const Home = () => {
  return (
    <>

    <div className='app__home'>
      <Header />
      <SearchContainer />
    </div>
    </>
  )
}

export default Home