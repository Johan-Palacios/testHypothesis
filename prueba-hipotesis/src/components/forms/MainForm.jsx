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
import HipotesisAppContext from '../../context/hipotesisAppContext.jsx'
import HipotesisConclusionContext from '../../context/hipotesisConcusionContext.jsx'
import CasesForm from './CasesForm.jsx'
import InterestParamForm from './InterestParamForm.jsx'
import ReqDataForm from './ReqDataForm.jsx'
import HipotesisProveFormContext from '../../context/hipotesisProveFormContext.jsx'

function MainForm () {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const { updateHipotesisConclusion } = useContext(HipotesisConclusionContext)
  const { updateHipotesisProveForm } = useContext(HipotesisProveFormContext)
  const [formData, setFormData] = useState({})
  const [conclusionData, setConclusionData] = useState({})
  const [typeAnalisis, setTypeAnalisis] = useState(0)
  const [ns, setNs] = useState(0)
  const [formReady, setFormReady] = useState(false)
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
    const value = parseFloat(ev.target.value)
    setNs(value)
  }

  const handleChangeForm = (ev) => {
    ev.preventDefault()
    setFormReady(false)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    await axios.get('http://127.0.0.1:8000/mean/know_dev_estand/', {
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
    if (typeAnalisis !== '' && typeAnalisis === 3) {
      setFormData({ ...formData, ns: ns / 2 })
    } else if (typeAnalisis !== '') {
      setFormData({ ...formData, ns })
    }
  }, [typeAnalisis])
  useEffect(() => {
    updateHipotesisConclusion({ ...conclusionData })
  }, [conclusionData])

  useEffect(() => {
    setFormData(hipotesisDefinition.inputdata)
  }, [hipotesisDefinition.inputdata])

  useEffect(() => {
    updateHipotesisConclusion({ analisisType: typeAnalisis })
  }, [typeAnalisis])

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

              {/* TODO: Fix Bug Form params in reverse  */}
              <FormLabel marginTop={5}>Nivel de Significancia</FormLabel>
              <Input
                name='Nivel de Significancia'
                step={0.01}
                min={0}
                max={1}
                type='number'
                placeholder='Ingrese Nivel de Significancia'
                required
                onWheel={(ev) => ev.target.blur()}
                onChange={(ev) => handleChangeNs(ev)}
              />

              <FormLabel marginTop={5}>Tipo de Análisis (&lt; &gt;, != )</FormLabel>
              <Select placeholder='Seleccione un tipo de analisis' required onChange={(ev) => handleSelectAnalisis(ev)}>
                <option value={1}>&lt;</option>
                <option value={2}>&gt;</option>
                <option value={3}>!=</option>
              </Select>

              <Button type='submit' mt={5} colorScheme='blue'>Calcular</Button>
              {/* eslint-disable-next-line react/jsx-indent */}
              </>
            : <></>}

        </FormControl>

      </form>
    </Container>
  )
}

export default MainForm
