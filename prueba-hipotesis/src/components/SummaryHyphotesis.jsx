import { Card, CardBody, CardHeader, Container, Heading, Text, Image } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '../context/hipotesisAppContext'

const SumamaryHyphotesis = () => {
  const [interestParamText, setInterestParamText] = useState('')
  const [interestCaseText, setInterestCaseText] = useState('')
  const [imageCase, setImageCase] = useState('')
  const { hipotesisDefinition } = useContext(HipotesisAppContext)

  useEffect(() => {
    setInterestParamText(hipotesisDefinition.interestParam)
  }, [hipotesisDefinition])

  useEffect(() => {
    setInterestCaseText(hipotesisDefinition.interestCase)
  }, [hipotesisDefinition])

  useEffect(() => {
    setImageCase(hipotesisDefinition.imageCase)
  }, [hipotesisDefinition])

  return (
    <Container>
      <Card direction={{ base: 'column', sm: 'column' }} overflow='hidden' variant='outline' alignSelf='center' colorScheme='blue'>
        <CardHeader alignSelf='center'>
          <Heading as='h2' size='md'>Resumen De Parametros Hipotesis ✅</Heading>
        </CardHeader>
        <CardBody>
          <Heading as='h2' size='md'>
            Datos para Analisis:
            {interestCaseText === '' && interestParamText === '' ? <Text fontSize='small'>*Aun no ha elegido Datos</Text> : <></>}
          </Heading>
          {interestParamText !== ''
            ? <>
              <Heading as='h4' size='md' colorScheme='blue'>
                Parámetro de Interes 🤔:
              </Heading>
              <Text>{interestParamText}</Text>
              </>
            : <></>}
          {
            interestCaseText !== ''
              ? <>
                <Heading as='h4' size='md'>
                  Caso de Interes 🗒️:
                </Heading>
                <Text>{interestCaseText.split(' - ')[0]}</Text>
                <Heading as='h4' size='md'>Estadistico de Prueba:</Heading>
                <Text>{interestCaseText.split(' - ')[1]}</Text>
                <Image width={250} objectFit='cover' src={`/${imageCase}`} fallbackSrc='/vite.svg' />
                </>
              : <></>
          }
        </CardBody>
      </Card>
    </Container>
  )
}

export default SumamaryHyphotesis
