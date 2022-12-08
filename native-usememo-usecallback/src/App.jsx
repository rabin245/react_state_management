import "./App.css";
import { useMemo, useState } from "react";

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  return <div>Total: {total}</div>;
}

export default App;
