import * as React from "react";

import TextField from "@mui/material/TextField";
import BtnPrimary from "../button/BtnPrimary";
import "./searchMenu.css";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const SearchMenuTransport = () => {
  const [value, setValue] = React.useState();
  return (
    <>
      <div className="app__searchMenuContainer">
        <div className="searchMenu-Wrapper">
          <div className="searchMenu-Wrapper-header">
            <h2>Chercher les bus disponibles</h2>

            <div>
              <label htmlFor="">Par Agences</label>
              <select name="" id="">
                <option value="">Major Transport</option>
                <option value="">Benedictat Hotel</option>
                <option value="">Benedictat Hotel</option>
                <option value="">Benedictat Hotel</option>
              </select>
            </div>
          </div>

          <form action="">
            <div className="searchMenu-Content">
              <h4>Ville de depart</h4>
              <TextField
                id="standard-basic"
                placeholder="Ville de depart"
                variant="standard"
              />
            </div>
            <div className="searchMenu-Content numberOfRoom">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker 
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                   label="Choisir une date" />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="searchMenu-Content">
              <h4>Destination</h4>
              <TextField
                id="standard-basic"
                placeholder="Votre Destination"
                variant="standard"
              />
            </div>
            <BtnPrimary title="Chercher" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchMenuTransport;
