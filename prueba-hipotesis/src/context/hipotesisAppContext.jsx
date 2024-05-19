import { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'

const HipotesisAppContext = createContext()

export const HipotesisProvider = ({ children }) => {
  const [hipotesisDefinition, setHipotesisDefinition] = useState({
    interestParam: '',
    interestCase: '',
    imageCase: '',
    apiEndPoint: '',
    reqData: {},
    inputdata: {}
  })

  const updateHipotesisDefinition = (newProps) => {
    setHipotesisDefinition({ ...hipotesisDefinition, ...newProps })
  }

  return (
    <HipotesisAppContext.Provider value={{ hipotesisDefinition, updateHipotesisDefinition }}>
      {children}
    </HipotesisAppContext.Provider>
  )
}

export default HipotesisAppContext

HipotesisProvider.propTypes = {
  children: PropTypes.element
}
