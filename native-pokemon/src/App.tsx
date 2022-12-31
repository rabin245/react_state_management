import { PokemonProvider, usePokemon } from "./store";

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
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default App;
