import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BtnPrimary from "../button/BtnPrimary";
import './searchMenu.css'

const SearchMenuHotel = () => {
  return (
    <>
      <div className="app__searchMenuContainer">
        <div className="searchMenu-Wrapper">
        <form action="">

          <div className="searchMenu-Content">
            <h4>Date d’entree</h4>
            <TextField
              id="standard-basic"
              placeholder="Date d'entree"
              variant="standard"
            />
          </div>
          <div className="searchMenu-Content">
            <h4>Date d’entree</h4>
            <TextField
              id="standard-basic"
              placeholder="Date d'entree"
              variant="standard"
            />
          </div>
          <BtnPrimary title='Chercher' />
        </form>
        </div>
      </div>
    </>
  );
};

export default SearchMenuHotel;
