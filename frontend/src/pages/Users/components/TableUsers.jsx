import { FaPencil, FaTrashCan } from 'react-icons/fa6'

function TableUsers ({ users, editUser, deleteUser }) {
  return (
    <table className='table-auto border-separate border-spacing-2 -mx-2'>
      <thead className='text-left'>
        <tr>
          <th className='bg-white rounded-lg px-4 py-2 w-1/4'>Username</th>
          <th className='bg-white rounded-lg px-4 py-2 w-2/4'>Email</th>
          <th className='bg-white rounded-lg px-4 py-2 w-1/4'>Role</th>
          <th className='bg-white rounded-lg px-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.username}>
            <td className='px-4 py-1'>{user.username}</td>
            <td className='px-4 py-1'>{user.email}</td>
            <td className='px-4 py-1'>{
                  user.role === 'ADMIN_ROLE'
                    ? (<span className='bg-green-600 text-sm text-white font-semibold py-0.5 px-2 rounded-lg'>Admin</span>)
                    : (<span className='bg-blue-600 text-sm text-white font-semibold py-0.5 px-2 rounded-lg'>User</span>)
                }
            </td>
            <td className='px-4 py-1 flex gap-2'>
              <button
                onClick={() => editUser(user.username)}
                aria-label='Edit'
                className='text-center p-2 rounded-lg transition-colors hover:bg-slate-200'
              >
                <FaPencil />
              </button>
              <button
                aria-label='Delete'
                onClick={() => deleteUser(user.username)}
                className='text-center text-rose-600 p-2 rounded-lg transition-colors hover:bg-rose-200'
              >
                <FaTrashCan />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableUsers
