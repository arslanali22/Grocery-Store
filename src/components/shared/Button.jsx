import React, { useReducer } from "react";
import { buyBiscuits } from "../../actions/biscuits";
import { buyBread } from "../../actions/bread";
import { buySnacks } from "../../actions/snacks";
import { values } from "../../reducer/initialValues";
import { reducerFunction } from "../../reducer/reducerFunction";
const Button = ({ handleClick }) => {
  return <button onClick={handleClick}>Buy</button>;
};

export default Button;
