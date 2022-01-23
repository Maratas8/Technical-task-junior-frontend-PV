import React from "react";
import bell from "./../images/bell.png";
import user from "./../images/user.png";
// import search from "./../images/search.png";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex justify-between border-b border-neutral-400 mb-8 pb-6 flex-col lg:flex-row">
      <div className=" lg:text-lg md:text-md text-xs ">Application {'>'} Dashboard</div>
      <div className="flex h-6 md:h-8">
        <SearchBar inputClassName="search-input-header lg:text-lg md:text-md text-xs" imgClassName="search-img-header"/>
        <img src={bell} alt="bell" className="w-6 md:w-8 ml-6"/>
        <img src={user} alt="user" className="w-6 md:w-8 rounded-full ml-6"/>
      </div>
     
    </div>
  );
}

export default Header;