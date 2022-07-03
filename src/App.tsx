import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  defaultTheme,
  GlobalStyle,
} from './assets/styles'
import AppRoutes from './config/routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
