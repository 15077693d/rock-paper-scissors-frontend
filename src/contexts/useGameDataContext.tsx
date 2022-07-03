import {
  createContext,
  useContext,
  useState,
} from 'react'
import { OptionId } from '../config/option'

type ContextType = {
  myOptionId: OptionId | null
  opponentOptionId: OptionId | null
  setMyOptionId: React.Dispatch<
    React.SetStateAction<OptionId | null>
  >
}
const initData: ContextType = {
  myOptionId: null,
  opponentOptionId: null,
  setMyOptionId: () => {
    return
  },
}
const GameDataContext =
  createContext<ContextType>(initData)
GameDataContext.displayName = 'GameDataContext'
export const useGameDataContext = () =>
  useContext(GameDataContext)
export function GameDataContextProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) {
  const [myOptionId, setMyOptionId] =
    useState<OptionId | null>(OptionId.PAPER)
  const [opponentOptionId, setOpponentOptionId] =
    useState<OptionId | null>(OptionId.ROCK)
  return (
    <GameDataContext.Provider
      value={{
        myOptionId,
        opponentOptionId,
        setMyOptionId,
      }}
    >
      {children}
    </GameDataContext.Provider>
  )
}
