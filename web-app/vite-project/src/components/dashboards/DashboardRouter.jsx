// src/components/dashboards/DashboardRouter.jsx
import { useAuth } from '../../hooks/useAuth'

const DashboardShell = ({ title, icon, description, signOut }) => (
  <main className="min-h-screen bg-slate-100 p-6">
    <header className="mx-auto flex max-w-6xl items-center justify-between rounded-xl bg-white p-5 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{icon} {title}</h1>
        <p className="mt-2 text-slate-600">{description}</p>
      </div>
      <button
        type="button"
        onClick={signOut}
        className="rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Salir
      </button>
    </header>
  </main>
)

const AdminDashboard = ({ signOut }) => (
  <DashboardShell
    title="Dashboard de Administrador"
    icon="👋"
    description="Bienvenido al sistema de gestión de flota"
    signOut={signOut}
  />
)

const OwnerDashboard = ({ signOut }) => (
  <DashboardShell
    title="Dashboard de Propietario"
    icon="🚗"
    description="Gestiona tus vehículos y conductores"
    signOut={signOut}
  />
)

const ConductorDashboard = ({ signOut }) => (
  <DashboardShell
    title="Dashboard de Conductor"
    icon="👤"
    description="Bienvenido, aquí está tu información"
    signOut={signOut}
  />
)

export const DashboardRouter = () => {
  const { user, signOut } = useAuth()

  switch (user?.role) {
    case 'owner':
      return <OwnerDashboard signOut={signOut} />
    case 'conductor':
      return <ConductorDashboard signOut={signOut} />
    case 'admin':
    default:
      return <AdminDashboard signOut={signOut} />
  }
}