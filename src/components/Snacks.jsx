import React, { useState } from "react";
import PropTypes from "prop-types"; 

import InputField from "./shared/InputField";
import Button from "./shared/Button";
import { buySnacks } from "../actions/snacks";


function Snacks({ dispatch }) {
  const [snackQty, setSnackQty] = useState("");

  const handleClick = () => {
   
    try {
      dispatch(buySnacks(snackQty));
      console.log(`Buying ${snackQty} snack`);
      setSnackQty("");
    } catch (error) {
      console.error("Error while buying snacks:", error);
      
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSnackQty(value);
  };

  return (
    <div style={{ display: "flex", gap: 3 }}>
      <InputField
        placeholder="Enter Snacks Quantity"
        handleChange={handleInputChange}
        value={snackQty}
      />
      <Button handleClick={handleClick} />
    </div>
  );
}


Snacks.propTypes = {
  dispatch: PropTypes.func.isRequired, 
};

export default Snacks;
