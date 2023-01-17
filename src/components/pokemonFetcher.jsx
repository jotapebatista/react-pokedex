import { useState } from 'react';
import { fetchPokemon } from '../helpers/pokemon.js'
import PokemonCard from './PokemonCard';
import TextField from '@mui/material/TextField'
import useStyles from '../helpers/styles.jsx';

function PokemonFetcher() {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await fetchPokemon(pokemonName);
    setPokemon(data);
    setPokemonName('')
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className='search-pokemon-container'>
        {/* <label htmlFor="pokemon-name">Poke Search:</label> */}

        <TextField label="Poke Search" variant="standard" onChange={event => setPokemonName(event.target.value)} value={pokemonName} />


        {/* <input
          type="text"
          id="pokemon-name"
          value={pokemonName}
          placeholder='Ex: Pikachu or 25'
          onChange={event => setPokemonName(event.target.value)}
        /> */}
        {/* <button type="submit">Fetch Pokemon</button> */}
      </div>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </form>
  );
}

export default PokemonFetcher;