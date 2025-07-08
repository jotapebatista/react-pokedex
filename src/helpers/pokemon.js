export async function fetchPokemon(name) {
  try {
	console.log('Fetching Pokémon:', name);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Pokémon not found');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Validate that we have the required data
    if (!data || !data.name || !data.id) {
      throw new Error('Invalid Pokémon data received');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
}