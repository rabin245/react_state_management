import { useReducer } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };

        case "ADD_NAME":
          return { ...state, names: [...state.names, state.name], name: "" };
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div className="App">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <h3>{state.name}</h3>

      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add name</button>

      <ul>
        {state.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
