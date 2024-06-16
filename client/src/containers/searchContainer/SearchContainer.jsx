import React from 'react'
import './searchContainer.css';
import { SearchMenuHotel } from '../../components';

const SearchContainer = () => {
  return (
   <>
    <section className="app__searchContainer">
        <div className="app__searchC-container">
          <SearchMenuHotel />
        </div>
    </section>
   </>
  )
}

export default SearchContainer