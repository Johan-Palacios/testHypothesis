import { Input, FormLabel } from '@chakra-ui/react'
import { useContext } from 'react'
import HipotesisAppContext from '../../context/hipotesisAppContext'

export const InputHyphotesis = ({ props, label, propertyInput }) => {
  const { hipotesisDefinition, updateHipotesisDefinition } = useContext(HipotesisAppContext)

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        {...props}
        required
        onWheel={(ev) => ev.target.blur()}
        onChange={(ev) => {
          ev.preventDefault()
          updateHipotesisDefinition(
            {
              inputdata:
              { ...hipotesisDefinition.inputdata, [`${propertyInput}`]: parseFloat(ev.target.value) }
            }
          )
        }}
      />
    </>
  )
}
