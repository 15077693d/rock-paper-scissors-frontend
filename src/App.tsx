import { ThemeProvider } from 'styled-components'
import {
  defaultTheme,
  GlobalStyle,
} from './assets/styles'
import AppRoutes from './config/routes'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
