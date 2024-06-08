import React, { useState, useEffect } from 'react';
import './App.css';

function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1); // Estado para el ID del Pokémon
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error fetching Pokémon:', error));
  }, [pokemonId]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setPokemonId(inputValue.toLowerCase()); // Convertir el valor a minúsculas para compatibilidad
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter Pokémon ID or Name"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
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
