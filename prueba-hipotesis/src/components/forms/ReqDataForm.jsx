import { Stack } from '@chakra-ui/react'
import HipotesisAppContext from '@context/hipotesisAppContext'
import React, { useContext } from 'react'
import { InputHyphotesis } from '@components/forms/HyphotesisInputForm'

const ReqDataForm = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)

  const reqData = hipotesisDefinition.reqData

  return (
    <>
      <Stack>
        {
          Object.entries(reqData).map(([inputKey, propsInput]) => {
            return (
              <InputHyphotesis
                key={inputKey}
                propertyInput={inputKey}
                props={propsInput}
                label={propsInput.name}
              />
            )
          })
        }
      </Stack>
    </>
  )
}

export default ReqDataForm
