import { color } from "@mui/system"
import { fetchPokemon } from "../helpers/pokemon"

function PokemonCard(props) {
    const { pokemon } = props

    return (
        <article className="pokemon-container">
            <section className="pokemon-container-info">
                <p className="pokemon-container-name">{pokemon.name} | #{pokemon.id} | Height:{pokemon.height} | Weight: {pokemon.weight}</p>
            </section>
            <section className="pokemon-container-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </section>
            <section className="pokemon-container-type" >
                <p style={{color: 'black'}}><b>{pokemon.types[0].type.name}</b></p>
            </section>
            <section>
                <table className="pokemon-container-table">
                <tbody>
                    <tr>
                        <th>Base</th>
                        <th>Stats</th>
                    </tr>
                    <tr>
                        <td>HP:</td>
                        <td>{pokemon.stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Attack:</td>
                        <td>{pokemon.stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Defense:</td>
                        <td>{pokemon.stats[2].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Sp. Attack:</td>
                        <td>{pokemon.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Sp. Defense:</td>
                        <td>{pokemon.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Speed:</td>
                        <td>{pokemon.stats[5].base_stat}</td>
                    </tr>
                </tbody>
            </table>
            </section>
        </article>
    )
}

export default PokemonCard