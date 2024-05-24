"use client"
import { createContext, useState } from "react"

export interface HistoryContextType {
  index: number
  setIndex: (index: number) => void
}

const HistoryContext = createContext<HistoryContextType>({
  index: 0,
  setIndex: () => {}
})

type Props = {
  children: React.ReactNode
}

export const HistoryProvider: React.FC<Props> = ({ children }) => {
  const [index, setIndex] = useState<number>(0)

  const setIndexHandler = (index: number) => {
    setIndex(index)
  }

  const context = {
    index: index,
    setIndex: setIndexHandler
  }

  return (
    <HistoryContext.Provider value={context}>
      {children}
    </HistoryContext.Provider>
  )
}

export default HistoryContext
