import { Navigate } from 'react-router'
import useAuthContext from '@/hooks/useAuthContext'

function AuthGuard ({ children }) {
  const { user } = useAuthContext()

  if (!user) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default AuthGuard
