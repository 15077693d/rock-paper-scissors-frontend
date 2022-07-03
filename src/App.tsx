import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  defaultTheme,
  GlobalStyle,
} from './assets/styles'
import AppRoutes from './config/routes'
import { GameDataContextProvider } from './contexts/useGameDataContext'

function App() {
  return (
    <GameDataContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </GameDataContextProvider>
  )
}

export default App
