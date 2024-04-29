import { Container, Text, Card, CardBody, CardHeader, Heading, Stack } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import HipotesisConclusionContext from '../context/hipotesisConcusionContext'

const Conclusion = () => {
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  const [conclusion, setConclusion] = useState({})
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

          </Stack>
        </CardBody>

      </Card>
    </Container>
  )
}

export default Conclusion
