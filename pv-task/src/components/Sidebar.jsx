import React, { useState } from "react";
import down from "./../images/down.png";
import up from "./../images/up.png";
import layers from "./../images/layers.png";
import house from "./../images/house.png";
import cube from "./../images/cube.png";
import diagram from "./../images/diagram.png";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    !isOpen ?
      <div className="bg-blue-800 w-1/5 ">
        <h1 className="text-white text-2xl py-7 pl-16 mr-8 font-light border-b border-neutral-400">
          <img src={layers} alt="layers" className="w-12 pr-4 inline-flex" />
          Admin
        </h1>
        <h1 className="text-black text-2xl mt-8 py-4 pl-16 bg-neutral-300 rounded-l-full">
          <img src={house} alt="house" className="w-12 pr-4 inline-flex" />
          CRUD example
        </h1>
        <button onClick={() => setIsOpen(true)} className="text-white text-2xl py-4 pl-16 font-light">
          <img src={cube} alt="cube" className="w-12 pr-4 inline-flex" />
          Menu item
          <img src={down} alt="down" className="w-10 inline-flex pl-4" />
        </button>

      </div>
      :
      <div className="bg-blue-800 w-1/5 ">
        <h1 className="text-white text-2xl py-7 pl-16 mr-8 font-light border-b border-neutral-400">
          <img src={layers} alt="layers" className="w-12 pr-4 inline-flex" />
          Admin
        </h1>
        <h1 className="text-black text-2xl mt-8 py-4 pl-16 bg-neutral-300 rounded-l-full">
          <img src={house} alt="house" className="w-12 pr-4 inline-flex" />
          CRUD example
        </h1>
        <button onClick={() => setIsOpen(false)} className="text-white text-2xl py-4 pl-16 font-light">
          <img src={cube} alt="cube" className="w-12 pr-4 inline-flex" />
          Menu item
          <img src={up} alt="up" className="w-10 inline-flex pl-4" />
        </button>

        <div className="bg-blue-900 mr-4">
          <h1 className="text-white text-2xl py-2 pb-2 pl-16 font-light">
            <img src={diagram} alt="diagram" className="w-12 pr-4 inline-flex" />
            Sub menu item 1
          </h1>
          <h1 className="text-white text-2xl py-2 pl-16 font-light">
            <img src={diagram} alt="diagram" className="w-12 pr-4 inline-flex" />
            Sub menu item 2
          </h1>
          <h1 className="text-white text-2xl py-2 pl-16 font-light">
            <img src={diagram} alt="diagram" className="w-12 pr-4 inline-flex" />
            Sub menu item 3
          </h1>

        </div>

      </div>
  );
}

export default Sidebar;
