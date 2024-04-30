import {
  Stack,
  Text,
  Image,
  HStack,
  Badge,
  Heading,
  Box,
} from "@chakra-ui/react";
import { PokemonData } from "../../types"
import CardImage from "./PokeCard/CardImage";
import CardInfo from "./PokeCard/CardInfo";
import { useEffect } from "react";

interface PokeCardProps extends PokemonData {
  onLoad?: () => void;
}

function PokeCard(pokemonData: PokeCardProps) {
  const mainType = pokemonData.types[0].type.name

  useEffect(() => {
    if (pokemonData.onLoad) {
      pokemonData.onLoad();
    }
  }, [pokemonData.onLoad]);

  return (
      <Stack
        boxShadow="xl"
        w={{ base: 'full', lg:'250px' }}
        borderRadius="xl"
        alignItems="center"
        justifyContent={{ base: 'space-between', md:'center' }}
        direction={{ base: 'row-reverse', lg:'column' }}
        bg={`${mainType}.cardBg`}
        cursor={"pointer"}
        onLoad={pokemonData.onLoad}
      >
        <CardImage img={pokemonData.img} mainType={mainType} />
        
        <CardInfo id={pokemonData.id} name={pokemonData.name} types={pokemonData.types} />
      </Stack>
  )
}

export default PokeCard