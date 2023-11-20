import React from "react";

const StoreDisplay = ({ storeValues }) => {
  return (
    <div>
      <h3>Store Values</h3>
      <h5>Bread: {storeValues.bread}</h5>
      <h5>Snacks: {storeValues.snacks}</h5>
      <h5>Buscuits: {storeValues.biscuits}</h5>
      <h5>Profit: {storeValues.itemsOfPriceSold} Rs</h5>
      <h5>Products Left: {storeValues.totalGroceries}</h5>
    </div>
  );
};

export default StoreDisplay;
