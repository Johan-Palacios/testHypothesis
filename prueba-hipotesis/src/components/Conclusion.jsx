import { Container, Text, Input, Card, CardBody, CardHeader, Heading, Select, Stack } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import HipotesisConclusionContext from '../context/hipotesisConcusionContext'

const Conclusion = () => {
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  const [conclusion, setConclusion] = useState({})
  const [typeAnalisis, setTypeAnalisis] = useState(0)
  const handleChange = (ev) => {
    ev.preventDefault()
    const value = ev.target.value
    if (value === '') {
      setTypeAnalisis(0)
    } else {
      setTypeAnalisis(ev.target.value)
    }
  }

  useEffect(() => {
    setConclusion({ ...hipotesisConclusion }
    )
  }, [hipotesisConclusion])

  return (
    <Container marginBottom={16}>
      <Card variant='outline'>
        <CardHeader>
          <Heading as='h2'>Conclusion</Heading>
        </CardHeader>
        <CardBody>
          <Stack>

            <Text>El valor critico es:&nbsp;
              <Text as='b'>
                {conclusion.criticPoint}
              </Text>
            </Text>
            <Text>El valor observado es:&nbsp;
              <Text as='b'>
                {conclusion.observedValue}
              </Text>

            </Text>

            <Select placeholder='Seleccione un tipo de analisis' onChange={(ev) => handleChange(ev)}>
              <option value={1}>&lt;</option>
              <option value={2}>&gt;</option>
              <option value={3}>!=</option>
            </Select>

            {typeAnalisis === 0 ? <></> : <Input placeholder='Nombre de la variable' />}

          </Stack>
        </CardBody>

      </Card>
    </Container>
  )
}

export default Conclusion
