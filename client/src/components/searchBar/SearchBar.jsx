import { useState } from "react";
import "./SearchBar.scss";

const types =["Buy", "Sell"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
            <button key={type} onClick={()=>switchType(type)} className={query.type===type?"active": ""} >{type}</button>
        ))}
      </div>
      <form action="">
        <input type="text" name="location" id="" placeholder="cityLocation" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          id=""
          placeholder="minPrice"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          id=""
          placeholder="maxPrice"
        />
        <button>
          <img src="/search.png" alt="searchicon"></img>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
