import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./redux/actions/actionCreator.js";

const App = () => {
  const count = useSelector((store) => store?.counter?.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increaseCount());
  };

  const decrease = () => {
    dispatch(decreaseCount());
  };

  return (
    <>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <h1>{count}</h1>
      <h1>React-redux-saga</h1>
    </>
  );
};

export default App;
