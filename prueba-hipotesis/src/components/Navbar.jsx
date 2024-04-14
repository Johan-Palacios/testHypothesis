import { Box, Container, Text, Heading } from "@chakra-ui/react";
function NavBar() {
  return (
  <Box as="nav" w={"100%"}>
      <Container display={"flex"} alignItems={"center"} p={5} maxW={"container.md"} flexWrap={"wrap"} justifyContent={"space-between"}>
        <Heading as="h1" size={"lg"} fontSize={"50px"} letterSpacing={"tighter"} textAlign={"center"} w={"100%"} noOfLines={2}>
          <Text>🤔💭 Prueba de Hipotesis</Text>
        </Heading>
      </Container>
    </Box>
  )
}

export default NavBar
