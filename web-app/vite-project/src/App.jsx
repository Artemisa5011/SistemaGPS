import { useAuth } from './hooks/useAuth'
import { Login } from './components/auth/Login'
import { DashboardRouter } from './components/dashboards/DashboardRouter'

function App() {
  const { user, loading, configError } = useAuth()

  if (configError) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl rounded-lg bg-red-50 p-6 text-red-800">
          <h1 className="text-xl font-bold">Configuración incompleta</h1>
          <p className="mt-2">{configError}</p>
          <p className="mt-2">Revisa .env.local en la carpeta del proyecto y reinicia Vite.</p>
        </div>
      </div>
    )
  }

  // Mientras carga, muestra un spinner
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    )
  }

  // Si no hay usuario, muestra el login
  if (!user) {
    return <Login />
  }

  // Si hay usuario, muestra el dashboard
  return <DashboardRouter />
}

export default App