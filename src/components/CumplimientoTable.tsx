// src/components/CumplimientoTable.tsx
import { useState } from 'react'
import { cumplimiento2024 } from '../data/cumplimiento-eye'

type Escenario = 'sig' | 'nacional' | 'simulacion'

const escenarios: { key: Escenario; label: string; desc: string }[] = [
  {
    key: 'sig',
    label: 'Solo SIG',
    desc: 'Solo material reportado por sistemas de gestión formales',
  },
  {
    key: 'nacional',
    label: 'Nacional',
    desc: 'Toda la industria del reciclaje (incluye actores fuera de SIG)',
  },
  {
    key: 'simulacion',
    label: 'Simulación',
    desc: 'Si todo el MGP nacional se integrara a los SIG',
  },
]

function getCumple(row: (typeof cumplimiento2024)[0], esc: Escenario) {
  switch (esc) {
    case 'sig': return row.cumpleSig
    case 'nacional': return row.cumpleNacional
    case 'simulacion': return row.cumpleSimulacion
  }
}

export function CumplimientoTable() {
  const [escenario, setEscenario] = useState<Escenario>('sig')
  const dom = cumplimiento2024.filter((r) => r.categoria === 'domiciliario')
  const noDom = cumplimiento2024.filter((r) => r.categoria === 'no-domiciliario')

  const renderRow = (row: (typeof cumplimiento2024)[0]) => {
    const cumple = getCumple(row, escenario)
    const ok = cumple >= row.metaRep2024
    return (
      <tr key={`${row.categoria}-${row.material}`} className="border-b border-stone-800/50">
        <td className="py-2.5 pr-4">{row.material}</td>
        <td className="py-2.5 pr-4 text-right text-stone-400">{row.metaRep2024}%</td>
        <td className={`py-2.5 text-right font-medium ${ok ? 'text-emerald-400' : 'text-red-400'}`}>
          {cumple}%
        </td>
      </tr>
    )
  }

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {escenarios.map((e) => (
          <button
            key={e.key}
            onClick={() => setEscenario(e.key)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              escenario === e.key
                ? 'bg-stone-800 text-stone-100'
                : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900'
            }`}
          >
            {e.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-stone-500 mb-4">
        {escenarios.find((e) => e.key === escenario)?.desc}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-stone-400 mb-3">Domiciliarios</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-800 text-stone-500 text-left">
                <th className="pb-2">Material</th>
                <th className="pb-2 text-right">Meta</th>
                <th className="pb-2 text-right">Cumple</th>
              </tr>
            </thead>
            <tbody>{dom.map(renderRow)}</tbody>
          </table>
        </div>
        <div>
          <h4 className="text-sm font-medium text-stone-400 mb-3">No domiciliarios</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-800 text-stone-500 text-left">
                <th className="pb-2">Material</th>
                <th className="pb-2 text-right">Meta</th>
                <th className="pb-2 text-right">Cumple</th>
              </tr>
            </thead>
            <tbody>{noDom.map(renderRow)}</tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-stone-600 mt-4">
        Verde: cumple meta · Rojo: no cumple · Fuente: Estudio Kyklos 2024, Cuadro 14.
      </p>
    </div>
  )
}
