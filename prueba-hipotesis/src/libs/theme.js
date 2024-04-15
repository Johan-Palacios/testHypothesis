import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: true
}

const theme = extendTheme({ config })

export default theme
