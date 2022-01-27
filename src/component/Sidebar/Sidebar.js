import React, { useState } from "react";
import "./Sidebar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SIZES } from "../../SizeArray";

function Sidebar() {
  let size = null;

  const openAccordion = () => {
    const acc = document.querySelector(".accordion");
    acc.classList.toggle("active");

    /*Grabbing the material ui icon for some operations -->*/

    const svg = document.querySelector(".sidebar__categories .MuiSvgIcon-root");
    svg.classList.toggle("rotate"); // Adding a class to the icon for rotation

    /* Toggle between hiding and showing the active panel */
    let panel = acc.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    // console.log(e.target.textContent);
  };

  // Creating the slider for price range using a third party library called noUiSlider - TODO --->

  // Handle size function
  const handleSize = (e) => {
    // Setting the size boxes once they are selected

    if (e.target.style.border === "2px solid rgb(211, 232, 232)") {
      e.target.style.border = "2px solid rgb(237, 241, 241)";
    } else {
      e.target.style.border = "2px solid rgb(211, 232, 232)";
    }

    if (size === null) {
      size = e.target.textContent;
    } else {
      size = null;
    }

    console.log(size);
  };

  // Creating functionality for the slider to work -->
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const changeSlider1 = (e) => {
    setInput1(e.target.value);
  };
  const changeSlider2 = (e) => {
    setInput2(e.target.value);
  };

  return (
    <div className="sidebar">
      {/*Categories section in the sidebar*/}
      <div className="sidebar__categories">
        <button className="accordion" onClick={openAccordion}>
          Categories
        </button>

        {/* All the options wrapped inside this div*/}
        <div className="categories__options">
          <label className="container">
            Flip-flops
            <input type="radio" name="flip-flop" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Sneakers
            <input type="radio" name="flip-flop" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Lace-Up Shoes
            <input type="radio" name="flip-flop" />
            <span className="checkmark"></span>
          </label>
          <label className="container">
            Shoe Accessories
            <input type="radio" name="flip-flop" />
            <span className="checkmark"></span>
          </label>
        </div>

        {/* Arrow icon declared ---> */}
        <KeyboardArrowDownIcon />
      </div>

      <div className="sidebar__price">
        <h2>Price Range</h2>

        <div className="slider">
          <input
            id="slider-1"
            type="range"
            min={0}
            max={1500}
            value={input1}
            onChange={changeSlider1}
          />
          <input
            id="slider-2"
            type="range"
            min={0}
            max={1500}
            value={input2}
            onChange={changeSlider2}
          />
        </div>
      </div>
      <div className="sidebar__size">
        <h2>Size</h2>
        <div className="sidebar__sizeBoxes">
          {SIZES.map((item) => (
            <p key={item} className="size__item" onClick={handleSize}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
