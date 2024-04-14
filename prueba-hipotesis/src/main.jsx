import theme from './libs/theme.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HipotesisProvider } from "./context/hipotesisAppContext.jsx"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <HipotesisProvider>
        <App />
      </HipotesisProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
