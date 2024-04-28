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

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    await axios.get('http://127.0.0.1:8000/mean/know_dev_estand/', {
      params: formData,
      headers: {
        Accept: 'application/json'
      }
    }).then((response) => setConclusionData({ ...response.data }))
  }
  useEffect(() => {
    updateHipotesisConclusion({ ...conclusionData })
  }, [conclusionData])

  useEffect(() => {
    setFormData(hipotesisDefinition.inputdata)
  }, [hipotesisDefinition.inputdata])

  return (
    <Container display='flex' flexDirection='row' flexWrap='wrap' w='100%' alignSelf='center'>
      <form
        style={{ width: '100%' }} onSubmit={handleSubmit}
      >
        <FormControl>
          <InterestParamForm />
          {hipotesisDefinition.interestParam !== '' ? <CasesForm /> : <></>}
          {hipotesisDefinition.interestCase !== '' ? <ReqDataForm /> : <></>}
        </FormControl>
        <Button type='submit' mt={5} colorScheme='blue'>Calcular</Button>
      </form>
    </Container>
  )
}

export default MainForm
