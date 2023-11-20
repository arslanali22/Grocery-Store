import React from "react";

const InputField = ({ value, handleChange, placeholder }) => {
  return (
    <div>
      <input
        style={{
          padding: "5px",
        }}
        type="number"
        autoComplete="off"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
