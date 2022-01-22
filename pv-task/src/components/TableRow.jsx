import React from "react";

const TableRow = ({ className, images, name, type, stock, status, actions, typeClassName }) => {

  return (

    <tr className={className}>
      <td>{images}</td>
      <td><div>{name}</div><div className={typeClassName}>{type}</div></td>
      <td>{stock}</td>
      <td>{status}</td>
      <td>{actions}</td>
    </tr>
  )
}

export default TableRow;