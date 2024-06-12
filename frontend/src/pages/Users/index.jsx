import { Outlet } from 'react-router-dom'
import { UsersProvider } from './contexts/usersContext'

function Users () {
  return (
    <UsersProvider>
      <Outlet />
    </UsersProvider>
  )
}

export default Users
