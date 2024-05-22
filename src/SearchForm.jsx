import React from "react";
import { useGlobalContext } from "./Context/Context";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;

    // console.log(searchValue)
    setSearchTerm(searchValue);
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>

      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
