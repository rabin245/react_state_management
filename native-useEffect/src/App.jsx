import { useState, useEffect } from "react";
import "./App.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((oldTime) => oldTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>Time: {time} </div>
    </>
  );
};

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      <StopWatch />
      <div>
        {names.map((name) => (
          <button key={name} onClick={() => onSelectedNameChange(name)}>
            {name}
          </button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}

export default App;
