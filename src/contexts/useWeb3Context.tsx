import { createContext, useContext } from 'react'
type ContextType = {
  account: string | null
}

const initData: ContextType = {
  account: null,
}

const Web3Context = createContext(initData)

export const Web3ContextProvider = () => {
  return (
    <Web3Context.Provider
      value={initData}
    ></Web3Context.Provider>
  )
}

export const useWeb3Context = () =>
  useContext(Web3Context)
