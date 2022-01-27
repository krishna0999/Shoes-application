import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import ShoeState from "./component/Products/Context/ShoesState";
import Products from "./component/Products/Products";
import Sidebar from "./component/Sidebar/Sidebar";
import { SHOES_DATA } from "./constants/shoesData";

function App() {
  const shoe_data = SHOES_DATA;
  const [searchField, setSearchField] = useState("");

  //filtering shoes according to users input
  const filteredData = shoe_data.filter(
    (item) =>
      item.brand.toLowerCase().includes(searchField.toLowerCase()) ||
      item.name.toLowerCase().includes(searchField.toLowerCase()) ||
      item.category.toLowerCase().includes(searchField.toLowerCase()) ||
      item.color.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    // <ShoeState>
    <div className="App">
      <Header handleChange={(e) => setSearchField(e.target.value)} />
      <div className="app__container">
        <aside id="sidebar">
          {/*The sidebar which has all the filters*/}
          <Sidebar />
        </aside>

        {/*Creating a vertical divider*/}
        <div className="vertical_divider"></div>

        <main id="products">
          {/*Products listed will be displayed in this part by passing the already filtered data through here*/}
          <Products data={filteredData} />
        </main>
      </div>
    </div>
    // </ShoeState>
  );
}

export default App;
