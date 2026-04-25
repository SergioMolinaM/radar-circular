// src/components/CumplimientoTable.tsx
// Tabla compacta de cumplimiento — usada en Panorama
import { cumplimiento2024 } from '../data/cumplimiento-eye'

export function CumplimientoTable() {
  const dom = cumplimiento2024.filter((r) => r.categoria === 'domiciliario')
  const noDom = cumplimiento2024.filter((r) => r.categoria === 'no-domiciliario')

  const renderRow = (row: (typeof cumplimiento2024)[0]) => {
    return (
      <tr key={`${row.categoria}-${row.material}`} style={{ borderBottom: '1px solid var(--border)' }}>
        <td className="py-2.5 pr-4">{row.material}</td>
        <td className="py-2.5 pr-4 text-right" style={{ color: 'var(--text-muted)' }}>{row.metaDS12}%</td>
        <td className={`py-2.5 text-right font-medium ${row.cumpleMeta ? 'text-emerald-400' : 'text-red-400'}`}>
          {row.cumpleSIG}%
        </td>
        <td className="py-2.5 text-right" style={{ color: 'var(--text-muted)' }}>{row.tasaTotalPais}%</td>
      </tr>
    )
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>Domiciliarios</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left" style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                <th className="pb-2">Material</th>
                <th className="pb-2 text-right">Meta</th>
                <th className="pb-2 text-right">Dentro SIG</th>
                <th className="pb-2 text-right">Total país</th>
              </tr>
            </thead>
            <tbody>{dom.map(renderRow)}</tbody>
          </table>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>No domiciliarios</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left" style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-muted)' }}>
                <th className="pb-2">Material</th>
                <th className="pb-2 text-right">Meta</th>
                <th className="pb-2 text-right">Dentro SIG</th>
                <th className="pb-2 text-right">Total país</th>
              </tr>
            </thead>
            <tbody>{noDom.map(renderRow)}</tbody>
          </table>
        </div>
      </div>

      <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
        Verde: cumple meta dentro de SIG · Rojo: no cumple · "Total país" incluye reciclaje fuera de SIG (no cuenta para cumplimiento).
      </p>
    </div>
  )
}
