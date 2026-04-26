// src/pages/Landing.tsx — Landing / onboarding para Radar Circular
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Map, TrendingUp, Globe, Scale, ShieldCheck, ChevronDown } from 'lucide-react'

const fichas = [
  {
    icon: BarChart3,
    titulo: 'Seis fuentes, una interfaz',
    descripcion: 'Decretos MMA, RETC, SNIFA, datos de SIG, estudios de mercado y registros de Contraloría. Cruzados y contextualizados para que no tengas que hacerlo tú.',
  },
  {
    icon: Map,
    titulo: 'Mapa territorial',
    descripcion: '52 comunas con recolección domiciliaria, 102 instalaciones de valorización de envases y 29 de neumáticos. Coordenadas reales, no estimaciones.',
  },
  {
    icon: TrendingUp,
    titulo: 'Contexto de mercado',
    descripcion: '1,96 millones de toneladas de envases en Chile. Solo un tercio se valoriza. Más de la mitad del reciclaje ocurre fuera del sistema formal de la Ley REP.',
  },
  {
    icon: Globe,
    titulo: 'Chile en el mundo',
    descripcion: 'Benchmarking con UE, Alemania, Francia, Bélgica, Corea del Sur, Colombia y Brasil. Trayectorias comparadas, no rankings superficiales.',
  },
  {
    icon: Scale,
    titulo: 'Marco regulatorio al día',
    descripcion: 'DS12 envases, DS8 neumáticos, DS47 aceites, P+AEE en trámite. Estado actualizado de cada decreto, plazos y metas vigentes.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Trazabilidad total',
    descripcion: 'Cada cifra identifica su fuente oficial y año. Sin datos inventados, sin estimaciones sin advertencia. Lo que no se puede verificar, no se publica.',
  },
]

const queEs = [
  'Una capa de inteligencia sectorial sobre la Ley REP, construida con datos oficiales cruzados y contextualizados',
  'Acceso abierto y gratuito a información que hoy requiere conocimiento especializado para encontrar y entender',
  'Una herramienta para reguladores, sistemas de gestión, productores, gestores, consultores y periodistas',
  'Independencia editorial completa: presenta hechos, no toma posición',
]

const queNoEs = [
  'No es un portal de datos abiertos (Chile tiene varios)',
  'No es un organismo fiscalizador ni una herramienta de la SMA o el MMA',
  'No es un chatbot ni un generador de contenido con IA',
  'No reemplaza al RETC, SNIFA ni SISREP — los hace accesibles',
]

/* Ícono radar: anillos concéntricos SVG */
function RadarIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="36" stroke="#2d7a4f" strokeWidth="1.5" opacity="0.25" />
      <circle cx="40" cy="40" r="26" stroke="#2d7a4f" strokeWidth="1.5" opacity="0.45" />
      <circle cx="40" cy="40" r="16" stroke="#2d7a4f" strokeWidth="1.5" opacity="0.7" />
      <circle cx="40" cy="40" r="5" fill="#2d7a4f" />
      <line x1="40" y1="40" x2="62" y2="22" stroke="#a8d5ba" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function Landing() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero con gradiente verde suave */}
      <div style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 pt-10 md:pt-14 pb-12">

          {/* ── Header ── */}
          <div className="text-center space-y-5 mb-14">
            <div className="flex justify-center">
              <RadarIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span style={{ color: '#1a4d2e' }}>Radar</span>{' '}
              <span style={{ color: '#1f2937' }}>Circular</span>
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#4b5563' }}>
              Información pública dispersa, transformada en inteligencia accesible y verificada.
              Seis fuentes oficiales cruzadas en una sola interfaz.
            </p>
            <div className="pt-2">
              <Link
                to="/panel"
                className="inline-block px-8 py-3 rounded-xl text-white font-semibold text-lg transition-all hover:shadow-lg"
                style={{ backgroundColor: '#2d7a4f' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1a4d2e')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2d7a4f')}
              >
                Ingresar al Radar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido sobre fondo blanco */}
      <div className="max-w-5xl mx-auto px-6 pb-12">

        {/* ── Grid de fichas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {fichas.map((f) => (
            <div
              key={f.titulo}
              className="p-6 rounded-xl shadow-sm transition-all hover:shadow-md"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#a8d5ba')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
            >
              <f.icon size={24} style={{ color: '#2d7a4f' }} className="mb-3" />
              <h3 className="font-semibold mb-2" style={{ color: '#1a4d2e' }}>{f.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>{f.descripcion}</p>
            </div>
          ))}
        </div>

        {/* ── ¿Por qué Radar? ── */}
        <div className="mb-14">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all"
            style={{
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              color: '#4b5563',
            }}
          >
            ¿Por qué Radar?
            <ChevronDown
              size={18}
              className="transition-transform"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>

          {expanded && (
            <div
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl"
              style={{
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb',
              }}
            >
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#1a4d2e' }}>Qué es</h4>
                <ul className="space-y-2.5">
                  {queEs.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: '#374151' }}>
                      <span className="shrink-0 mt-0.5" style={{ color: '#2d7a4f' }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#6b7280' }}>Qué no es</h4>
                <ul className="space-y-2.5">
                  {queNoEs.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                      <span className="shrink-0 mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="text-center py-8" style={{ backgroundColor: '#f3f4f6' }}>
        <p className="text-xs" style={{ color: '#6b7280' }}>
          © 2026 Tercera Letra SpA. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>
          Datos oficiales cruzados y contextualizados con inteligencia artificial.
        </p>
      </footer>
    </div>
  )
}
