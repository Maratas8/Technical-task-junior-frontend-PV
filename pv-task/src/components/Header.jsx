import React from "react";
import bell from "./../images/bell.png";
import user from "./../images/user.png";
// import search from "./../images/search.png";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex justify-between border-b border-neutral-400 mb-8 pb-6">
      <div className=" ">Application {'>'} Dashboard</div>
      <div className="flex h-8">
        <SearchBar inputClassName="search-input-header" imgClassName="search-img-header"/>
        <img src={bell} alt="bell" className="w-8 ml-6"/>
        <img src={user} alt="user" className="w-8 rounded-full ml-6"/>
      </div>
     
    </div>
  );
}

export default Header;
