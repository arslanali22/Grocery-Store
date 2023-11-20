import React from "react";
import Biscuits from "./Biscuits";
import Bread from "./Bread";
import Snacks from "./Snacks";

const PurchaseGoods = ({ dispatch }) => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h3>Purchase Goods!</h3>
      <Biscuits dispatch={dispatch} />
      <Bread dispatch={dispatch} />
      <Snacks dispatch={dispatch} />
    </div>
  );
};

export default PurchaseGoods;
