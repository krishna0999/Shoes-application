import React, { useContext, useEffect, useState } from "react";
import shoeContext from "./Context/ShoeContext";
import "./Products.css";

function Products({ data }) {
  const [value, setValue] = useState(null);

  console.log(data);

  /*Display data according to the users choice*/
  const dropdownItem = (e) => {
    setValue(e.target.value);

    if (value === "price") {
      data.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (value === "latest") {
      data.sort((a, b) => {
        let da = new Date(a.date),
          db = new Date(b.date);
        return da - db;
      });
    }
  };

  return (
    <div className="container1">
      {/*Header for the products page ---*/}
      <div className="container1__tophead">
        <h1>New Arrivals</h1>
        <select name="cars" id="cars" onChange={dropdownItem}>
          <option value="price">Sort by latest</option>
          <option value="latest">Sort by price</option>
        </select>
      </div>

      <div className="products">
        {/*mapping through the filtered data received from app.js component --->*/}
        {data.map((item) => (
          <div className="products__single">
            <div className="products__singleHeading">
              <h3>{item.name}</h3>
              <h2>{item.brand}</h2>
            </div>
            <div className="products__singleMiddle">
              <img src={item.image_url} alt="Main pictures of the product" />
            </div>
            <div className="products__singleBottom">
              <div className="products__singleBottomPrice">
                <h3>Price</h3>
                <h2>${item.price}</h2>
              </div>
              <div className="products__singelBottomImages">
                <img
                  src={item.image__urlSide1}
                  alt="Small size images"
                  style={{ marginRight: "1vw" }}
                />
                <img src={item.image__urlSide2} alt="Small size images" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
