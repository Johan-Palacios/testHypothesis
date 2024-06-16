/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Container,
  FormControl,
  Select,
  FormLabel,
  Input
} from '@chakra-ui/react'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '@context/hipotesisAppContext'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import CasesForm from '@components/forms/CasesForm'
import InterestParamForm from '@components/forms/InterestParamForm'
import ReqDataForm from '@components/forms/ReqDataForm'
import HipotesisProveFormContext from '@context/hipotesisProveFormContext'
import cornerCases from '@/utils/cornerCases'

function MainForm () {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { updateHipotesisConclusion } = useContext(HipotesisConclusionContext)
  const { updateHipotesisProveForm } = useContext(HipotesisProveFormContext)

  const [formData, setFormData] = useState({})
  const [conclusionData, setConclusionData] = useState({})
  const [typeAnalisis, setTypeAnalisis] = useState(0)
  const [ns, setNs] = useState(0)
  const [formReady, setFormReady] = useState(false)

  const isCorner = (inputCase) => {
    return cornerCases.some((cornerCase) => inputCase === cornerCase)
  }

  const handleSelectAnalisis = (ev) => {
    ev.preventDefault()
    const value = ev.target.value

    if (value === '') {
      setTypeAnalisis('')
    } else {
      setTypeAnalisis(parseInt(value))
    }
  }

  const handleChangeNs = (ev) => {
    ev.preventDefault()
    const value = ev.target.value
    const check = parseFloat(value)
    if (!isNaN(check)) {
      setNs(parseFloat(value))
    } else {
      setNs('')
    }
  }

  const handleChangeForm = (ev) => {
    ev.preventDefault()
    setFormReady(false)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    await axios.get(`/api/${hipotesisDefinition.apiEndPoint}`, {
      params: formData,
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => setConclusionData({ ...response.data }))
      .then(() => setFormReady(true))
  }

  useEffect(() => {
    updateHipotesisProveForm(formReady)
  }, [formReady])

  useEffect(() => {
    updateHipotesisConclusion({ ...conclusionData })
  }, [conclusionData])

  useEffect(() => {
    isCorner(hipotesisDefinition.apiEndPoint)
    if (typeAnalisis !== '' && typeAnalisis === 3 && !isNaN(ns) && isCorner(hipotesisDefinition.apiEndPoint)) {
      setFormData({ ...hipotesisDefinition.inputdata, ns })
    } else if (typeAnalisis !== '' && typeAnalisis === 3 && !isNaN(ns)) {
      setFormData({ ...hipotesisDefinition.inputdata, ns: ns / 2 })
    } else if (typeAnalisis !== '' && !isNaN(ns)) {
      setFormData({ ...hipotesisDefinition.inputdata, ns })
    }
    updateHipotesisConclusion({ ns })
  }, [hipotesisDefinition.inputdata, typeAnalisis, ns])

  useEffect(() => {
    updateHipotesisConclusion({ analisisType: typeAnalisis })
  }, [typeAnalisis])

  useEffect(() => {
    setTypeAnalisis('')
    setNs('')
    updateHipotesisConclusion({
      criticPoint: '',
      observedValue: '',
      analisisType: '',
      mainInterest: '',
      ns: ''
    })
  }, [hipotesisDefinition.interestCase])

  return (
    <Container display='flex' flexDirection='row' flexWrap='wrap' w='100%' alignSelf='center'>
      <form
        style={{ width: '100%' }} onSubmit={(ev) => handleSubmit(ev)} onChange={(ev) => handleChangeForm(ev)}
      >
        <FormControl>
          <InterestParamForm />

          {hipotesisDefinition.interestParam !== '' ? <CasesForm /> : <></>}

          {hipotesisDefinition.interestCase !== ''
            ? <>
              <ReqDataForm />
              <FormLabel marginTop={5}>Nivel de Significancia</FormLabel>
              <Input
                name='Nivel de Significancia'
                step={0.01}
                min={0.01}
                value={ns}
                max={0.99}
                type='number'
                placeholder='Ingrese Nivel de Significancia Ej. 0.05'
                required
                onWheel={(ev) => ev.target.blur()}
                onChange={(ev) => handleChangeNs(ev)}
              />
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>
            : <></>}

          {hipotesisDefinition.interestParam !== '' && ns !== 0 && !isNaN(ns) && ns !== 1 && ns !== ''
            ? <>
              <FormLabel marginTop={5}>Tipo de Análisis (&lt; &gt;, != )</FormLabel>
              <Select placeholder='Seleccione un tipo de analisis' required onChange={(ev) => handleSelectAnalisis(ev)}>
                <option value={1}>&lt;</option>
                <option value={2}>&gt;</option>
                <option value={3}>!=</option>
              </Select>
              <Button type='submit' mt={5} colorScheme='blue'>Calcular</Button>
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>
            : <></>}

        </FormControl>
      </form>
    </Container>
  )
}

export default MainForm
