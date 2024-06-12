import { Link, NavLink } from 'react-router-dom'
import { FaHouse, FaCow, FaUser, FaXmark, FaArrowRightToBracket } from 'react-icons/fa6'
import useAuthContext from '@/hooks/useAuthContext'
import useLayoutContext from '../hooks/useLayoutContext'
import { PATHS } from '@/routes/paths'

const OPCIONS = [
  {
    name: 'Home',
    href: PATHS.HOME,
    icon: FaHouse,
    roles: ['USER_ROLE', 'ADMIN_ROLE']
  },
  {
    name: 'Cows',
    href: PATHS.COWS,
    icon: FaCow,
    roles: ['USER_ROLE', 'ADMIN_ROLE']
  },
  {
    name: 'Users',
    href: PATHS.USERS,
    icon: FaUser,
    roles: ['ADMIN_ROLE']
  }
]

function Menu () {
  const { user, logout } = useAuthContext()
  const { openMenu, setOpenMenu } = useLayoutContext()

  return (
    <aside
      className={`
      ${
        openMenu ? 'translate-x-0' : '-translate-x-80'
      } bg-white shadow-sm fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-slate-600/20`}
    >
      <div className='absolute right-2 top-2'>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className='text-center text-2xl p-2 rounded-lg flex items-center transition-all hover:bg-slate-200 xl:hidden'
        >
          <FaXmark />
        </button>
      </div>
      <div className='h-full flex flex-col flex-nowrap justify-between'>
        <div>
          <div className='m-4 mt-8 text-center'>
            <Link to='/' className='text-2xl font-bold text-slate-700'>
              Cows Udenar
            </Link>
          </div>
          <div className='m-4'>
            <ul className='mb-4 flex flex-col gap-2'>
              {OPCIONS.map((opcion) => (
                opcion.roles.includes(user.role) && (
                  <li key={opcion.name}>
                    <NavLink
                      to={opcion.href}
                      className={({ isActive }) =>
                    `align-middle font-bold text-center transition-all py-3 px-4 rounded-lg w-full flex items-center gap-4 capitalize ${
                      isActive
                        ? 'bg-gradient-to-tr from-slate-900 to-slate-800 text-white shadow-md shadow-slate-900/10 hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85]'
                        : 'text-slate-800 hover:bg-slate-200 active:opacity-[0.85]'
                    }`}
                    >
                      {opcion.icon && <opcion.icon className='text-xl' />}
                      {opcion.name}
                    </NavLink>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>

        <div className='m-4 flex items-center justify-between'>
          <div className='bg-slate-100 w-full px-4 py-1 flex flex-col border-r border-slate-800/20 rounded-l-lg'>
            <span className='capitalize font-semibold'>
              {user.username}
            </span>
            <span className='text-sm -mt-1'>
              {user.email}
            </span>
          </div>
          <button
            className='bg-slate-100 text-2xl p-3 rounded-r-lg hover:bg-rose-200 hover:text-rose-600 transition-colors'
            aria-label='Cerrar sesion'
            onClick={logout}
          >
            <FaArrowRightToBracket />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Menu
