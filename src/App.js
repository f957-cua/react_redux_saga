import { useSelector } from "react-redux";

const App = () => {
  const store = useSelector((store) => store);
  console.log(store);

  return (
    <>
      <h1>React-redux-saga</h1>
    </>
  );
};

export default App;
