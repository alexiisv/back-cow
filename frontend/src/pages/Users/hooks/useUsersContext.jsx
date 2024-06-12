import { useContext } from 'react'
import { UsersContext } from '../contexts/usersContext'

function useUsersContext () {
  const context = useContext(UsersContext)

  return context
}

export default useUsersContext
