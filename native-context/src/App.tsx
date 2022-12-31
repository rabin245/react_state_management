import { useState, useEffect, useContext, createContext } from "react";
import "./App.css";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}
function usePokemonSource(): { pokemon: Pokemon[] } {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);
  return { pokemon };
}

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
  {} as unknown as ReturnType<typeof usePokemonSource>
);

function usePokemon() {
  return useContext(PokemonContext);
}
const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <PokemonContext.Provider value={usePokemonSource()}>
        <PokemonList />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
