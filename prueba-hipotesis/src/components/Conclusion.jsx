import { Container, Text, Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import Hipotesis from '@components/Hipotesis'
import HipotesisAppContext from '@/context/hipotesisAppContext'
import testHipotesis from '@/utils/hipotesisProp'

const Conclusion = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  const [conclusion, setConclusion] = useState({})
  useEffect(() => {
    setConclusion({ ...hipotesisConclusion }
    )
  }, [hipotesisConclusion])
  const [alternativeHipotesis, setAlternativeHipotesis] = useState(false)
  useEffect(() => {
    // Mean
    if (conclusion.analisisType === 3 && ((conclusion.observedValue > conclusion.criticPoint) ||
      (conclusion.observedValue < Math.abs(conclusion.criticPoint) * -1))) {
      setAlternativeHipotesis(false)
    }

    if (conclusion.analisisType === 2 && (conclusion.observedValue > conclusion.criticPoint)) {
      setAlternativeHipotesis(true)
    }

    if (conclusion.analisisType === 1 && (conclusion.observedValue < conclusion.criticPoint)) {
      setAlternativeHipotesis(true)
    }
  }, [conclusion.analisisType, conclusion.criticPoint, conclusion.observedValue, hipotesisDefinition.interestParam])

  return (
    <Container marginBottom={16}>
      <Card variant='outline'>
        <CardHeader>
          <Heading as='h2'>Conclusion</Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <Heading as='h3'>Hipotesis</Heading>
            <Hipotesis />
            <Text>Valor Critico:&nbsp;
              <Text as='b'>
                {conclusion.analisisType === 3 ? '\n' + Math.abs(conclusion.criticPoint) * -1 + ' y \n' + Math.abs(conclusion.criticPoint) : conclusion.criticPoint}
              </Text>
            </Text>
            <Text>El valor observado es:&nbsp;
              <Text as='b'>
                {conclusion.observedValue}
              </Text>
            </Text>
            {alternativeHipotesis
              ? <Text>Se rechaza la Hipotesis Nula y Se acepta la Hipotesis Alternativa</Text>
              : <Text>Se rechaza la Hipotesis Alternativa y se acepta la hipotesis Nula</Text>}
            <Text />
          </Stack>
        </CardBody>

      </Card>
    </Container>
  )
}

export default Conclusion
