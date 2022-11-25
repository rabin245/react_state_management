import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
      <NameList />
    </div>
  );
}

function NameList() {
  const [list, setList] = useState(["John", "Jane", "Jim"]);
  const [name, setName] = useState("");

  function onAddName() {
    setList([...list, name]);
    setName("");
  }

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }}
      />

      <button onClick={onAddName}>Add name</button>
    </div>
  );
}

export default App;
