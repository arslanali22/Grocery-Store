import React, { useState } from "react";
import InputField from "./shared/InputField";
import Button from "./shared/Button";
import { buyBiscuits } from "../actions/biscuits";

function Biscuits({ dispatch }) {
  const [biscuitQty, setBiscuitQty] = useState("");

  const handleClick = () => {
    dispatch(buyBiscuits(biscuitQty));
    console.log(`Buying ${biscuitQty} biscuits`); 
    setBiscuitQty("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setBiscuitQty(value);
  };

  return (
    <div style={{ display: "flex", gap: 3 }}>
      <InputField
        placeholder="Enter Biscuits Quantity"
        handleChange={handleInputChange}
        value={biscuitQty}
      />
      <Button handleClick={handleClick} />
    </div>
  );
}

export default Biscuits;
