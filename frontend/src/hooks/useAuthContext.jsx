import { useContext } from 'react'
import { AuthContext } from '@/contexts/authContext'

function useAuthContext () {
  const context = useContext(AuthContext)

  return context
}

export default useAuthContext
