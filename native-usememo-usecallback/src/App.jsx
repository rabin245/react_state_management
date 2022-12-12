import "./App.css";
import { useMemo, useState, useCallback } from "react";

function SortedList({ list, sortFunc }) {
  console.log("SortedList rendered");

  const sortedList = useMemo(() => {
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  // const sortFunc = (a, b) => a.localeCompare(b);
  // since this function is used as a dependency in the SortedList component
  // it will be recreated every time the App component is rendered
  // and the SortedList component will be re-rendered
  // even if the list prop is not changed

  // to avoid this, we can use useCallback
  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  const [names] = useState(["John", "Jane", "Jack", "Jill"]);
  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")} </div>
      <SortedList list={names} sortFunc={sortFunc} />
    </>
  );
}

export default App;
