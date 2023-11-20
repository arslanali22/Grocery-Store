import { useReducer } from "react";
import { reducerFunction } from "./reducer/reducerFunction";
import { values } from "./reducer/initialValues";
import StoreDisplay from "./components/StoreDisplay";
import PurchaseGoods from "./components/PurchaseGoods";

function App() {
  const [state, dispatch] = useReducer(reducerFunction, values);
  return (
    <div style={{ padding: "30px" }}>
      <StoreDisplay storeValues={state} />
      <PurchaseGoods dispatch={dispatch} />
    </div>
  );
}

export default App;
