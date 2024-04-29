import { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '../context/hipotesisAppContext'
import HipotesisConclusionContext from '../context/hipotesisConcusionContext'
import { Text, Heading, Stack } from '@chakra-ui/react'

const Hipotesis = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  const [hipotesisInterestParam, setHipotesisInterestParam] = useState('')
  const [mainInterest, setMainInterest] = useState('')
  const [alternativeHipotesis, setAlternativeHipotesis] = useState('')
  useEffect(() => {
    setHipotesisInterestParam(hipotesisDefinition.interestParam[0])
  }, [hipotesisDefinition])

  useEffect(() => {
    setMainInterest(hipotesisConclusion.mainInterest)
  }, [hipotesisConclusion])

  useEffect(() => {
    if (hipotesisConclusion.analisisType === 1) {
      setAlternativeHipotesis('<')
    }

    if (hipotesisConclusion.analisisType === 2) {
      setAlternativeHipotesis('>')
    }

    if (hipotesisConclusion.analisisType === 3) {
      setAlternativeHipotesis('!=')
    }
  }, [hipotesisConclusion])

  return (
    <Stack>
      {hipotesisInterestParam !== '' && mainInterest !== ''

        ? <>
          <Heading as='h4' size='md'>Hipotesis Nula:</Heading>
          <Text>H<sub>0</sub><Text as='b'> : </Text> {hipotesisInterestParam} <Text as='b'> = </Text> {mainInterest} </Text>
          {/* eslint-disable-next-line react/jsx-indent */}
          </>
        : <></>}
      {hipotesisInterestParam !== '' && mainInterest !== '' && alternativeHipotesis !== ''
        ? <>

          <Heading as='h4' size='md'>Hipotesis Altenativa:</Heading>
          <Text>H<sub>1</sub><Text as='b'> : </Text> {hipotesisInterestParam} <Text as='b'> {alternativeHipotesis} </Text> {mainInterest} </Text>
          {/* eslint-disable-next-line react/jsx-indent */}
          </>
        : <></>}
    </Stack>

  )
}

export default Hipotesis
