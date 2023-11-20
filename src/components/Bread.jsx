import React, { useState } from "react";
import InputField from "./shared/InputField";
import Button from "./shared/Button";
import { buyBread } from "../actions/bread";

function Bread({ dispatch }) {
  const [breadQty, setBreadQty] = useState("");

  const handleClick = () => {
    dispatch(buyBread(breadQty));
    console.log(`Buying ${breadQty} bread`);
    setBreadQty("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setBreadQty(value);
  };

  return (
    <div style={{ display: "flex", gap: 3 }}>
      <InputField
        placeholder="Enter Bread Quantity"
        handleChange={handleInputChange} // Corrected the spelling to 'onChange'
        value={breadQty}
      />
      <Button handleClick={handleClick} />
    </div>
  );
}

export default Bread;
