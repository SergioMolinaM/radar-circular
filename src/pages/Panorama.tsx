// src/pages/Panorama.tsx
import { tonelaje2024 } from '../data/metas-eye'
import { TonelajeChart } from '../components/TonelajeChart'
import { CumplimientoTable } from '../components/CumplimientoTable'
import { MetasLineChart } from '../components/MetasLineChart'
import { FuenteDatos } from '../components/FuenteDatos'
import { UltimaActualizacion } from '../components/UltimaActualizacion'
import { Callout } from '../components/Callout'

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
        <p className="mb-1" style={{ color: 'var(--text-secondary)' }}>
          Fuente: Estudio Kyklos 2024 (encargado por ANIR-ReSimple).
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          MDP: Material Disponible País · MGP: Material Gestionado País · SIG: Sistema de Gestión
        </p>
        <UltimaActualizacion fecha="25 de abril de 2026" />
      </div>

      <Callout variant="explainer" titulo="¿Qué muestran estos datos?">
        Una radiografía del mercado de residuos de envases y embalajes en Chile: cuánto material se pone
        en el mercado (MDP), cuánto se gestiona efectivamente (MGP), y la capacidad instalada de
        tratamiento (CTIP). Fuente: Estudio Kyklos 2024, encargado por ANIR y ReSimple.
      </Callout>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Total MDP</p>
          <p className="text-xl font-bold">{formatTon(totalMdp)} ton</p>
        </div>
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Total MGP</p>
          <p className="text-xl font-bold">{formatTon(totalMgp)} ton</p>
        </div>
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Tasa valorización</p>
          <p className="text-xl font-bold">33,0%</p>
        </div>
        <div className="p-4 rounded-lg" style={{ border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>MGP domiciliario en SIG</p>
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
              <tr className="text-left" style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
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
                <tr key={row.material} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="py-3 pr-4 font-medium">{row.material}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: 'var(--text-primary)' }}>{formatTon(row.mdp)}</td>
                  <td className="py-3 pr-4 text-right" style={{ color: 'var(--text-primary)' }}>{formatTon(row.mgp)}</td>
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
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          La pendiente de exigencia crece cada año. Para 2035, las metas domiciliarias exigen
          entre 45% (plástico) y 70% (papel y cartón) de valorización.
        </p>
        <MetasLineChart />
        <FuenteDatos fuente="Decreto Supremo 12/2020, Tablas de metas" tipo="oficial" />
      </div>

      {/* Cumplimiento de metas */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Cumplimiento de metas 2024 — Tres escenarios</h3>
        <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
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
