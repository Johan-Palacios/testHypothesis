import { Input, FormLabel } from '@chakra-ui/react'
import { useContext } from 'react'
import HipotesisAppContext from '../../context/hipotesisAppContext'
import HipotesisConclusionContext from '../../context/hipotesisConcusionContext'

export const InputHyphotesis = ({ props, label, propertyInput }) => {
  const { hipotesisDefinition, updateHipotesisDefinition } = useContext(HipotesisAppContext)
  const { updateHipotesisConclusion } = useContext(HipotesisConclusionContext)

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        {...props}
        required
        onWheel={(ev) => ev.target.blur()}
        onChange={(ev) => {
          ev.preventDefault()
          const value = ev.target.value
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
