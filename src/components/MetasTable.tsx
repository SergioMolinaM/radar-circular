// src/components/MetasTable.tsx

interface MetasTableProps {
  titulo: string
  columnas: { key: string; label: string }[]
  filas: Record<string, string | number>[]
  añoActual?: number
  nota?: string
}

export function MetasTable({ titulo, columnas, filas, añoActual = 2026, nota }: MetasTableProps) {
  return (
    <div>
      <h4 className="text-sm font-medium text-stone-400 mb-3">{titulo}</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-800 text-stone-500 text-left">
              {columnas.map((col) => (
                <th key={col.key} className="pb-2 pr-4 text-right first:text-left">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((fila, i) => {
              const esAñoActual = fila['año'] === añoActual
              return (
                <tr
                  key={i}
                  className={`border-b border-stone-800/50 ${
                    esAñoActual ? 'bg-stone-900/50' : ''
                  }`}
                >
                  {columnas.map((col) => (
                    <td
                      key={col.key}
                      className={`py-2 pr-4 text-right first:text-left ${
                        esAñoActual ? 'text-stone-100 font-medium' : 'text-stone-400'
                      }`}
                    >
                      {col.key === 'año' ? fila[col.key] : `${fila[col.key]}%`}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {nota && <p className="text-xs text-stone-600 mt-2">{nota}</p>}
    </div>
  )
}
