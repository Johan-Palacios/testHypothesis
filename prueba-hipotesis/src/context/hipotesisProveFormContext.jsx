import { createContext, useState } from 'react'
import { PropTypes } from 'prop-types'

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

HipotesisProveFormProvider.propTypes = {
  children: PropTypes.element
}
