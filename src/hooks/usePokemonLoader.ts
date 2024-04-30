import { useState, useEffect } from 'react';
import { loadPokemons } from '@/lib/functions';
import { PokemonData } from '../../types';

export function usePokemonLoader(): [PokemonData[], boolean, () => void, number[], (id: number) => void] {
  const [offset, setOffset] = useState(0);
  const [displayedPokemons, setDisplayedPokemons] = useState<PokemonData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCards, setLoadedCards] = useState<number[]>([]);

  const handleCardLoad = (id: number) => {
    if (!loadedCards.includes(id)) {
      setLoadedCards(prevState => [...prevState, id]);
    }
  };

  useEffect(() => {
    async function fetchPokemons() {
      setIsLoaded(false);
      const fetchedPokemons = await loadPokemons(offset);
      setDisplayedPokemons((prevPokemons) => [...prevPokemons, ...fetchedPokemons]);
      // Agrego un retraso de 700ms antes de cambiar isLoaded a true, para mejorar la UX y que se vean bien los skeletons.
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }
    fetchPokemons();
  }, [offset]);

  function loadMore() {
    setOffset((prevOffset) => prevOffset + 12);
  }

  return [displayedPokemons, isLoaded, loadMore, loadedCards, handleCardLoad];
}
