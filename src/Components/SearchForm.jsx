import React from "react";
import { useGlobalContext } from "../util/context";

const SearchForm = () => {
  const {query, error, setQuery} = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Recipes</h2>
      <input type="text" className="form-input" value={query} onChange={(e) => setQuery(e.target.value)} />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  )
};

export default SearchForm;
