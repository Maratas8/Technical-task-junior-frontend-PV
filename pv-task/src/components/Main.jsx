import React from "react";
import Header from "./Header";
import Button from "./Button";
import SearchBar from "./SearchBar";
import Table from "./Table";

function Main() {
  return (
    <div className="bg-neutral-300 w-5/6 rounded-3xl p-8">
      <Header />
      <h1 className="text-xl font-semibold pt-4">Data List Layout</h1>
      <div className="my-8 flex justify-between">
        <div>
          <Button text="Add New Product" className="btn-blue" />
          <Button text="+" className="btn-white ml-4" />
        </div>
        <div>
          <p>Showing 1 to 10 of 150 entries</p>
        </div>
        <div>
          <SearchBar inputClassName="search-input-main" imgClassName="search-img-main" />
        </div>
      </div>
      <div >
        <Table className="w-full border-separate"/>
      </div>
    </div>
  );
}

export default Main;
