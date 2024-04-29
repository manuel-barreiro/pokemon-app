import axios from "axios"
import { Pokemon, PokemonData } from "../../types"

export async function loadPokemons(): Promise<PokemonData[]> {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30&offset=300")
  const results: Pokemon[] = data.results
  const pokemonPromises = results.map(async (pokemon: Pokemon ) => {
    const { data } = await axios.get(pokemon.url)
    const pokemonFilteredData: PokemonData = {
      name: data.name,
      id: data.id ,
      height: data.height ,
      weight: data.weight ,
      stats: data.stats ,
      types: data.types ,
      img: data.sprites.other.home.front_shiny ,
    }
    return pokemonFilteredData
  })
  const pokemons = await Promise.all(pokemonPromises)
  return pokemons
} 
