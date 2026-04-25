// src/components/CumplimientoPanel.tsx
import type { MaterialCumplimiento } from '../data/cumplimiento-eye'

interface Props {
  datos: MaterialCumplimiento[]
  categoria: 'domiciliario' | 'no-domiciliario'
}

function formatTon(n: number) {
  return Math.round(n).toLocaleString('es-CL')
}

function BarraComparativa({ meta, cumpleSIG, tasaTotalPais, cumpleMeta }: {
  meta: number; cumpleSIG: number; tasaTotalPais: number; cumpleMeta: boolean
}) {
  const maxVal = Math.max(meta, cumpleSIG, tasaTotalPais, 20)
  const escala = 100 / maxVal

  return (
    <div className="space-y-1.5">
      {/* Barra meta */}
      <div className="flex items-center gap-2">
        <span className="text-xs w-20 text-right" style={{ color: 'var(--text-muted)' }}>Meta DS12</span>
        <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
          <div
            className="h-full rounded-full"
            style={{ width: `${meta * escala}%`, backgroundColor: 'var(--text-muted)', opacity: 0.5 }}
          />
        </div>
        <span className="text-xs w-10 font-medium" style={{ color: 'var(--text-muted)' }}>{meta}%</span>
      </div>
      {/* Barra SIG (cumplimiento real) */}
      <div className="flex items-center gap-2">
        <span className="text-xs w-20 text-right font-medium" style={{ color: cumpleMeta ? 'var(--accent)' : 'var(--red)' }}>
          Dentro SIG
        </span>
        <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
          <div
            className="h-full rounded-full"
            style={{
              width: `${cumpleSIG * escala}%`,
              backgroundColor: cumpleMeta ? 'var(--accent)' : 'var(--red)',
            }}
          />
        </div>
        <span className="text-xs w-10 font-bold" style={{ color: cumpleMeta ? 'var(--accent)' : 'var(--red)' }}>
          {cumpleSIG}%
        </span>
      </div>
      {/* Barra total país */}
      <div className="flex items-center gap-2">
        <span className="text-xs w-20 text-right" style={{ color: 'var(--text-muted)' }}>Total país</span>
        <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-elevated)' }}>
          <div
            className="h-full rounded-full opacity-40"
            style={{ width: `${tasaTotalPais * escala}%`, backgroundColor: 'var(--blue)' }}
          />
        </div>
        <span className="text-xs w-10" style={{ color: 'var(--text-muted)' }}>{tasaTotalPais}%</span>
      </div>
    </div>
  )
}

export function CumplimientoPanel({ datos, categoria }: Props) {
  const materiales = datos.filter(d => d.categoria === categoria)
  const titulo = categoria === 'domiciliario' ? 'Envases domiciliarios' : 'Envases no domiciliarios'
  const cumplen = materiales.filter(m => m.cumpleMeta).length
  const total = materiales.length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{titulo}</h4>
        <span className="text-sm px-3 py-1 rounded-full" style={{
          backgroundColor: cumplen === total ? 'rgba(45, 155, 110, 0.15)' : 'rgba(224, 82, 82, 0.15)',
          color: cumplen === total ? 'var(--accent)' : 'var(--red)',
        }}>
          {cumplen} de {total} cumplen meta dentro de SIG
        </span>
      </div>

      <div className="space-y-6">
        {materiales.map(m => (
          <div key={m.material} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{m.material}</p>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{
                backgroundColor: m.cumpleMeta ? 'rgba(45, 155, 110, 0.15)' : 'rgba(224, 82, 82, 0.15)',
                color: m.cumpleMeta ? 'var(--accent)' : 'var(--red)',
              }}>
                {m.cumpleMeta ? 'Cumple' : 'No cumple'}
              </span>
            </div>

            <BarraComparativa
              meta={m.metaDS12}
              cumpleSIG={m.cumpleSIG}
              tasaTotalPais={m.tasaTotalPais}
              cumpleMeta={m.cumpleMeta}
            />

            <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
              <div>
                <p style={{ color: 'var(--text-muted)' }}>Ton. dentro SIG</p>
                <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{formatTon(m.tonSIG)}</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)' }}>Ton. fuera SIG</p>
                <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>{formatTon(m.tonFueraSIG)}</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)' }}>Total país</p>
                <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>{formatTon(m.tonTotalPais)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
