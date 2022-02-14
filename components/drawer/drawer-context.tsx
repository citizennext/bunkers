import { useState, createContext, Dispatch, SetStateAction } from 'react'

export const DrawerContext = createContext<{ state: boolean; dispatch: Dispatch<SetStateAction<boolean>> } | undefined>(undefined)

export function DrawerProvider({ children }) {
  const [state, dispatch] = useState(false)
  return <DrawerContext.Provider value={{ state, dispatch }}>{children}</DrawerContext.Provider>
}
