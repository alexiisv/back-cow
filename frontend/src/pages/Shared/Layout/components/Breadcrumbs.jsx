import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs () {
  const { pathname } = useLocation()
  const pathnames = pathname.split('/').filter((x) => x)

  return (
    <nav className='w-max text-sm' aria-label='Breadcrumb'>
      <ol className='flex'>
        <li>
          <Link to='/' className=''>
            home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          return (
            <li key={name}>
              <span className='mx-2'>/</span>
              {isLast
                ? (
                  <span className='text-gray-600'>{name}</span>
                  )
                : (
                  <Link to={routeTo} className='text-gray-500 hover:underline'>{name}</Link>
                  )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
