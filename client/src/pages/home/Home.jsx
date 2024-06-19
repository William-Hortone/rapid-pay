import React from 'react'
import './home.css';
import {SearchContainer, Header, Recommendation, Description} from './../../containers';
import { Footer } from '../../components';

const Home = () => {
  return (
    <>

    <div className='app__home'>
      <Header />
      <SearchContainer />
      <Recommendation />
      <Description />
      <Footer />
    </div>
    </>
  )
}

export default Home