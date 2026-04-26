// src/pages/Landing.tsx — Landing / onboarding para Radar Circular
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, Map, TrendingUp, Globe, Scale, ShieldCheck, ChevronDown } from 'lucide-react'

const fichas = [
  {
    icon: BarChart3,
    titulo: 'Cumplimiento oficial',
    descripcion: 'Datos declarados por cada SIG a la SMA. Tasas de valorización por material con badges de cumplimiento contra metas DS12 y DS8.',
  },
  {
    icon: Map,
    titulo: 'Mapa territorial',
    descripcion: '52 comunas con recolección ReSimple, 102 instalaciones de valorización EyE y 29 NFU. Coordenadas reales del RETC.',
  },
  {
    icon: TrendingUp,
    titulo: 'Análisis de mercado',
    descripcion: '1,96 millones de toneladas de envases. 33% de valorización. Más de la mitad del reciclaje ocurre fuera del sistema formal.',
  },
  {
    icon: Globe,
    titulo: 'Benchmarking internacional',
    descripcion: 'Chile comparado con UE, Alemania, Francia, Bélgica, Corea del Sur, Colombia y Brasil. Trayectorias, no rankings.',
  },
  {
    icon: Scale,
    titulo: 'Marco regulatorio',
    descripcion: 'DS12 envases, DS8 neumáticos, DS47 aceites, P+AEE en trámite. Metas vigentes, plazos y estado de cada decreto.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Fuentes verificadas',
    descripcion: 'Datos del RETC, SNIFA, SMA, ReSimple y ANIR/Kyklos. Cada cifra con fuente explícita y año. Error Cero.',
  },
]

const queEs = [
  'Una plataforma de inteligencia con datos oficiales sobre la implementación de la Ley REP en Chile',
  'Un radar de cumplimiento real: qué SIG están cumpliendo las metas y cuáles no',
  'Un mapa territorial de infraestructura de valorización con coordenadas verificadas',
  'Una herramienta para tomadores de decisiones: reguladores, SIG, productores, consultores',
]

const queNoEs = [
  'No es un medio de comunicación ni un portal de noticias',
  'No es una herramienta de la SMA ni del MMA (es independiente)',
  'No contiene datos inventados ni estimaciones sin advertencia',
  'No reemplaza al RETC, SNIFA ni SISREP — los complementa con análisis',
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
    <div style={{ backgroundColor: '#0f1419', minHeight: '100vh', color: '#f9fafb' }}>
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* ── Header ── */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex justify-center">
            <RadarIcon />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span style={{ color: '#2d7a4f' }}>Radar</span>{' '}
            <span>Circular</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Inteligencia sobre la Ley REP en Chile. Datos oficiales, análisis de cumplimiento y contexto territorial — no opiniones.
          </p>
          <div className="pt-4">
            <Link
              to="/panel"
              className="inline-block px-8 py-3.5 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1a4d2e, #2d7a4f)' }}
            >
              Ingresar al Radar
            </Link>
          </div>
        </div>

        {/* ── Grid de fichas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {fichas.map((f) => (
            <div
              key={f.titulo}
              className="p-6 rounded-xl transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <f.icon size={24} style={{ color: '#2d7a4f' }} className="mb-3" />
              <h3 className="font-semibold mb-2" style={{ color: '#a8d5ba' }}>{f.titulo}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>{f.descripcion}</p>
            </div>
          ))}
        </div>

        {/* ── Qué es / Qué no es ── */}
        <div className="mb-20">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.01]"
            style={{
              backgroundColor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#9ca3af',
            }}
          >
            ¿Por qué Radar Circular?
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
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#a8d5ba' }}>Qué es</h4>
                <ul className="space-y-2">
                  {queEs.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: '#9ca3af' }}>
                      <span style={{ color: '#2d7a4f' }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3" style={{ color: '#9ca3af' }}>Qué no es</h4>
                <ul className="space-y-2">
                  {queNoEs.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm" style={{ color: '#6b7280' }}>
                      <span style={{ color: '#6b7280' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <footer className="text-center space-y-2 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: '#6b7280' }}>
            © 2026 Tercera Letra SpA. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: '#4b5563' }}>
            Datos oficiales que se actualizan según estén disponibles.
          </p>
        </footer>
      </div>
    </div>
  )
}
