import { Input, FormLabel } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '@context/hipotesisAppContext'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'

export const InputHyphotesis = ({ props, label, propertyInput }) => {
  const { hipotesisDefinition, updateHipotesisDefinition } = useContext(HipotesisAppContext)
  const { updateHipotesisConclusion } = useContext(HipotesisConclusionContext)
  const [valueInput, setValueInput] = useState('')
  useEffect(() => {
    setValueInput('')
  }, [hipotesisDefinition.interestCase])

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        {...props}
        required
        value={valueInput}
        onWheel={(ev) => ev.target.blur()}
        onChange={(ev) => {
          ev.preventDefault()
          const value = ev.target.value

          if (isNaN(value)) {
            setValueInput('')
          }

          if (!isNaN(value)) {
            setValueInput(value)
          }

          if (props?.maininterest === 1) {
            updateHipotesisConclusion({ mainInterest: parseFloat(value) })
          }
          updateHipotesisDefinition(
            {
              inputdata:
              { ...hipotesisDefinition.inputdata, [`${propertyInput}`]: parseFloat(value) }
            }
          )
        }}
      />
    </>
  )
}
