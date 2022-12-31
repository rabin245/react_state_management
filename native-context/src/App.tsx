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
function usePokemon(): { pokemon: Pokemon[] } {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);
  return { pokemon };
}

const PokemonList = () => {
  const { pokemon } = useContext(PokemonContext);
  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

const PokemonContext = createContext({
  pokemon: [] as Pokemon[],
});

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <PokemonContext.Provider value={usePokemon()}>
        <PokemonList />
      </PokemonContext.Provider>
    </div>
  );
}

export default App;
