export async function fetchPokemon(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }