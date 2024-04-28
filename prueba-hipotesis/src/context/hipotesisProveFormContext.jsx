import { createContext, useState } from 'react'

const HipotesisProveFormContext = createContext()

export const HipotesisProveFormProvider = ({ children }) => {
  const [hipotesisProveForm, setHipotesisProveForm] = useState(false)

  const updateHipotesisProveForm = (formState) => {
    setHipotesisProveForm(formState)
  }

  return (
    <HipotesisProveFormContext.Provider value={{ hipotesisProveForm, updateHipotesisProveForm }}>
      {children}
    </HipotesisProveFormContext.Provider>
  )
}

export default HipotesisProveFormContext
