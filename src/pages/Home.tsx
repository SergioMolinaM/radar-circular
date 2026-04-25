// src/pages/Home.tsx
import { Link } from 'react-router-dom'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { ArrowRight, HelpCircle } from 'lucide-react'
import { useState } from 'react'

function Tooltip({ texto }: { texto: string }) {
  const [visible, setVisible] = useState(false)
  return (
    <span className="relative inline-block">
      <button
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onClick={() => setVisible(!visible)}
        className="opacity-40 hover:opacity-80 transition-opacity"
        aria-label="Más información"
      >
        <HelpCircle size={13} />
      </button>
      {visible && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-lg bg-white text-gray-800 text-xs leading-relaxed shadow-xl border border-gray-100 pointer-events-none">
          {texto}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
        </span>
      )}
    </span>
  )
}

const cifras = [
  {
    valor: '6', label: 'Productos prioritarios', detalle: '3 con metas vigentes',
    tooltip: 'Sustancias u objetos que al transformarse en residuo quedan sujetos a obligaciones REP. Los 6 PP son: Envases y Embalajes, Neumáticos, Aceites Lubricantes, Pilas y AEE, Baterías y Textiles.',
  },
  {
    valor: '35', label: 'Sistemas de Gestión', detalle: '12 EyE · 23 NFU',
    tooltip: 'Mecanismos mediante los cuales los productores cumplen sus obligaciones. Dato oficial: RETC Open Data, noviembre 2025.',
  },
  {
    valor: '~40.000', label: 'Empresas reguladas', detalle: 'EyE ~17k · P+AEE ~20,5k · NFU ~475',
    tooltip: 'Estimación cruzada de empresas que introducen PP al mercado. Fuentes: Kyklos/SII (EyE), MMA (P+AEE), Chile Neumáticos AG (NFU).',
  },
  {
    valor: '$2.700M', label: 'Fondo para el Reciclaje', detalle: '140 proyectos desde 2018',
    tooltip: 'Fondo MMA que financia proyectos municipales de reciclaje con contribuciones de los productores.',
  },
]

const estadoBadge: Record<string, { text: string; bg: string; text_color: string }> = {
  vigente: { text: 'Vigente', bg: 'rgba(45, 155, 110, 0.15)', text_color: '#3ab882' },
  'pre-publicacion': { text: 'Pre-publicación', bg: 'rgba(232, 168, 56, 0.15)', text_color: '#e8a838' },
  'consulta-publica': { text: 'Consulta pública', bg: 'rgba(74, 158, 218, 0.15)', text_color: '#4a9eda' },
  'en-tramitacion': { text: 'En tramitación', bg: 'rgba(92, 110, 126, 0.15)', text_color: '#8899a6' },
}

export function Home() {
  return (
    <div className="p-6 md:p-10 max-w-6xl space-y-10">
      {/* Hero */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Ley REP en Chile
        </h2>
        <p style={{ color: 'var(--text-secondary)' }} className="text-lg max-w-2xl leading-relaxed">
          Estado de implementación de la Ley 20.920 de Responsabilidad Extendida del Productor.
          Datos públicos, trazables a fuente oficial.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cifras.map((c) => (
          <div
            key={c.label}
            className="p-4 rounded-xl"
            style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
              <Tooltip texto={c.tooltip} />
            </div>
            <p className="text-2xl font-bold">{c.valor}</p>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.detalle}</p>
          </div>
        ))}
      </div>

      {/* PP Grid */}
      <div>
        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Productos prioritarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {productosPrioritarios.map((pp) => {
            const badge = estadoBadge[pp.estadoDecreto]
            return (
              <Link
                key={pp.id}
                to={`/producto/${pp.id}`}
                className="group p-5 rounded-xl transition-all duration-200 hover:translate-y-[-2px]"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = pp.color
                  e.currentTarget.style.boxShadow = `0 4px 20px ${pp.color}15`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: pp.color }} />
                    <h4 className="font-semibold text-base" style={{ fontFamily: "'DM Serif Display', serif" }}>
                      {pp.nombre}
                    </h4>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full shrink-0"
                    style={{ backgroundColor: badge.bg, color: badge.text_color }}
                  >
                    {badge.text}
                  </span>
                </div>
                <p className="text-sm leading-relaxed line-clamp-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {pp.descripcion}
                </p>
                {pp.decreto && (
                  <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>{pp.decreto}</p>
                )}
                {pp.sistemasGestion.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap">
                    {pp.sistemasGestion.map((sg) => (
                      <span
                        key={sg.nombre}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
                      >
                        {sg.nombre}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-1 mt-3 text-xs group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent)' }}>
                  Ver detalle <ArrowRight size={12} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Qué es RC */}
      <div
        className="p-6 rounded-xl space-y-3"
        style={{ backgroundColor: 'var(--accent-subtle)', border: '1px solid var(--border)' }}
      >
        <h3 className="text-lg font-bold" style={{ fontFamily: "'DM Serif Display', serif" }}>
          ¿Qué es Radar Circular?
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          La información pública sobre la Ley REP está dispersa en múltiples plataformas
          estatales: RETC (MMA), SNIFA (SMA), SISREP, SINADER, Ventanilla Única, Fondo
          para el Reciclaje y el portal de Economía Circular del MMA. Los estudios
          sectoriales (Kyklos, ANIR) se publican como documentos extensos de difícil acceso.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Radar Circular reúne, visualiza y contextualiza estos datos en un solo lugar.
          No reemplaza las fuentes oficiales — las complementa con análisis, trazabilidad
          y la capa analítica de las Mesas Ejecutivas para la Productividad (MEP) convocadas
          por CORFO y estudios académicos.
        </p>
        <Link
          to="/ley-rep"
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          Conocer más sobre la Ley REP <ArrowRight size={14} />
        </Link>
      </div>

      {/* Fuentes */}
      <div className="text-xs space-y-1 pt-2" style={{ color: 'var(--text-muted)' }}>
        <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>Fuentes de datos</p>
        <p>
          RETC Open Data (MMA) · SNIFA (SMA) · Estudio Kyklos 2024 (ANIR-ReSimple) ·
          Mesas Ejecutivas para la Productividad CORFO 2025 · DS 12/2020, DS 8/2019,
          DS 47/2023 · BCN Ley Chile · Comunicados SMA y MMA · País Circular.
        </p>
      </div>
    </div>
  )
}
