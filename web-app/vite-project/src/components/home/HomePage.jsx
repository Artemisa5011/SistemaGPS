import { useState } from 'react'

const purposeItems = [
  {
    number: '01',
    title: 'Misión',
    text: 'Dar control y tranquilidad mediante un rastreo GPS claro, confiable y accesible para cada operación.',
  },
  {
    number: '02',
    title: 'Visión',
    text: 'Ser el aliado tecnológico que convierte cada trayecto en una operación segura, eficiente y visible.',
  },
  {
    number: '03',
    title: 'Objetivo',
    text: 'Optimizar flotas, proteger activos y anticiparnos a cada riesgo con información precisa en tiempo real.',
  },
]

export const HomePage = ({ onLogin }) => {
  const [activeSection, setActiveSection] = useState('inicio')

  const goToSection = (section) => {
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="raven-home">
      <nav className="raven-nav mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <button type="button" className="raven-nav-brand" onClick={() => goToSection('inicio')}>
          <span className="raven-nav-mark">R</span>
          RAVEN TRACK
        </button>
        <div className="flex items-center gap-6">
          <button
            type="button"
            className={`raven-nav-link ${activeSection === 'inicio' ? 'raven-nav-link-active' : ''}`}
            onClick={() => goToSection('inicio')}
          >
            INICIO
          </button>
          <button type="button" className="raven-nav-login" onClick={onLogin}>
            INICIAR SESIÓN
          </button>
        </div>
      </nav>

      <section id="inicio" className="raven-home-hero mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pb-28 lg:pt-24">
        <div>
          <p className="raven-eyebrow">La sombra conoce tu camino</p>
          <h1 className="raven-home-heading mt-5 max-w-3xl text-5xl leading-tight text-white sm:text-7xl">
            Sistema de Rastreo GPS.
          </h1>
          <p className="raven-home-lead mt-7 max-w-xl text-lg leading-8">
            Tecnologia de rastreo para empresas que necesitan proteger sus vehiculos, cuidar a sus equipos y tomar mejores decisiones en cada ruta.
          </p>
        </div>
        <div className="raven-home-emblem" aria-hidden="true">
          <div className="raven-emblem-ring">
            <span>RAVEN</span>
            <strong>TRACK</strong>
            <i>GPS / CONTROL / SEGURIDAD</i>
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="raven-about mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <p className="raven-eyebrow">Quiénes somos</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <h2 className="raven-section-heading text-3xl text-white sm:text-4xl">Presencia constante. Respuesta precisa.</h2>
          <p className="raven-section-copy max-w-2xl text-base leading-7">
            En Sistema GPS acompañamos el movimiento de tu negocio con una plataforma pensada para dar visibilidad, seguridad y control. Convertimos datos de ubicación en decisiones concretas para que tu operación avance con confianza.
          </p>
        </div>
      </section>

      <section id="proposito" className="raven-purpose-section mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {purposeItems.map((item) => (
            <article className="raven-home-purpose" key={item.number}>
              <span className="raven-purpose-number">{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="raven-home-footer px-5 py-6 text-center sm:px-8">
        RAVEN TRACK <span aria-hidden="true">&middot;</span> Sistema de Rastreo GPS
        <p className="mt-2 normal-case tracking-normal">Derechos reservados por ALUCARD © 2026</p>
      </footer>
      
    </main>
  )
}
