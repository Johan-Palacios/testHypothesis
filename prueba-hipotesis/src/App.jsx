import React, { useContext, useEffect, useState } from "react"
import NavBar from "./components/Navbar"
import MainForm from "./components/forms/MainForm.jsx"
import {  Container,Card, CardHeader, CardBody, Text, Heading, Box } from "@chakra-ui/react"
import HipotesisAppContext from "./context/hipotesisAppContext.jsx"

function App() {
   const [interestParamText, setInterestParamText] = useState("")
   const [interestCaseText, setInterestCaseText] = useState("");
   const { hipotesisDefinition } = useContext(HipotesisAppContext);
   useEffect(() => {
    setInterestParamText(hipotesisDefinition.interestParam)
  }, [hipotesisDefinition]);

   useEffect(() => {
    setInterestCaseText(hipotesisDefinition.interestCase)
  }, [hipotesisDefinition]);
  return (
    <React.Fragment>
      <header>
        <NavBar/>
      </header>
      <main>
          <Box display="flex" alignItems={"center"} flexDir={"row"} gap={10} margin={12} flexWrap={"wrap"}>
          <Container>
            <Card direction={{ base: 'column', sm: 'column' }} overflow='hidden' variant='outline' alignSelf={"center"} colorScheme='blue'>
              <CardHeader alignSelf={"center"}>
                <Heading as={"h2"} size='md'>Resumen De Parametros Hipotesis ✅</Heading>
              </CardHeader>
              <CardBody>
              <Heading as={"h2"} size={'md'}>Datos para Analisis:{interestCaseText === "" && interestParamText === ""? <Text fontSize={"small"}>*Aun no ha elegido Datos</Text>:<></>}</Heading>
                {
                  interestParamText !== ""? <>
                    <Heading as={"h4"} size='md' colorScheme="blue">
                      Parámetro de Interes 🤔:
                    </Heading>
                    <Text>{interestParamText}</Text>
                  </>
                  : <></>
                }
                {
                  interestCaseText !== ""? <>
                  <Heading as={"h4"} size='md' colorScheme="blue">
                    Caso de Interes 🗒️:
                  </Heading>
                  <Text>{interestCaseText}</Text>
                </>: <></>
                }
              </CardBody>
              </Card>
          </Container>
            <MainForm/>
          </Box>
      </main>
    </React.Fragment>
    
  )
}

export default App
