import { values } from "./initialValues";
export const reducerFunction = (state = values, action) => {
  switch (action.type) {
    case "buy_biscuit":
      if (action.payload > state.biscuits) {
        return state;
      }
      return {
        ...state,
        biscuits: state.biscuits - action.payload,
        itemsOfPriceSold: state.itemsOfPriceSold + action.payload * 40,
        totalGroceries: state.totalGroceries - action.payload,
      };
    case "buy_bread":
      if (action.payload > state.bread) {
        return state;
      }
      return {
        ...state,
        bread: state.bread - action.payload,
        itemsOfPriceSold: state.itemsOfPriceSold + action.payload * 100,
        totalGroceries: state.totalGroceries - action.payload,
      };
    case "buy_snacks":
      if (action.payload > state.snacks) {
        return state;
      }
      return {
        ...state,
        snacks:state.snacks - action.payload,
        itemsOfPriceSold: state.itemsOfPriceSold + action.payload * 50,
        totalGroceries: state.totalGroceries - action.payload,
      };
    default:
      return state;
  }
};
