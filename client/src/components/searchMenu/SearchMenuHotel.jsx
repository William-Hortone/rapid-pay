import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BtnPrimary from "../button/BtnPrimary";
import "./searchMenu.css";
import { MdOutlineBedroomParent } from "react-icons/md";

const SearchMenuHotel = () => {
  return (
    <>
      <div className="app__searchMenuContainer">
        <div className="searchMenu-Wrapper">
          <div className="searchMenu-Wrapper-header">
            <h2>Chercher les chambres disponibles</h2>

            <div>
              <label htmlFor="">Par Hotels</label>
              <select name="" id="">
                <option value="">Benedictat Hotel</option>
                <option value="">Benedictat Hotel</option>
                <option value="">Benedictat Hotel</option>
                <option value="">Benedictat Hotel</option>
              </select>
            </div>
          </div>

          <form action="">
            <div className="searchMenu-Content">
              <h4>Date d’entree</h4>
              <TextField
                id="standard-basic"
                placeholder="Date d'entree"
                variant="standard"
              />
            </div>
            <div className="searchMenu-Content numberOfRoom">
              <h6>Nombre de nuits : 2</h6>
              <MdOutlineBedroomParent size={24} color="black" />
            </div>

            <div className="searchMenu-Content">
              <h4>Date d’entree</h4>
              <TextField
                id="standard-basic"
                placeholder="Date d'entree"
                variant="standard"
              />
            </div>
            <BtnPrimary title="Chercher" type='submit' />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchMenuHotel;
