import { SetStateAction, useEffect, useState } from "react";
import { PokemonData } from "../../types";
import { catchPokemon, freePokemon } from "@/lib/functions";
import { useToast } from '@chakra-ui/react'



interface HandleCatchAndFreeProps {
  setMyPokemon: React.Dispatch<SetStateAction<PokemonData[]>>,
  selectedPokemon: PokemonData | undefined,
  onClose: () => void
}

interface UseMyPokemonReturn {
  myPokemon: PokemonData[],
  setMyPokemon: React.Dispatch<SetStateAction<PokemonData[]>>,
  handleCatch: ({setMyPokemon, selectedPokemon, onClose}: HandleCatchAndFreeProps) => void
  handleFree: ({setMyPokemon, selectedPokemon, onClose}: HandleCatchAndFreeProps) => void
}

async function loadMyPokemon() {
  const res = await fetch('/api/myPokemon', { method: 'GET' })
  const data = await res.json()
  return data.myPokemon
}

export function useMyPokemon(): UseMyPokemonReturn {
  const [myPokemon, setMyPokemon] = useState<PokemonData[]>([])

  function handleCatch({setMyPokemon, selectedPokemon, onClose}: HandleCatchAndFreeProps): void {
    if(selectedPokemon) {
      catchPokemon(selectedPokemon)
      setMyPokemon((prev) => [...prev, selectedPokemon])
      onClose()
    }
  }
  
  function handleFree({setMyPokemon, selectedPokemon, onClose}: HandleCatchAndFreeProps): void {
    if(selectedPokemon) {
      freePokemon(selectedPokemon)
      setMyPokemon((prev) => prev.filter((poke) => Number(poke.id) !== Number(selectedPokemon.id)))
      onClose()
    }
  }

  useEffect(() => {
    async function fetchMyPokemon() {
      const myPokemon = await loadMyPokemon()
      setMyPokemon(myPokemon)
    }
    fetchMyPokemon()
  }, [])

  return {myPokemon, setMyPokemon, handleCatch, handleFree}
}