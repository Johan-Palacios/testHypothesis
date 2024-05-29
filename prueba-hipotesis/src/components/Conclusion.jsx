import { Container, Text, Card, CardBody, CardHeader, Heading, Stack, Alert, IconButton } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import Hipotesis from '@components/Hipotesis'
import HipotesisAppContext from '@/context/hipotesisAppContext'
import cornerCases from '@/utils/cornerCases'
import ExpandableImage from './ExpandableImage'

const Conclusion = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)

  const [conclusion, setConclusion] = useState({})
  const [criticPointValue, setCriticPointValue] = useState('')
  const [alternativeHipotesis, setAlternativeHipotesis] = useState(false)
  const [graph, setGraph] = useState('')
  const [params, setParams] = useState({})
  const [ns, setNs] = useState(0)
  const [textConclusion, setTextConclusion] = useState('')

  const isCorner = (inputCase) => {
    return cornerCases.some((cornerCase) => inputCase === cornerCase)
  }

  const fetchGraphData = async () => {
    await axios.get(`http://127.0.0.1:8000/${hipotesisDefinition.apiEndPoint}graph`, {
      params,
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => setGraph(response.data))
  }

  useEffect(() => {
    setConclusion({ ...hipotesisConclusion }
    )
  }, [hipotesisConclusion])

  useEffect(() => {
    if (conclusion.analisisType === 3 && (conclusion.observedValue > conclusion.criticPoint) &&
      isCorner(hipotesisDefinition.apiEndPoint)) {
      setAlternativeHipotesis(true)
    } else if (conclusion.analisisType === 3 && ((conclusion.observedValue > conclusion.criticPoint) ||
      (conclusion.observedValue < conclusion.criticPoint * -1))) {
      setAlternativeHipotesis(true)
    } else if (conclusion.analisisType === 2 && (conclusion.observedValue > conclusion.criticPoint)) {
      setAlternativeHipotesis(true)
    } else if (conclusion.analisisType === 1 && (conclusion.observedValue < conclusion.criticPoint) &&
      isCorner(hipotesisDefinition.apiEndPoint)) {
      setAlternativeHipotesis(true)
    } else if (conclusion.analisisType === 1 && (conclusion.observedValue < conclusion.criticPoint * -1)) {
      setAlternativeHipotesis(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conclusion.analisisType, conclusion.criticPoint, conclusion.observedValue])

  useEffect(() => {
    if (conclusion.analisisType === 1 && isCorner(hipotesisDefinition.apiEndPoint)) {
      setCriticPointValue(conclusion.criticPoint)
    } else if (conclusion.analisisType === 1) {
      setCriticPointValue(conclusion.criticPoint * -1)
    } else if (conclusion.analisisType === 2) {
      setCriticPointValue(conclusion.criticPoint)
    } else if (conclusion.analisisType === 3 && isCorner(hipotesisDefinition.apiEndPoint)) {
      setCriticPointValue(conclusion.criticPoint)
    } else if (conclusion.analisisType === 3) {
      setCriticPointValue('\n' + conclusion.criticPoint * -1 + ' y \n' + conclusion.criticPoint)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conclusion.analisisType, conclusion.criticPoint])

  useEffect(() => {
    if (Object.keys(params).length !== 0 &&
      params.observedValue !== undefined &&
      params.criticPoint !== undefined &&
      params.analisisType !== undefined &&
      hipotesisDefinition.inputdata.n) {
      fetchGraphData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])
  useEffect(() => {
    setNs(hipotesisConclusion.ns)
  }, [hipotesisConclusion.ns])

  useEffect(() => {
    setParams({
      observedValue: conclusion.observedValue,
      criticPoint: conclusion.criticPoint,
      analisisType: conclusion.analisisType,
      n: hipotesisDefinition.inputdata.n
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conclusion.observedValue, conclusion.criticPoint, conclusion.analisisType, hipotesisDefinition.inputdata.n])

  useEffect(() => {
    if (alternativeHipotesis && ns !== undefined) {
      setTextConclusion(
        `Con un nivel de significancia de ${ns} existe evidencia estadisticamente significativa
          para rechazar la Hipotesis Nula y aceptar la Hipotesis Alternativa`
      )
    } else if (alternativeHipotesis === false && ns !== undefined) {
      setTextConclusion(
        `Con un nivel de significancia de ${ns} existe evidencia estadisticamente significativa
        para rechazar la Hipotesis Alternativa y aceptar la hipotesis Nula`
      )
    }
  }, [alternativeHipotesis, ns])

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
            <Alert status='success' display='flex' flexDirection='row' gap={6} justifyContent='space-between'>

              <IconButton icon={<CopyIcon />} onClick={() => { navigator.clipboard.writeText(criticPointValue) }} />
              Valor Critico:&nbsp;
              <Text as='b'>
                {criticPointValue}
              </Text>
            </Alert>
            <Alert status='warning' display='flex' flexDirection='row' gap={6} justifyContent='space-between'>

              <IconButton icon={<CopyIcon />} onClick={() => { navigator.clipboard.writeText(conclusion.observedValue) }} />
              El valor observado es:&nbsp;
              <Text as='b'>
                {conclusion.observedValue}

              </Text>
            </Alert>
            <Alert status='info' display='flex' flexDirection='row' gap={6} justifyContent='space-between'>
              <IconButton
                icon={<CopyIcon />} onClick={() => {
                  navigator.clipboard.writeText(textConclusion)
                }}
              />
              {textConclusion}
            </Alert>
            <Text />
            {graph.graph !== undefined
              ? <ExpandableImage
                  src={`data:image/png;base64, ${graph.graph}`} alt='Distribución Gráfica'
                />
              : <></>}

          </Stack>
        </CardBody>

      </Card>
    </Container>
  )
}

export default Conclusion
