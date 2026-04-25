// src/pages/SistemasGestion.tsx
import { useState } from 'react'
import { sigAprobados, getResumenSIG } from '../data/sig-aprobados'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

type FiltroPP = 'todos' | 'eye' | 'nfu'
type FiltroTipo = 'todos' | 'Individual' | 'Colectivo' | 'GRANSIC'

export function SistemasGestion() {
  const [filtroPP, setFiltroPP] = useState<FiltroPP>('todos')
  const [filtroTipo, setFiltroTipo] = useState<FiltroTipo>('todos')
  const resumen = getResumenSIG()

  const filtrados = sigAprobados
    .filter((s) => filtroPP === 'todos' || s.ppId === filtroPP)
    .filter((s) => filtroTipo === 'todos' || s.tipo === filtroTipo)

  const tipoColor: Record<string, string> = {
    GRANSIC: 'bg-emerald-900/50 text-emerald-300',
    Colectivo: 'bg-blue-900/50 text-blue-300',
    Individual: 'bg-stone-800 text-stone-400',
  }

  return (
    <div className="p-8 max-w-5xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Sistemas de Gestión aprobados</h2>
        <p className="text-stone-400 mb-1">
          Listado oficial de todos los SIG autorizados por el MMA para operar bajo la Ley REP.
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Total aprobados</p>
          <p className="text-2xl font-bold">{resumen.totalAprobados}</p>
        </div>
        {resumen.porPP.map((pp) => (
          <div key={pp.pp} className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">{pp.pp}</p>
            <p className="text-xl font-bold">{pp.total}</p>
            <p className="text-xs text-stone-500">{pp.detalle}</p>
          </div>
        ))}
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Sin SIG aprobado aún</p>
          <p className="text-sm text-stone-400 mt-1">ALU · P+AEE · BFU · Textiles</p>
        </div>
      </div>

      <FuenteDatos
        fuente="RETC Open Data — Listado Sistemas de Gestión Aprobados"
        tipo="oficial"
        fecha="21 de octubre 2025"
        nota="Dato oficial del Ministerio del Medio Ambiente publicado en datosretc.mma.gob.cl"
      />

      <div className="p-3 rounded-lg border border-amber-900/30 bg-amber-950/10">
        <p className="text-xs text-amber-400">
          ⚠ Datos de octubre 2025. Pueden existir SIG aprobados después de esa fecha que no aparecen en este listado.
          Verificar en <a href="https://datosretc.mma.gob.cl/dataset/sistemas-de-gestion-aprobados" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">RETC Open Data</a>.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-2">
          <span className="text-xs text-stone-500 self-center mr-1">PP:</span>
          {(['todos', 'eye', 'nfu'] as FiltroPP[]).map((f) => (
            <button
              key={f}
              onClick={() => setFiltroPP(f)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filtroPP === f ? 'bg-stone-800 text-stone-100' : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
              }`}
            >
              {f === 'todos' ? 'Todos' : f === 'eye' ? 'EyE' : 'NFU'}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="text-xs text-stone-500 self-center mr-1">Tipo:</span>
          {(['todos', 'GRANSIC', 'Colectivo', 'Individual'] as FiltroTipo[]).map((f) => (
            <button
              key={f}
              onClick={() => setFiltroTipo(f)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filtroTipo === f ? 'bg-stone-800 text-stone-100' : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
              }`}
            >
              {f === 'todos' ? 'Todos' : f}
            </button>
          ))}
        </div>
        <span className="text-xs text-stone-500 self-center ml-auto">{filtrados.length} resultados</span>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800 text-stone-400 text-left">
              <th className="pb-3 pr-4">#</th>
              <th className="pb-3 pr-4">Nombre</th>
              <th className="pb-3 pr-4">PP</th>
              <th className="pb-3 pr-4">Categoría</th>
              <th className="pb-3 pr-4">Tipo</th>
              <th className="pb-3">Aprobación</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((sig) => {
              const pp = productosPrioritarios.find((p) => p.id === sig.ppId)
              return (
                <tr key={sig.n} className="border-b border-stone-800/50">
                  <td className="py-2.5 pr-4 text-stone-500">{sig.n}</td>
                  <td className="py-2.5 pr-4 text-stone-200">{sig.nombre}</td>
                  <td className="py-2.5 pr-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pp?.color }} />
                      <span className="text-stone-400">{sig.ppId === 'eye' ? 'EyE' : 'NFU'}</span>
                    </span>
                  </td>
                  <td className="py-2.5 pr-4 text-stone-400">{sig.categoria}</td>
                  <td className="py-2.5 pr-4">
                    <span className={`text-xs px-2 py-0.5 rounded ${tipoColor[sig.tipo]}`}>
                      {sig.tipo}
                    </span>
                  </td>
                  <td className="py-2.5 text-stone-500">{sig.fechaAprobacion}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
