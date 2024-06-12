import { useState } from 'react'
import { FaAddressCard, FaLock } from 'react-icons/fa6'
import escudo from '@/assets/images/escudo.png'
import InputIcon from '@/components/InputIcon'
import useAuthContext from '@/hooks/useAuthContext'
import toast from 'react-hot-toast'

function Login () {
  const { login } = useAuthContext()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    if (!username || !password) {
      return toast.error('Enter your username and password')
    }

    login({ username, password })
  }

  return (
    <main className='flex justify-center items-center h-screen'>
      <div className='m-4 md:m-2 flex flex-col gap-4 w-80'>
        <h1 className='flex justify-center items-center'>
          <img src={escudo} alt='Siian' className='w-44' />
        </h1>

        <div className='bg-white flex flex-col gap-4 p-4 md:p-6 shadow-lg rounded-2xl'>
          <form>
            <h2 className='text-2xl font-bold text-center'>Iniciar sesión</h2>

            <div className='my-4 flex flex-col flex-nowrap gap-2'>
              <InputIcon
                value={username}
                setValue={setUsername}
                label='Uername'
                placeholder='Enter your username'
                icon={FaAddressCard}
              />

              <InputIcon
                value={password}
                setValue={setPassword}
                type='password'
                label='Password'
                placeholder='Enter your password'
                icon={FaLock}
              />
            </div>

            <button
              type='submit'
              onClick={handleSubmit}
              className='bg-slate-800 text-white font-semibold rounded-lg py-2 w-full hover:bg-slate-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
