import React from "react";

const Button = ({ className, text, type, onClick, children }) => {

  return (
    <button className={className} type={type} onClick={onClick}>
      {children} {text}
    </button>
  )
}

export default Button;