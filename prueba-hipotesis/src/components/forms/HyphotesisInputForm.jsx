import { Input, FormLabel } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import HipotesisAppContext from '@context/hipotesisAppContext'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import { PropTypes } from 'prop-types'

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

          if (props?.maininterest === 2) {
            updateHipotesisConclusion({ mainInterest: 'μ₁' })
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

InputHyphotesis.propTypes = {
  props: PropTypes.object.isRequired,
  maininterest: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string.isRequired,
  propertyInput: PropTypes.string.isRequired
}
