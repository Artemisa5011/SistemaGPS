// src/components/auth/Login.jsx
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signIn } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault() // Evita que la página se recargue
    setLoading(true)
    setError('')

    try {
      await signIn(email, password)
      // Si el login es exitoso, el usuario será redirigido automáticamente
    } catch {
      setError('Correo o contraseña incorrectos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="raven-shell min-h-screen px-5 py-8 sm:px-8 lg:px-12">
      <div className="raven-layout mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
        <section className="raven-intro flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="raven-mark raven-mark-small" role="img" aria-label="Cuervo con las alas abiertas sobre un pin de ubicación">
                <svg width="88" height="76" viewBox="0 0 132 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M66 108C66 108 29 72.5 29 42.5C29 21.8 45.6 5 66 5C86.4 5 103 21.8 103 42.5C103 72.5 66 108 66 108Z" fill="#2563EB" />
                  <path d="M66 72C82.0163 72 95 59.0163 95 43C95 26.9837 82.0163 14 66 14C49.9837 14 37 26.9837 37 43C37 59.0163 49.9837 72 66 72Z" fill="#E5EEFF" />
                  <path d="M66 62C76.4934 62 85 53.4934 85 43C85 32.5066 76.4934 24 66 24C55.5066 24 47 32.5066 47 43C47 53.4934 55.5066 62 66 62Z" fill="#111827" />
                  <path d="M66 30C61.5 23 54 19 43 19C49 27 53 34 54 42C46 38 37 37 27 40C38 45 47 51 53 59C48 59 42 61 36 65C48 68 57 65 66 58C75 65 84 68 96 65C90 61 84 59 79 59C85 51 94 45 105 40C95 37 86 38 78 42C79 34 83 27 89 19C78 19 70.5 23 66 30Z" fill="#111827" />
                  <path d="M66 35L73 39L69 46H63L59 39L66 35Z" fill="#F5B83D" />
                  <circle cx="60" cy="34" r="2" fill="#F5B83D" />
                  <circle cx="72" cy="34" r="2" fill="#F5B83D" />
                  <path d="M62 43H70L66 48L62 43Z" fill="#F5B83D" />
                  <path d="M66 81V101" stroke="#2563EB" stroke-width="4" stroke-linecap="round" />
                </svg>
              </div>
              <div>
                <p className="raven-kicker">Sistema de Rastreo GPS</p>
                <p className="raven-brand-small">RAVEN TRACK</p>
              </div>
            </div>
            <p className="raven-eyebrow">La sombra conoce tu camino</p>
            <h1 className="raven-heading mt-4 max-w-2xl text-4xl leading-tight text-white sm:text-6xl">
              Vigilancia inteligente para cada ruta.
            </h1>
            <p className="raven-lead mt-6 max-w-xl text-base leading-7 sm:text-lg">
              Protegemos el movimiento de tu empresa con información precisa, decisiones oportunas y una presencia que nunca pierde de vista el camino.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:mt-16">
            <article className="raven-purpose">
              <span className="raven-purpose-number">01</span>
              <h2>Misión</h2>
              <p>Dar control y tranquilidad mediante un rastreo GPS claro, confiable y accesible.</p>
            </article>
            <article className="raven-purpose">
              <span className="raven-purpose-number">02</span>
              <h2>Visión</h2>
              <p>Ser el aliado tecnológico que convierte cada trayecto en una operación segura.</p>
            </article>
            <article className="raven-purpose">
              <span className="raven-purpose-number">03</span>
              <h2>Objetivo</h2>
              <p>Optimizar flotas, proteger activos y anticiparnos a cada riesgo del camino.</p>
            </article>
          </div>
        </section>

        <section className="raven-login-panel flex items-center p-6 sm:p-10 lg:sticky lg:top-8 lg:min-h-[560px]">
          <div className="w-full">
            <div className="mb-8 text-center">
              <div className="raven-login-header flex items-center justify-center gap-3">
                <div className="raven-mark raven-mark-login-small" role="img" aria-label="Cuervo con las alas abiertas sobre un pin de ubicación">
                  <svg width="64" height="55" viewBox="0 0 132 112" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M66 108C66 108 29 72.5 29 42.5C29 21.8 45.6 5 66 5C86.4 5 103 21.8 103 42.5C103 72.5 66 108 66 108Z" fill="#2563EB" />
              <path d="M66 72C82.0163 72 95 59.0163 95 43C95 26.9837 82.0163 14 66 14C49.9837 14 37 26.9837 37 43C37 59.0163 49.9837 72 66 72Z" fill="#E5EEFF" />
              <path d="M66 62C76.4934 62 85 53.4934 85 43C85 32.5066 76.4934 24 66 24C55.5066 24 47 32.5066 47 43C47 53.4934 55.5066 62 66 62Z" fill="#111827" />
              <path d="M66 30C61.5 23 54 19 43 19C49 27 53 34 54 42C46 38 37 37 27 40C38 45 47 51 53 59C48 59 42 61 36 65C48 68 57 65 66 58C75 65 84 68 96 65C90 61 84 59 79 59C85 51 94 45 105 40C95 37 86 38 78 42C79 34 83 27 89 19C78 19 70.5 23 66 30Z" fill="#111827" />
              <path d="M66 35L73 39L69 46H63L59 39L66 35Z" fill="#F5B83D" />
              <circle cx="60" cy="34" r="2" fill="#F5B83D" />
              <circle cx="72" cy="34" r="2" fill="#F5B83D" />
              <path d="M62 43H70L66 48L62 43Z" fill="#F5B83D" />
              <path d="M66 81V101" stroke="#2563EB" stroke-width="4" stroke-linecap="round" />
                  </svg>
                </div>
                <div className="text-left">
                  <h2 className="raven-login-title">RAVEN TRACK</h2>
                  <p className="raven-login-subtitle">Acceso al centro de control</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="raven-label block text-sm font-medium mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="raven-input w-full px-4 py-3"
              placeholder="admin@empresa.com"
              required
            />
          </div>

          <div>
            <label className="raven-label block text-sm font-medium mb-2">
              Contraseña
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="raven-input w-full px-4 py-3"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="raven-error text-sm text-center p-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="raven-submit w-full py-3 font-semibold transition disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Iniciando sesión...
              </span>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
            </form>

            <div className="mt-7 text-center">
          <p className="raven-register text-sm">
            ¿No tienes cuenta?{' '}
            <button className="raven-register-link font-medium">
              Regístrate
            </button>
          </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}