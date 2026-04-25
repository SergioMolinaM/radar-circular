// src/pages/Panorama.tsx
import { tonelaje2024 } from '../data/metas-eye'
import { TonelajeChart } from '../components/TonelajeChart'
import { CumplimientoTable } from '../components/CumplimientoTable'
import { MetasLineChart } from '../components/MetasLineChart'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'

function formatTon(n: number) {
  return n.toLocaleString('es-CL')
}

export function Panorama() {
  const totalMdp = tonelaje2024.reduce((s, r) => s + r.mdp, 0)
  const totalMgp = tonelaje2024.reduce((s, r) => s + r.mgp, 0)

  return (
    <div className="p-8 max-w-5xl space-y-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Panorama REP — Envases y Embalajes 2024</h2>
        <p className="text-stone-400 mb-1">
          Fuente: Estudio Kyklos 2024 (encargado por ANIR-ReSimple).
        </p>
        <p className="text-xs text-stone-500">
          MDP: Material Disponible País · MGP: Material Gestionado País · SIG: Sistema de Gestión
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      <FuenteDatos
        fuente="Estudio Kyklos 2024 (encargado por ANIR-ReSimple)"
        tipo="estimacion"
        fecha="Abril 2025"
        nota="Metodología: datos aduaneros, 21 entrevistas, encuesta a 42 gestores, fuentes públicas (RETC, SNIFA)"
      />

      {/* Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Material disponible vs. gestionado por subcategoría</h3>
        <TonelajeChart />
        <FuenteDatos fuente="Estudio Kyklos 2024" tipo="estimacion" fecha="Abril 2025" />
      </div>

      {/* Tabla detalle */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Detalle por material</h3>
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
                  <td className="py-3 text-right">
                    {row.mgpNoDomEnSig > 0 ? `${row.mgpNoDomEnSig}%` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trayectoria */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Trayectoria de metas DS 12/2020</h3>
        <p className="text-sm text-stone-400 mb-4">
          La pendiente de exigencia crece cada año. Para 2035, las metas domiciliarias exigen
          entre 45% (plástico) y 70% (papel y cartón) de valorización.
        </p>
        <MetasLineChart />
        <FuenteDatos fuente="Decreto Supremo 12/2020, Tablas de metas" tipo="oficial" />
      </div>

      {/* Cumplimiento de metas */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Cumplimiento de metas 2024 — Tres escenarios</h3>
        <p className="text-sm text-stone-400 mb-6">
          La brecha entre lo que Chile recicla y lo que el sistema formal contabiliza
          es la tensión central de la Ley REP. Estos tres escenarios lo hacen visible.
        </p>
        <CumplimientoTable />
        <FuenteDatos
          fuente="Estudio Kyklos 2024, Cuadro 14"
          tipo="estimacion"
          fecha="Abril 2025"
          nota="Los escenarios son simulaciones basadas en datos estimados, no mediciones oficiales de la SMA"
        />
      </div>
    </div>
  )
}
