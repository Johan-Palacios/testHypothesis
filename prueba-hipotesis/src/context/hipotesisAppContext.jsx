import { createContext, useState } from 'react'

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
