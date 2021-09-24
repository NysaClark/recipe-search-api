import React from "react";
import { useGlobalContext } from "../util/context";

const SearchForm = () => {
  const {query, setQuery} = useGlobalContext();
  
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Recipes</h2>
      <input type="text" className="form-input" value={query} placeholder="Search..." onChange={(e) => setQuery(e.target.value)} />
      {/* <input type="text" className="form-input" value="" placeholder="Exclude..." onChange={(e) => setQuery(`excluded=${e.target.value}`)} /> */}
    </form>
  )
};

export default SearchForm;
