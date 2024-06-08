import React, { useState, useEffect } from 'react';
import './App.css';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/150') // Cambia el número al ID del Pokémon que quieras obtener
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {pokemon ? (
          <div className="pokemon-container">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default Pokemon;
