import React from 'react'
import NavBar from './components/Navbar'
import MainForm from './components/forms/MainForm.jsx'
import { Box } from '@chakra-ui/react'
import SumamaryHyphotesis from './components/SummaryHyphotesis.jsx'

function App () {
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
      </main>
    </>

  )
}

export default App
