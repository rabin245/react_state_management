import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  // 2 cases to use useMemo
  // 1. Expensive calculation
  // 2. Return value is not primitive (object, array, function)

  const [names] = useState(["John", "Jane", "Jack", "Jill"]);

  // const sortedNames = names.sort();
  // this will mutate the original array
  // hence, names and sortedNames will be the same array

  // const sortedNames = [...names].sort();
  // this solves the issue but will run on every rerender

  const sortedNames = useMemo(() => [...names].sort(), [names]);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")} </div>
      <div>Sorted Names: {sortedNames.join(", ")} </div>
    </>
  );
}

export default App;
