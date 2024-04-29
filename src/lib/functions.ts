import axios from "axios"
import { Pokemon, PokemonData } from "../../types"

export async function loadPokemons(): Promise<PokemonData[]> {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1302&offset=0")
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

export function generatePaginationArrays(numberOfPages: number, rangeNum: number) {
  let pagesOffset = [];
  let pages_array = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages_array.push(i);
    if (pages_array.length === rangeNum) {
      pagesOffset.push(pages_array);
      pages_array = [];
      if (i === numberOfPages - (numberOfPages % rangeNum)) { 
      for (let j: number = i; j <= numberOfPages; j++) {
          pages_array.push(j);
          if (j === numberOfPages) {
              pagesOffset.push(pages_array);
              pages_array = [];
          }
       }
          i = numberOfPages
      } 
    }
  }
  return pagesOffset
}