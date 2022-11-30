import { useReducer } from "react";
import "./App.css";

function NameList() {
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

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      // no need to use switch case, just send
      // the state key and value to update directly
      // without mentinoing type and payload in dispatch call
      return { ...state, ...action };
    },
    {
      first: "",
      last: "",
    }
  );

  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <h3>
        {state.first} {state.last}
      </h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <UserForm />
      <br />
      <NameList />
    </div>
  );
}

export default App;
