import { Container, Text, Card, CardBody, CardHeader, Heading, Stack, Image } from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import Hipotesis from '@components/Hipotesis'
import HipotesisAppContext from '@/context/hipotesisAppContext'

const Conclusion = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  const [conclusion, setConclusion] = useState({})
  const [criticPointValue, setCriticPointValue] = useState('')
  const [alternativeHipotesis, setAlternativeHipotesis] = useState(false)
  const [graph, setGraph] = useState('')
  const [params, setParams] = useState({})

  useEffect(() => {
    setConclusion({ ...hipotesisConclusion }
    )
  }, [hipotesisConclusion])

  useEffect(() => {
    if (conclusion.analisisType === 3 && ((conclusion.observedValue > conclusion.criticPoint) ||
      (conclusion.observedValue < conclusion.criticPoint * -1))) {
      setAlternativeHipotesis(true)
    }

    if (conclusion.analisisType === 2 && (conclusion.observedValue > conclusion.criticPoint)) {
      setAlternativeHipotesis(true)
    }

    if (conclusion.analisisType === 1 && (conclusion.observedValue < conclusion.criticPoint * -1)) {
      setAlternativeHipotesis(true)
    }
  }, [conclusion.analisisType, conclusion.criticPoint, conclusion.observedValue])

  useEffect(() => {
    if (conclusion.analisisType === 1) {
      setCriticPointValue(conclusion.criticPoint * -1)
    }

    if (conclusion.analisisType === 2) {
      setCriticPointValue(conclusion.criticPoint)
    }

    if (conclusion.analisisType === 3) {
      setCriticPointValue('\n' + Math.abs(conclusion.criticPoint) * -1 + ' y \n' + conclusion.criticPoint)
    }
  }, [conclusion.analisisType, conclusion.criticPoint])

  const fetchGraphData = async () => {
    await axios.get(`http://127.0.0.1:8000/${hipotesisDefinition.apiEndPoint}graph`, {
      params,
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => setGraph(response.data))
  }

  useEffect(() => {
    if (Object.keys(params).length !== 0 &&
      params.observedValue !== undefined &&
      params.criticPoint !== undefined &&
      params.analisisType !== undefined) {
      fetchGraphData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  useEffect(() => {
    setParams({
      observedValue: conclusion.observedValue,
      criticPoint: conclusion.criticPoint,
      analisisType: conclusion.analisisType
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conclusion.observedValue, conclusion.criticPoint, conclusion.analisisType])

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
                {criticPointValue}
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
            {graph.graph !== undefined ? <Image src={`data:image/png;base64, ${graph.graph}`} /> : <></>}

          </Stack>
        </CardBody>

      </Card>
    </Container>
  )
}

export default Conclusion
