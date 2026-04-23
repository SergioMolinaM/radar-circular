// src/pages/Panorama.tsx
import { tonelaje2024 } from '../data/metas-eye'

function formatTon(n: number) {
  return n.toLocaleString('es-CL')
}

export function Panorama() {
  const totalMdp = tonelaje2024.reduce((s, r) => s + r.mdp, 0)
  const totalMgp = tonelaje2024.reduce((s, r) => s + r.mgp, 0)

  return (
    <div className="p-8 max-w-5xl">
      <h2 className="text-2xl font-bold mb-2">Panorama REP — Envases y Embalajes 2024</h2>
      <p className="text-stone-400 mb-1">
        Fuente: Estudio Kyklos 2024 (encargado por ANIR-ReSimple).
      </p>
      <p className="text-xs text-stone-500 mb-8">
        MDP: Material Disponible País · MGP: Material Gestionado País · SIG: Sistema de Gestión
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Total MDP</p>
          <p className="text-xl font-bold">{formatTon(totalMdp)} ton</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Total MGP</p>
          <p className="text-xl font-bold">{formatTon(totalMgp)} ton</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">Tasa valorización</p>
          <p className="text-xl font-bold">33,0%</p>
        </div>
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500">MGP domiciliario en SIG</p>
          <p className="text-xl font-bold text-amber-400">16,6%</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800 text-stone-400 text-left">
              <th className="pb-3 pr-4">Material</th>
              <th className="pb-3 pr-4 text-right">MDP (ton)</th>
              <th className="pb-3 pr-4 text-right">MGP (ton)</th>
              <th className="pb-3 pr-4 text-right">Tasa val.</th>
              <th className="pb-3 pr-4 text-right">% MDP en SIG</th>
              <th className="pb-3 pr-4 text-right">MGP dom. en SIG</th>
              <th className="pb-3 text-right">MGP no dom. en SIG</th>
            </tr>
          </thead>
          <tbody>
            {tonelaje2024.map((row) => (
              <tr key={row.material} className="border-b border-stone-800/50">
                <td className="py-3 pr-4 font-medium">{row.material}</td>
                <td className="py-3 pr-4 text-right text-stone-300">{formatTon(row.mdp)}</td>
                <td className="py-3 pr-4 text-right text-stone-300">{formatTon(row.mgp)}</td>
                <td className="py-3 pr-4 text-right">{row.tasaValorizacion}%</td>
                <td className="py-3 pr-4 text-right">{row.enSig}%</td>
                <td className="py-3 pr-4 text-right text-amber-400">{row.mgpDomEnSig}%</td>
                <td className="py-3 text-right">{row.mgpNoDomEnSig > 0 ? `${row.mgpNoDomEnSig}%` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-stone-600 mt-6">
        Nota: vidrio y cartón para líquidos son 100% domiciliarios según clasificación DS12, por lo que no tienen columna no domiciliaria.
      </p>
    </div>
  )
}
