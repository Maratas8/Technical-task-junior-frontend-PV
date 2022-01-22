import React from 'react';
import search from './../images/search.png';

const SearchBar = ({ inputClassName, imgClassName }) => {

  return (
    <div className="flex">
      <input className={inputClassName} placeholder="  Search..." />
      <img src={search} alt="search" className={imgClassName} />
    </div>
  )
}

export default SearchBar;