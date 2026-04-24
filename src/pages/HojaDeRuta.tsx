// src/pages/HojaDeRuta.tsx
import { useState } from 'react'
import { hitosFuturos, certezaConfig } from '../data/hoja-ruta'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

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
        <p className="text-stone-400 mb-1">
          Lo que viene: hitos regulatorios y operativos determinados por la normativa vigente.
        </p>
        <p className="text-xs text-stone-500">
          Fuentes: DS 12/2020, DS 8/2019, DS 47/2023, Decreto P+AEE, comunicados MMA y SMA.
        </p>
        <UltimaActualizacion fecha="24 de abril de 2026" />
      </div>

      {/* Disclaimer */}
      <div className="p-4 rounded-lg border border-amber-900/50 bg-amber-950/20 text-sm text-stone-400">
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
          className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
            filtro === 'todos' ? 'bg-stone-800 text-stone-100' : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
          }`}
        >
          Todos
        </button>
        {productosPrioritarios.map((pp) => (
          <button
            key={pp.id}
            onClick={() => setFiltro(pp.id)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1.5 ${
              filtro === pp.id ? 'bg-stone-800 text-stone-100' : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
            }`}
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
                  style={{ backgroundColor: pp?.color || '#78716c' }}
                />
                {i < hitosFiltrados.length - 1 && <div className="w-px flex-1 bg-stone-800" />}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs text-stone-500 font-mono">{h.fecha}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded bg-stone-800 text-stone-400">{h.pp}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded border ${config.className}`}>
                    {config.label}
                  </span>
                </div>
                <p className="text-sm text-stone-300">{h.evento}</p>
                <p className="text-xs text-stone-600 mt-0.5">{h.fuente}</p>
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
