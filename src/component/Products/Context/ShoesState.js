import { useState } from "react";
import { SHOES_DATA } from "../../../constants/shoesData";
import ShoeContext from "./ShoeContext";

const ShoeState = (props) => {
  const initialData = SHOES_DATA;
  const [data, setData] = useState(initialData);

  const search_shoes = (searchTerm) => {
    data.filter((val) =>
      searchTerm === ""
        ? val
          ? val.brand.toLowerCase().includes(searchTerm.toLowerCase())
          : val
        : val
    );
    // Render the search results
    setData(data);
    console.log(data);
  };

  return (
    <ShoeContext.Provider value={{ data, search_shoes }}>
      {props.children}
    </ShoeContext.Provider>
  );
};
export default ShoeState;
