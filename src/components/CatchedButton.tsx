import { Flex, Box, HStack, Stack, Text, Image, Button } from "@chakra-ui/react"


function CatchedButton({ text }: { text: string }) {
  return (
    <Button rounded='2xl' display="flex" gap={2} alignItems="center" w="auto" px={8}>
      <Image src={'/pokeball.svg'} maxW={6} />
      <Text>{text}</Text>
    </Button>
  )
}

export default CatchedButton