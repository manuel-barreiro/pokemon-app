'use client'

import { useState, useEffect } from "react";
import { Pokemon, PokemonData } from "../../types"
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
  HStack,
  Divider,
  Progress,
  Skeleton
} from "@chakra-ui/react";
import TypeBadge from "./PokeCard/TypeBadge";
import axios from "axios";

async function loadPokemons(offSet: number): Promise<PokemonData[]> {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${offSet}`)
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

function PokeGrid(): JSX.Element {
  const [offset, setOffset] = useState(0)
  const pokemonDataModal = useDisclosure()
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedPokemons, setdisplayedPokemons] = useState<PokemonData[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | undefined>();

  useEffect(() => {
    async function fetchPokemons(offSet: number) {
      setIsLoaded(false);
      const fetchedPokemons = await loadPokemons(offSet)
      setdisplayedPokemons((prev) => [...prev, ...fetchedPokemons]);
      setIsLoaded(true);
    }
    fetchPokemons(offset)
    console.log(offset)
  }, [offset])

  function handlSetOffset () {
    setOffset((prev) => prev + 9)
  }

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
            <Button onClick={handlSetOffset}>
              Hola
            </Button>
          </Flex>
        </Container>

        

        <Modal {...pokemonDataModal} size={{ base: 'full', lg:'lg' }} motionPreset='slideInBottom' >
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent borderTopRadius={100}>
          
          <ModalHeader textTransform="capitalize" bg={`${selectedPokemon?.types[0].type.name}.badge`} p={5}>
            <Image onClick={() => pokemonDataModal.onClose()} src={"/chevron-left.svg"} cursor="pointer" width={8} />
          </ModalHeader>
          
          <ModalBody w="full" margin={0} padding={0} >
            <Flex w="full" direction="column" gap={10} alignItems="start" marginTop={-1} paddingBottom={10}>
              <Box w="full" h="auto" p={3} display="flex" justifyContent="center" alignItems="center" bg={`${selectedPokemon?.types[0].type.name}.badge`} borderBottomRadius={200} maxH={{ base: 250, lg: 150 }} minH={{ base: 150, lg: 50 }}>
                  <Image src={selectedPokemon?.img} maxW={300} marginTop={{ base: 16, lg: 0 }} />
              </Box>

              <Flex w="full" paddingX={10} justifyContent="space-between" alignItems="center">
                <Box display="flex" flexDirection="column" alignItems="start">
                  <Text fontWeight="bold" fontSize="sm">
                  Nº{selectedPokemon?.id.toString().padStart(4, '0')}
                  </Text>
                  <Heading noOfLines={1} fontSize={'3xl'} py={1} fontWeight='black' textAlign="center" textTransform="capitalize" marginBottom={3}>
                    {selectedPokemon?.name}
                  </Heading>
                  <HStack>
                    {selectedPokemon?.types.map((type) => (
                      <TypeBadge key={type.slot} typeName={type.type.name} />
                    ))}
                  </HStack>          
                </Box> 

                <Flex direction="column" gap={2}>
                  <Box display="flex" flexDirection="row" gap={2}>
                    <Image src={"/weight.svg"} width={5} />
                    <Text fontSize="2xl">{(Number(selectedPokemon?.weight) * 0.1).toFixed(1)} kg</Text>
                  </Box>
                  <Divider />
                  <Box display="flex" flexDirection="row" gap={2}>
                    <Image src={"/ruler.svg"} width={5} />
                    <Text fontSize="2xl">{(Number(selectedPokemon?.height) * 0.1).toFixed(1)} m</Text>
                  </Box>
                </Flex>
              </Flex>   


              <Flex direction="column" gap={1} paddingX={10} w="full">
                {selectedPokemon?.stats.map((stat, index) =>
                  <Flex direction="row" alignItems="center" gap={1} >
                    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" flexBasis="70%">{stat.stat.name}</Text>
                    <Flex direction="row" alignItems="center" w="full" gap={1}>
                      <Text fontSize="xs" textTransform="uppercase">{stat.base_stat.toString().padStart(3, '0')}</Text>
                      <Progress borderRadius={5} w="full" size="sm" value={stat.base_stat} hasStripe/>
                    </Flex>
                  </Flex>
                )}
              </Flex>
            </Flex> 

            
          </ModalBody>
        </ModalContent>
        </Modal>
      </Flex>

                 
  )
}

export default PokeGrid