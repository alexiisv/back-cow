import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '@/components/Input'
import useUsersContext from '../../hooks/useUsersContext'

function Edit () {
  const { getUserByUsername, putUser } = useUsersContext()
  const { username } = useParams()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('USER_ROLE')

  useEffect(() => {
    getUser()
  }, [username])

  const getUser = async () => {
    const user = await getUserByUsername(username)
    setEmail(user.email)
    setRole(user.role)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()

    try {
      await putUser({
        username,
        email,
        password,
        role
      })
    } catch (error) {}
  }

  return (
    <div>
      <h2 className='text-xl font-semibold'>Edit {username}</h2>

      <form className='mt-4' onSubmit={handleOnSubmit}>
        <div className='w-full grid grid-cols-6 gap-4'>
          <Input
            id='email'
            label='Email' type='email'
            placeholder='Enter email'
            value={email}
            setValue={setEmail}
          />

          <Input
            id='password'
            label='New password'
            type='password'
            placeholder='Enter new password'
            value={password}
            setValue={setPassword}
          />

          <div>
            <label
              className='mb-1 block text-sm font-semibold'
              htmlFor='role'
            >
              Role
            </label>
            <select
              id='role'
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className='bg-slate-50 py-1 px-2 border border-slate-300 text-sm rounded-lg hover:bg-slate-50 focus:bg-slate-50 focus:ring-slate-500 focus:border-slate-500 block w-full focus:outline-none transition duration-150 ease-in-out'
            >
              <option value='USER_ROLE'>User</option>
              <option value='ADMIN_ROLE'>Admin</option>
            </select>
          </div>

        </div>
        <div className='mt-4'>
          <button
            type='submit'
            className='bg-slate-800 flex justify-center items-center text-white font-semibold rounded-lg py-1 px-4 hover:bg-slate-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
          >Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default Edit
