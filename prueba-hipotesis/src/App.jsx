import React, { useContext } from 'react'
import NavBar from '@components/Navbar'
import MainForm from '@components/forms/MainForm'
import { Box } from '@chakra-ui/react'
import SumamaryHyphotesis from '@components/SummaryHyphotesis'
import HipotesisConclusionContext from '@context/hipotesisConcusionContext'
import Conclusion from '@components/Conclusion'
import HipotesisProveFormContext from '@context/hipotesisProveFormContext'

function App () {
  const { hipotesisConclusion } = useContext(HipotesisConclusionContext)
  const { hipotesisProveForm } = useContext(HipotesisProveFormContext)
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
              hipotesisConclusion.observedValue !== '' && hipotesisProveForm
          ? <Conclusion />
          : <></>}
      </main>
    </>

  )
}

export default App
