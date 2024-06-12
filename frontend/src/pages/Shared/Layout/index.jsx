import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { LayoutProvider } from './context/layoutContext'

function Layout () {
  return (
    <LayoutProvider>
      <div className='min-h-screen'>
        <Menu />

        <div className='py-4 px-6 xl:px-0 xl:pr-6 xl:pl-4 xl:ml-80'>
          <Navbar />

          <Outlet />
        </div>
      </div>
    </LayoutProvider>
  )
}

export default Layout
