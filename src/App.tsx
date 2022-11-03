import { Web3OnboardProvider } from '@web3-onboard/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {
  defaultTheme,
  GlobalStyle,
} from './assets/styles'
import AppRoutes from './config/routes'
import { web3Onboard } from './config/wallet'
import { GameDataContextProvider } from './contexts/useGameDataContext'

function App() {
  return (
    <Web3OnboardProvider
      web3Onboard={web3Onboard}
    >
      <GameDataContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <AppRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </GameDataContextProvider>
    </Web3OnboardProvider>
  )
}

export default App
