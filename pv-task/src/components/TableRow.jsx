import React from "react";

const TableRow = ({ className, images, name, type, stock, status, actions, typeClassName }) => {

  return (

    <tr className={className}>
      <td>{images}</td>
      <td><div><div className="lg:text-lg md:text-md text-xs">{name}</div><div className={typeClassName}>{type}</div></div></td>
      <td className="lg:text-lg md:text-md text-xs">{stock}</td>
      <td className="lg:text-lg md:text-md text-xs">{status}</td>
      <td className="lg:text-lg md:text-md text-xs" >{actions}</td>
    </tr>
  )
}

export default TableRow;