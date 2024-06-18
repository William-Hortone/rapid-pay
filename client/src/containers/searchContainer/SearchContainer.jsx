import React, { useState } from "react";
import "./searchContainer.css";
import { SearchMenuHotel, SearchMenuTransport } from "../../components";

const SearchContainer = () => {
  const [activeOption, setActiveOption] =useState(true)


  const handleClick = (status) => {
    setActiveOption(status)
  }
  return (
    <>
      <section className="app__searchContainer">
        <div className="app__searchC-container">
        {activeOption &&  <SearchMenuHotel />}
        {!activeOption &&  <SearchMenuTransport />}

            

          <div className="wrapper-options">
            <button onClick={() => handleClick(true)} className={activeOption? "option active-option":"option"}>Hotels</button>
            <button onClick={() => handleClick(false)} className={!activeOption? "option active-option":"option"}>Transports</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchContainer;
