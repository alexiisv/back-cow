import { createContext, useEffect, useState } from 'react'
import { createUser, deleteUser, getAllUsers, updateUser } from '../services/users.service'
import toast from 'react-hot-toast'

const UsersContext = createContext()

function UsersProvider ({ children }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const res = await getAllUsers()
      setUsers(res.data)
    } catch (error) {}
  }

  const getUserByUsername = async (username) => {
    try {
      const user = users.find(user => user.username === username)
      return user
    } catch (error) {}
  }

  const postUser = async (user) => {
    try {
      const res = await createUser(user)
      toast.success(res.data.message)
      getUsers()
    } catch (error) {}
  }

  const putUser = async (user) => {
    try {
      await updateUser(user.username, user)
      toast.success('User updated')
      getUsers()
    } catch (error) {}
  }

  const delUser = async (username) => {
    try {
      const res = await deleteUser(username)
      toast.success(res.data.message)
      getUsers()
    } catch (error) {}
  }

  return (
    <UsersContext.Provider value={{
      users,
      getUsers,
      getUserByUsername,
      postUser,
      putUser,
      delUser
    }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export { UsersContext, UsersProvider }
