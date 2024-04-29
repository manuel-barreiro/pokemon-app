import { useState } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { PokemonData } from '../../types';

export function useModal(): [boolean, () => void, (pokemon: PokemonData) => void, PokemonData | undefined] {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | undefined>();

  function handleViewPokemon(pokemon: PokemonData) {
    setSelectedPokemon(pokemon);
    onOpen();
  }

  return [isOpen, onClose, handleViewPokemon, selectedPokemon];
}
