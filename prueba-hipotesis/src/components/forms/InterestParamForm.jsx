import React, { useContext } from 'react'
import {
  FormLabel,
  Select
} from '@chakra-ui/react'
import testHipotesis from '../../utils/hipotesisProp'
import HipotesisAppContext from '../../context/hipotesisAppContext'
const availableInterestParam = testHipotesis.interestParam

function InterestParamForm () {
  const { updateHipotesisDefinition } = useContext(HipotesisAppContext)
  const changeInterestParam = (ev) => {
    ev.preventDefault()
    updateHipotesisDefinition({
      interestParam: ev.target.value,
      interestCase: '',
      imageCase: '',
      apiEndPoint: '',
      reqdata: '',
      inputdata: ''
    })
  }
  return (
    <>
      <FormLabel>Seleccione Parametro de Interés</FormLabel>
      <Select placeholder='Ningun parametro Seleccionado' onChange={changeInterestParam}>
        {availableInterestParam.map(({ name }) => {
          return <option key={name}>{name}</option>
        })}
      </Select>
    </>
  )
}

export default InterestParamForm
