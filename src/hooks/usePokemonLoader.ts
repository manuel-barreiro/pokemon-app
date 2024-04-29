import { useState, useEffect } from 'react';
import { loadPokemons } from '@/lib/functions';
import { PokemonData } from '../../types';

export function usePokemonLoader(initialOffset: number): [PokemonData[], boolean, () => void] {
  const [offset, setOffset] = useState(initialOffset);
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchPokemons() {
      setIsLoaded(false);
      const fetchedPokemons = await loadPokemons(offset);
      setDisplayedPokemons((prevPokemons) => [...prevPokemons, ...fetchedPokemons]);
      setIsLoaded(true);
    }
    fetchPokemons();
  }, [offset]);

  function loadMore() {
    setOffset((prevOffset) => prevOffset + 9);
  }

  return [displayedPokemons, isLoaded, loadMore];
}
