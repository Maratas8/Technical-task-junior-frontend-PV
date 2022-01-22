import React from "react";
import TableRow from "./TableRow";
import Button from "./Button";
import image1 from "./../images/image1.jpg";
import image2 from "./../images/image2.jpg";
import image3 from "./../images/image3.jpg";
import image4 from "./../images/image4.jpg";
import image5 from "./../images/image5.jpg";
import redTick from "./../images/red-tick.png";
import greenTick from "./../images/green-tick.png";
import edit from "./../images/edit.png";
import delet from "./../images/delete.png"

const Table = ({ className }) => {

  const images = [image1, image2, image3, image4, image5];

  const getRandomPicture = () => images[Math.floor(Math.random() * 4)];


  const products = [
    {
      name: "Sony Master Series A9G",
      type: "Electronic",
      stock: 183,
      status: "active",
    },
    {
      name: "Apple McBook Pro 13",
      type: "PC & Laptop",
      stock: 50,
      status: "inactive",
    },
    {
      name: "Nikon Z6",
      type: "Photography",
      stock: 92,
      status: "active",
    },
    {
      name: "Sony Master Series A9G",
      type: "Electronic",
      stock: 58,
      status: "active",
    },
    {
      name: "Sony Master Series A9G",
      type: "Electronic",
      stock: 183,
      status: "active",
    },
    {
      name: "Apple McBook Pro 13",
      type: "PC & Laptop",
      stock: 50,
      status: "inactive",
    },
    {
      name: "Nikon Z6",
      type: "Photography",
      stock: 92,
      status: "active",
    },
    {
      name: "Sony Master Series A9G",
      type: "Electronic",
      stock: 58,
      status: "active",
    },
    {
      name: "Sony Master Series A9G",
      type: "Electronic",
      stock: 183,
      status: "active",
    },
  ];

  return (
    <table className={className}>
      <thead>
        <tr>
          <th>IMAGES</th>
          <th>PRODUCT NAME</th>
          <th>STOCK</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return (
            <TableRow
              className="bg-white"
              key={Math.floor(Math.random() * 9999)}
              images={
                <div className="flex justify-center my-2">
                  <img className="mini-image" src={getRandomPicture()} alt="alt" />
                  <img className="mini-image ml-[-20px]" src={getRandomPicture()} alt="alt" />
                  <img className="mini-image ml-[-20px]" src={getRandomPicture()} alt="alt" />
                </div>
              }
              name={product.name}
              type={product.type}
              typeClassName={"product-type"}
              stock={product.stock}
              status={
                product.status === "active" ?
                  <div><Button text="Active" className="btn-active" children={<img src={redTick} alt="red-tick" className="w-6 inline-flex" />} /></div> :
                  <div><Button text="Inactive" className="btn-inactive" children={<img src={greenTick} alt="green-tick" className="w-6 inline-flex" />} /></div>
              }
              actions={
                <div>
                  <Button text="Edit" className="btn-edit" children={<img src={edit} alt="edit" className="w-6 inline-flex" />} />
                  <Button text="Delete" className="btn-delete" children={<img src={delet} alt="delete" className="w-6 inline-flex" />} />
                </div>}
            />
          );
        })}
      </tbody>
    </table>
  )
}

export default Table;