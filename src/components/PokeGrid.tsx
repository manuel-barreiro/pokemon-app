'use client'

import PokeCard from "./PokeCard"
import {
  Container,
  SimpleGrid,
  Flex,
  Box,
  Skeleton,
  Spinner
} from "@chakra-ui/react";
import { usePokemonLoader } from '../hooks/usePokemonLoader';
import { useInViewHandler } from '../hooks/useInViewHandler';
import { useModal } from '../hooks/useModal';
import PokeModal from "./PokeModal";

function PokeGrid(): JSX.Element {
  const [displayedPokemons, isLoaded, loadMore] = usePokemonLoader(0);
  const [isOpen, onClose, handleViewPokemon, selectedPokemon] = useModal();
  const ref = useInViewHandler(loadMore);

  return (
    <Flex alignItems="center" minH="100vh" justifyContent="center">
        <Container maxW="full">
          <Flex direction="column" alignItems="center" gap={5} >
            <SimpleGrid spacing="10" columns={{ base: 1, lg:3 }}>
              {displayedPokemons.map((pokemon, index) => (
                <Skeleton
                height='full'
                isLoaded={isLoaded}
                borderRadius="xl"
              >
                <Box
                  as="button"
                  key={pokemon.id}
                  onClick={() => handleViewPokemon(pokemon)}
                >
                  <PokeCard
                    key={index}
                    name={pokemon.name} 
                    id={pokemon.id}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    stats={pokemon.stats}
                    types={pokemon.types}
                    img={pokemon.img}

                  />
                </Box>
                </Skeleton>
              ))}
            </SimpleGrid>
            <Spinner ref={ref} size='xl' />
          </Flex>
          
        </Container>
        

        <PokeModal isOpen={isOpen} onClose={onClose} selectedPokemon={selectedPokemon}/>
        
    </Flex>                 
  )
}

export default PokeGrid