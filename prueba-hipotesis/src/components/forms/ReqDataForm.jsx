import { Stack, Input, FormLabel } from '@chakra-ui/react'
import HipotesisAppContext from '../../context/hipotesisAppContext.jsx'
import React, { useContext } from 'react'

const ReqDataForm = () => {
  const { hipotesisDefinition } = useContext(HipotesisAppContext)
  const reqData = hipotesisDefinition.reqData
  return (
    <>
      <Stack>
        {Object.values(reqData).map((componentProps, _) => {
          return (
            <React.Fragment key={componentProps.name + 'fragment'}>
              <FormLabel>{componentProps.name}</FormLabel>
              <Input {...componentProps} />
            </React.Fragment>
          )
        })}
      </Stack>

    </>
  )
}

export default ReqDataForm
