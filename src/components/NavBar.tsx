import { Flex, Box, HStack, Stack, Text, Image } from "@chakra-ui/react"
import CatchedButton from "./CatchedButton"
import Link from "next/link"

function NavBar() {
  return (
    <Flex w="full" alignItems="center" justifyContent="space-around" py={5} shadow="lg" zIndex={100} position="fixed" bg="whitesmoke">
      <Link href={'/'}>
        <Box>
          <Image src={'/pokedex.png'} alt='logo' maxW={150}/>
        </Box>
      </Link>

      <Link href={'/catched'}>
        <CatchedButton text={'Catched'} />
      </Link>

    </Flex>
    )
}

export default NavBar