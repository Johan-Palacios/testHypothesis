import React, { useContext } from 'react'
import {
  FormLabel,
  Select,
} from '@chakra-ui/react'
import HipotesisAppContext from '../../context/hipotesisAppContext'
import testHipotesis from '../../utils/hipotesisProp'


function InterestParamForm() {
  const {hipotesisDefinition, updateHipotesisDefinition} = useContext(HipotesisAppContext)
  const changeCase = (ev) => {
    ev.preventDefault()
    console.log(ev.target.value)
    updateHipotesisDefinition({interestCase: ev.target.value})
  }
  let availableCases
  if (hipotesisDefinition.interestParam === testHipotesis.interestParam[0].name) {
    availableCases = testHipotesis.interestParam[0].cases
  }

return (
    <React.Fragment> 
      <FormLabel>Seleccione Casos</FormLabel>
        <Select placeholder='Ningun Caso seleccionado' onChange={(ev) => changeCase(ev)}>
          {availableCases.map((currentCase) => {
            return <option key={currentCase.name}>{currentCase.name}</option>
          })}
        </Select>
    </React.Fragment>
    )
}

export default InterestParamForm

