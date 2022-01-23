import React from "react";
import Header from "./Header";
import Button from "./Button";
import SearchBar from "./SearchBar";
import Table from "./Table";

function Main() {
  return (
    <div className="bg-neutral-300 lg:w-4/5 rounded-3xl p-8 w-full">
      <Header />
      <h1 className="lg:text-lg md:text-md text-xs font-semibold pt-4">Data List Layout</h1>
      <div className="xl:my-8 flex flex-col md:flex-row justify-between">
        <div>
          <Button text="Add New Product" className="btn-blue lg:text-lg md:text-md text-xs" />
          <Button text="+" className="btn-white ml-4 lg:text-lg md:text-md text-xs" />
        </div>
        <div>
          <p className="lg:text-lg md:text-md text-xs">Showing 1 to 10 of 150 entries</p>
        </div>
        <div>
          <SearchBar inputClassName="search-input-main lg:text-lg md:text-md text-xs" imgClassName="search-img-main" />
        </div>
      </div>
      <div >
        <Table className="w-full border-separate"/>
      </div>
    </div>
  );
}

export default Main;

