import React, { useContext } from 'react'
import {
  FormLabel,
  Select
} from '@chakra-ui/react'
import testHipotesis from '../../utils/hipotesisProp'
import HipotesisAppContext from '../../context/hipotesisAppContext'
import HipotesisConclusionContext from '../../context/hipotesisConcusionContext'

function InterestParamForm () {
  const availableInterestParam = testHipotesis.interestParam
  const { updateHipotesisDefinition } = useContext(HipotesisAppContext)
  const { updateHipotesisConclusion } = useContext(HipotesisConclusionContext)
  const changeInterestParam = (ev) => {
    ev.preventDefault()
    updateHipotesisConclusion({
      criticPoint: '',
      observedValue: ''
    })
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
      <Select placeholder='Ningun parametro Seleccionado' onChange={changeInterestParam} required>
        {availableInterestParam.map(({ name }) => {
          return <option key={name}>{name}</option>
        })}
      </Select>
    </>
  )
}

export default InterestParamForm
