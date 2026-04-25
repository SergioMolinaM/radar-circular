// src/pages/HojaDeRuta.tsx
import { useState } from 'react'
import { hitosFuturos, certezaConfig } from '../data/hoja-ruta'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'
import { Callout } from '../components/Callout'

type FiltroPP = 'todos' | string

export function HojaDeRuta() {
  const [filtro, setFiltro] = useState<FiltroPP>('todos')

  const hitosFiltrados = filtro === 'todos'
    ? hitosFuturos
    : hitosFuturos.filter((h) => h.ppId === filtro)

  return (
    <div className="p-8 max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Hoja de ruta REP</h2>
        <p className="mb-1" style={{ color: 'var(--text-secondary)' }}>
          Lo que viene: hitos regulatorios y operativos determinados por la normativa vigente.
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          Fuentes: DS 12/2020, DS 8/2019, DS 47/2023, Decreto P+AEE, comunicados MMA y SMA.
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      <Callout variant="explainer" titulo="¿Qué es esta sección?">
        Una proyección de los hitos regulatorios más relevantes del ecosistema REP para los próximos años.
        Los eventos marcados como "alta certeza" tienen fecha y base legal definida.
        Los de "media" y "baja" dependen de decisiones administrativas o políticas pendientes.
      </Callout>

      {/* Disclaimer */}
      <div className="p-4 rounded-lg border border-amber-900/50 bg-amber-950/20 text-sm" style={{ color: 'var(--text-secondary)' }}>
        <p className="font-medium text-amber-300 mb-1">Nota importante</p>
        <p>
          Esta hoja de ruta refleja los plazos establecidos por la normativa vigente a abril de 2026.
          Los eventos marcados como "determinado por decreto" tienen fecha fija por ley. Los "estimados"
          dependen de actos administrativos pendientes. Todo puede cambiar por modificaciones legales,
          reglamentarias o decisiones administrativas.
        </p>
      </div>

      {/* Filtro por PP */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFiltro('todos')}
          className="px-3 py-1.5 rounded-lg text-sm transition-colors"
          style={{
            backgroundColor: filtro === 'todos' ? 'var(--bg-elevated)' : 'transparent',
            color: filtro === 'todos' ? 'var(--text-primary)' : 'var(--text-muted)',
          }}
        >
          Todos
        </button>
        {productosPrioritarios.map((pp) => (
          <button
            key={pp.id}
            onClick={() => setFiltro(pp.id)}
            className="px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1.5"
            style={{
              backgroundColor: filtro === pp.id ? 'var(--bg-elevated)' : 'transparent',
              color: filtro === pp.id ? 'var(--text-primary)' : 'var(--text-muted)',
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pp.color }} />
            {pp.nombreCorto}
          </button>
        ))}
      </div>

      {/* Leyenda de certeza */}
      <div className="flex flex-wrap gap-3 text-xs">
        {Object.entries(certezaConfig).map(([key, config]) => (
          <span key={key} className={`px-2 py-0.5 rounded border ${config.className}`}>
            {config.label}
          </span>
        ))}
      </div>

      {/* Timeline */}
      <div className="space-y-0">
        {hitosFiltrados.map((h, i) => {
          const pp = productosPrioritarios.find((p) => p.id === h.ppId)
          const config = certezaConfig[h.certeza]
          return (
            <div key={i} className="flex gap-4 pb-6">
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full shrink-0 mt-1"
                  style={{ backgroundColor: pp?.color || 'var(--text-muted)' }}
                />
                {i < hitosFiltrados.length - 1 && <div className="w-px flex-1" style={{ backgroundColor: 'var(--border)' }} />}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{h.fecha}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>{h.pp}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded border ${config.className}`}>
                    {config.label}
                  </span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-primary)' }}>{h.evento}</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{h.fuente}</p>
              </div>
            </div>
          )
        })}
      </div>

      <FuenteDatos
        fuente="DS 12/2020 · DS 8/2019 · DS 47/2023 · Decreto P+AEE · Comunicados MMA y SMA"
        tipo="oficial"
        fecha="Abril 2026"
        nota="Eventos 'determinado' fijados por decreto. Eventos 'estimado' sujetos a actos administrativos pendientes."
      />
    </div>
  )
}
