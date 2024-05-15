import { createContext, useState } from 'react'

const HipotesisConclusionContext = createContext()

export const HipotesisConclusionProvider = ({ children }) => {
  const [hipotesisConclusion, setHipotesisConclusion] = useState({
    criticPoint: '',
    observedValue: '',
    analisisType: '',
    mainInterest: '',
    ns: ''
  })

  const updateHipotesisConclusion = (newProps) => {
    setHipotesisConclusion({ ...hipotesisConclusion, ...newProps })
  }

  return (
    <HipotesisConclusionContext.Provider value={{ hipotesisConclusion, updateHipotesisConclusion }}>
      {children}
    </HipotesisConclusionContext.Provider>
  )
}

export default HipotesisConclusionContext
