import {
  Button,
  Container,
  FormControl
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '../../context/hipotesisAppContext.jsx'
import CasesForm from './CasesForm.jsx'
import InterestParamForm from './InterestParamForm.jsx'
import ReqDataForm from './ReqDataForm.jsx'
import axios from 'axios'

function MainForm () {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const [formData, setFormData] = useState({})
  useEffect(() => {
    setFormData(hipotesisDefinition.inputdata)
  }, [hipotesisDefinition.inputdata])

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    console.log(formData)
    const params = {
      mean_sample: 497.3,
      mean_population: 500,
      dev_stand: 5,
      n: 100,
      ns: 0.05
    }

    console.log(params)
    try {
      const response = await axios.get('http://127.0.0.1:8000/mean/know_dev_estand/', {
        params: formData,
        headers: {
          Accept: 'application/json'
        }
      })
      console.log(response.data)
    } catch (error) {
      // Manejo de errores
      console.error('Error al llamar a la API:', error)
    }
  }

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
