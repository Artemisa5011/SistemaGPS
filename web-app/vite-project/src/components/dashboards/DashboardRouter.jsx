// src/components/dashboards/DashboardRouter.jsx
import { useAuth } from '../../hooks/useAuth'

// Por ahora, un dashboard simple
const AdminDashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">👋 Dashboard de Administrador</h1>
    <p className="text-gray-600 mt-2">Bienvenido al sistema de gestión de flota</p>
  </div>
)

const OwnerDashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">🚗 Dashboard de Propietario</h1>
    <p className="text-gray-600 mt-2">Gestiona tus vehículos y conductores</p>
  </div>
)

const ConductorDashboard = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">👤 Dashboard de Conductor</h1>
    <p className="text-gray-600 mt-2">Bienvenido, aquí está tu información</p>
  </div>
)

export const DashboardRouter = () => {
  const { user } = useAuth()

  switch (user?.role) {
    case 'owner':
      return <OwnerDashboard />
    case 'conductor':
      return <ConductorDashboard />
    case 'admin':
    default:
      return <AdminDashboard />
  }
}