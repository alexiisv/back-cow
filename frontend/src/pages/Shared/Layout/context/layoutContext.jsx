import { createContext, useState } from 'react'

const LayoutContext = createContext()

function LayoutProvider ({ children }) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <LayoutContext.Provider
      value={{
        openMenu,
        setOpenMenu
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export { LayoutContext, LayoutProvider }
