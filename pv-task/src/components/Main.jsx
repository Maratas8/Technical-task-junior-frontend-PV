import React from "react";
import Header from "./Header";
import Button from "./Button";

function Main() {
  return (
    <div className="bg-neutral-300 w-5/6 rounded-3xl p-8">
      <Header />
      <h1 className="text-xl font-semibold pt-4">Data List Layout</h1>
      <div>
      <Button text="Add New Product" buttonStyle="blue" className="m-8"/>
      <Button text="+" buttonStyle="white"/>

      </div>
    </div>
  );
}

export default Main;
