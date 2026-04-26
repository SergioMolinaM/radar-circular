// src/pages/Landing.tsx — Landing / onboarding para Radar Circular
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Map, TrendingUp, Globe, Scale, ShieldCheck, ChevronDown } from 'lucide-react'

const fichas = [
  {
    icon: BarChart3,
    titulo: 'Datos públicos, accesibles',
    descripcion: 'La información existe en el RETC, SNIFA, SMA y otros organismos. Radar la reúne, la cruza y la presenta con trazabilidad completa: cada cifra identifica su fuente oficial y año.',
  },
  {
    icon: Map,
    titulo: 'Mapa territorial',
    descripcion: 'Dónde se recoge y dónde se valoriza. Cobertura domiciliaria por comuna, instalaciones de valorización de envases y de neumáticos con coordenadas reales del RETC.',
  },
  {
    icon: TrendingUp,
    titulo: 'Contexto de mercado',
    descripcion: '1,96 millones de toneladas de envases al año. Solo un tercio se recicla y más de la mitad de ese reciclaje ocurre fuera del sistema formal. Datos estimados del mercado con advertencia explícita.',
  },
  {
    icon: Globe,
    titulo: 'Chile en el mundo',
    descripcion: 'Benchmarking con UE, Alemania, Francia, Bélgica, Corea del Sur, Colombia y Brasil. Trayectorias comparadas, no rankings superficiales.',
  },
  {
    icon: Scale,
    titulo: 'Marco regulatorio al día',
    descripcion: 'Envases, neumáticos, aceites lubricantes, aparatos eléctricos. Estado de cada decreto, plazos de cumplimiento y metas vigentes. Actualizado cuando hay novedades oficiales.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Sin datos inventados',
    descripcion: 'Cada cifra identifica su fuente oficial y año. Las estimaciones se presentan como tales, con advertencia visible. Lo que no se puede verificar, no se publica.',
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

/* Radar animado (versión blanca para hero oscuro) */
function RadarIconWhite({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <circle cx="20" cy="20" r="12" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <circle cx="20" cy="20" r="6" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="2.5" fill="#ffffff" />
      <line x1="20" y1="20" x2="20" y2="2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="4s" repeatCount="indefinite" />
      </line>
      <path d="M20 20 L20 2 A18 18 0 0 1 35.6 11.0 Z" fill="rgba(255,255,255,0.12)">
        <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}

export function Landing() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>

      {/* ── Hero verde oscuro ── */}
      <div style={{ background: 'linear-gradient(180deg, #1a4d2e 0%, #2d7a4f 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 pt-6 md:pt-8 pb-8">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <RadarIconWhite size={48} />
            </div>
            <h1 className="text-3xl md:text-4xl tracking-tight text-white mb-2">
              <span className="font-bold">Radar</span>{' '}
              <span className="font-light">Circular</span>
            </h1>
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.85)' }}>
              La Ley REP obliga a las empresas responsables de envases y embalajes, neumáticos,
              aceites lubricantes, aparatos eléctricos y electrónicos, pilas, baterías y textiles
              a hacerse cargo de la gestión de los residuos derivados de esos productos.
              Pero la información sobre metas, trazabilidad, fiscalización y cumplimiento de este
              mandato sigue dispersa en distintas plataformas y registros públicos.
              Radar Circular la reúne, la cruza y la convierte en información clara, ordenada y accesible.
            </p>
            <Link
              to="/panel"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: '#ffffff', color: '#1a4d2e' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0fdf4')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              Ingresar al Radar
            </Link>
          </div>
        </div>
      </div>

      {/* ── Wave de transición hero → blanco ── */}
      <div style={{ background: 'linear-gradient(180deg, #2d7a4f 0%, #2d7a4f 100%)', marginTop: -1 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Tarjetas sobre fondo blanco ── */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {fichas.map((f) => (
            <div
              key={f.titulo}
              className="p-6 rounded-xl shadow-sm transition-all hover:shadow-md"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(45,122,79,0.3)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e5e7eb'
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              <f.icon size={32} style={{ color: '#2d7a4f' }} className="mb-3" />
              <h3 className="font-semibold mb-2" style={{ color: '#1a4d2e' }}>{f.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{f.descripcion}</p>
            </div>
          ))}
        </div>

        {/* ── ¿Por qué Radar? ── */}
        <div className="mb-14">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all"
            style={{
              backgroundColor: '#f0fdf4',
              border: '1px solid #d1fae5',
              color: '#1a4d2e',
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
                backgroundColor: '#f0fdf4',
                border: '1px solid #d1fae5',
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
      <footer className="text-center py-8" style={{ backgroundColor: '#f0fdf4' }}>
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
