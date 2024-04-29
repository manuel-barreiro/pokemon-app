'use client'

import { useState } from "react";
import { PokemonData } from "../../types"
import PokeCard from "./PokeCard"
import {
  Container,
  Stack,
  Input,
  Button,
  SimpleGrid,
  Flex,
  Box,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  ModalFooter,
  Image,
  Text,
  Heading,
  HStack
} from "@chakra-ui/react";
import TypeBadge from "./PokeCard/TypeBadge";

function PokeGrid({ displayedPokemons }: { displayedPokemons: PokemonData[] }): JSX.Element {
  const pokemonDataModal = useDisclosure()
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData>();

  function handleViewPokemon(pokemon: PokemonData) {
    setSelectedPokemon(pokemon);
    pokemonDataModal.onOpen();
  }

  return (
    <Flex alignItems="center" minH="100vh" justifyContent="center">
        <Container maxW="full">
          <Flex direction="column" alignItems="center" gap={5} >
            <SimpleGrid spacing="10" columns={{ base: 1, lg:3 }}>
              {displayedPokemons.map((pokemon, index) => (
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
              ))}
            </SimpleGrid>

            <Button isLoading={false}>
              Cargas más
            </Button>
          </Flex>
        </Container>

        <Modal {...pokemonDataModal} size={{ base: 'full', lg:'lg' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="capitalize" bg={`${selectedPokemon?.types[0].type.name}.badge`} p={5}>
          
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody w="full" margin={0} padding={0}>
            <Flex w="full" direction="column" gap={10} alignItems="start" marginTop={-5}>
              <Box w="full" h="auto" p={3} display="flex" justifyContent="center" alignItems="center" bg={`${selectedPokemon?.types[0].type.name}.badge`} borderBottomRadius={200} maxH={250} minH={150}>
                  <Image src={selectedPokemon?.img} maxW={300} marginTop={20} />
              </Box>

              <Box padding={10} display="flex" flexDirection="column" alignItems="start">
                <Text fontWeight="bold" fontSize="l">
                Nº{selectedPokemon?.id.toString().padStart(4, '0')}
                </Text>
                <Heading noOfLines={1} fontSize={'3xl'} fontWeight='bold' textAlign="center" textTransform="capitalize" marginBottom={3}>
                  {selectedPokemon?.name}
                </Heading>
                <HStack>
                  {selectedPokemon?.types.map((type) => (
                    <TypeBadge key={type.slot} typeName={type.type.name} />
                  ))}
                </HStack>          
              </Box>

            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      </Flex>

  )
}

export default PokeGrid