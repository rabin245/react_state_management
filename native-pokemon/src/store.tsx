import React, { useState, useEffect, useContext, createContext } from "react";
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

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}
export function usePokemon() {
  return useContext(PokemonContext);
}
