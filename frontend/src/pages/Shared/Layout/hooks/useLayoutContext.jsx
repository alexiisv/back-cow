import { useContext } from 'react'
import { LayoutContext } from '../context/layoutContext'

function useLayoutContext () {
  const context = useContext(LayoutContext)

  return context
}

export default useLayoutContext
