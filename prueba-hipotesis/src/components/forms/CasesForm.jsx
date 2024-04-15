import React, { useContext } from 'react'
import {
  FormLabel,
  Select
} from '@chakra-ui/react'
import HipotesisAppContext from '../../context/hipotesisAppContext'
import testHipotesis from '../../utils/hipotesisProp'

function InterestParamForm () {
  const { hipotesisDefinition, updateHipotesisDefinition } = useContext(HipotesisAppContext)
  let availableCases

  if (hipotesisDefinition.interestParam === testHipotesis.interestParam[0].name) {
    availableCases = testHipotesis.interestParam[0].cases
  }

  if (hipotesisDefinition.interestParam === testHipotesis.interestParam[1].name) {
    availableCases = testHipotesis.interestParam[1].cases
  }

  if (hipotesisDefinition.interestParam === testHipotesis.interestParam[2].name) {
    availableCases = testHipotesis.interestParam[2].cases
  }
  const changeCase = (ev) => {
    ev.preventDefault()
    const interestCase = ev.target.value
    const selectedCaseInfo = availableCases.filter((currentCase) => {
      return currentCase.name === interestCase.split(' - ')[0]
    })[0]
    const imagePath = selectedCaseInfo?.image ?? ''
    const apiEndPoint = selectedCaseInfo?.endpoint ?? ''
    const reqData = selectedCaseInfo?.reqData ?? {}
    updateHipotesisDefinition({ interestCase, imageCase: imagePath, apiEndPoint, reqData })
  }
  return (
    <>
      <FormLabel>Seleccione Casos</FormLabel>
      <Select placeholder='Ningun Caso seleccionado' onChange={(ev) => changeCase(ev)}>
        {availableCases.map((currentCase) => {
          return (
            <option key={currentCase.name + currentCase.caseDefinition}>
              {currentCase.name + ' - ' + currentCase.caseDefinition}
            </option>
          )
        })}
      </Select>
    </>
  )
}

export default InterestParamForm
