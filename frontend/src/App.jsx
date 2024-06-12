import { BrowserRouter, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import renderRoutes from './routes'
import { AuthProvider } from '@/contexts/authContext'
import { Toaster } from 'react-hot-toast'

function App () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </AuthProvider>
      <Toaster position='bottom-right' />
    </BrowserRouter>
  )
}

export default App
