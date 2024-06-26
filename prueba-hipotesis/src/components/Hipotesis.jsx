import { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '@context/hipotesisAppContext'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import { Text, Heading, Stack } from '@chakra-ui/react'

const Hipotesis = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)

  const [hipotesisInterestParam, setHipotesisInterestParam] = useState('')
  const [mainInterest, setMainInterest] = useState('')
  const [alternativeHipotesis, setAlternativeHipotesis] = useState('')
  const [isStatic, setIsStatic] = useState(false)

  const staticHipotesis = ['μ₁']

  useEffect(() => {
    if (mainInterest !== undefined) {
      setIsStatic(staticHipotesis.some((hipotesis) => {
        return mainInterest === hipotesis
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainInterest])

  useEffect(() => {
    setHipotesisInterestParam(hipotesisDefinition.interestParam[0])
  }, [hipotesisDefinition])

  useEffect(() => {
    setMainInterest(hipotesisConclusion.mainInterest)
  }, [hipotesisConclusion])

  useEffect(() => {
    if (hipotesisConclusion.analisisType === 1) {
      setAlternativeHipotesis('<')
    } else if (hipotesisConclusion.analisisType === 2) {
      setAlternativeHipotesis('>')
    } else if (hipotesisConclusion.analisisType === 3) {
      setAlternativeHipotesis('!=')
    } else {
      setAlternativeHipotesis('')
    }
  }, [hipotesisConclusion])

  return (
    <Stack>
      {hipotesisInterestParam !== '' && mainInterest !== '' &&
        (!isNaN(mainInterest) || isStatic)

        ? <>
          <Heading as='h4' size='md'>Hipotesis Nula:</Heading>
          <Text>H<sub>0</sub><Text as='b'> : </Text> {hipotesisInterestParam} <Text as='b'> = </Text> {mainInterest} </Text>
          {/* eslint-disable-next-line react/jsx-indent */}
          </>
        : <></>}
      {hipotesisInterestParam !== '' && mainInterest !== '' && alternativeHipotesis !== '' &&
        (!isNaN(mainInterest) || isStatic)
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
