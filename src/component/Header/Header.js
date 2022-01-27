import React, { useContext, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import shoeContext from "../Products/Context/ShoeContext";

function Header(props) {
  return (
    <div className="header">
      <div className="header__left">
        {" "}
        {/* Left side of the header which contains the company's name*/}
        <h3>Shoe.</h3>
      </div>
      <div className="header__right">
        {/* Right side of the header which contains the search input*/}
        <div className="header__rightComp">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search something here..."
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
