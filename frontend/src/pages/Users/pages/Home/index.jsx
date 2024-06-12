import { Link, useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa6'
import TableUsers from '../../components/TableUsers'
import useUsersContext from '../../hooks/useUsersContext'
import { ConfirmAlert } from '@/utils/confirmAlert'

function Home () {
  const { users, delUser } = useUsersContext()
  const navigate = useNavigate()

  const handleEditUser = (username) => {
    navigate(`edit/${username}`)
  }

  const handleDeleteUser = (username) => {
    ConfirmAlert({
      title: 'Delete User',
      text: `Are you sure you want to delete ${username}?`,
      onConfirm: async () => {
        await delUser(username)
      },
      onCancel: () => {}
    })
  }

  return (
    <div>
      <div className='flex justify-between mb-3'>
        <h2 className='text-xl font-semibold'>Users</h2>

        <Link to='create' className='bg-slate-800 flex justify-center items-center gap-2 text-white font-semibold rounded-lg py-1 px-4 hover:bg-slate-900 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'>
          <FaPlus /> Add User
        </Link>
      </div>

      <div className=''>
        <TableUsers
          users={users}
          editUser={handleEditUser}
          deleteUser={handleDeleteUser}
        />
      </div>
    </div>
  )
}

export default Home
