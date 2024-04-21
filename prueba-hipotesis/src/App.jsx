import React, { useContext } from 'react'
import NavBar from './components/Navbar'
import MainForm from './components/forms/MainForm.jsx'
import { Box } from '@chakra-ui/react'
import SumamaryHyphotesis from './components/SummaryHyphotesis.jsx'
import HipotesisConclusionContext from './context/hipotesisConcusionContext'
import Conclusion from './components/Conclusion.jsx'

function App () {
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Box display='flex' alignItems='center' flexDir='row' gap={10} margin={12} flexWrap='wrap'>
          <SumamaryHyphotesis />
          <MainForm />
        </Box>
        {hipotesisConclusion.criticPoint !== '' &&
              hipotesisConclusion.observedValue !== ''
          ? <Conclusion />
          : <></>}
      </main>
    </>

  )
}

export default App
