import { ThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle } from './assets/styles'
import Main from './pages/Main/Main'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  )
}

export default App
