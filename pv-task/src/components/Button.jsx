import React from "react";

const Button = ({ buttonStyle, text, type, onClick }) => {

  const blueButton = "bg-blue-500 px-4 py-2 rounded";
  const whiteButton = "bg-white px-4 py-2 rounded";

  return (
    <button className={
      buttonStyle === "blue" ? blueButton : 
      buttonStyle === "white" ? whiteButton : 

      null
    }
      type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;