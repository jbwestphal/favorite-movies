import React from 'react';

const Search = (props) =>
  <form className="form-search">
    <input type="search" name="search" required placeholder="Search for a movie" />
    <button type="submit">Search</button>
  </form>

export default Search;
