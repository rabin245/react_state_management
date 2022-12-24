import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const inputRef = useRef(null);
  const idRef = useRef(1);

  const [names, setNames] = useState([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addName = () => {
    setNames([...names, { id: idRef.current++, name: inputRef.current.value }]);
    inputRef.current.value = "";
  };

  return (
    <div>
      <div>
        {names.map((val) => (
          <div key={val.id}>
            {val.id}
            {val.name}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={addName}>Add name</button>
    </div>
  );
}
export default App;
