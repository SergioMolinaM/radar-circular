// src/pages/ProductoDetalle.tsx
import { useParams, Navigate } from 'react-router-dom'
import { productosPrioritarios } from '../data/productos-prioritarios'

const estadoLabel: Record<string, string> = {
  vigente: 'Decreto vigente',
  'pre-publicacion': 'Decreto en etapa final — pendiente publicación Diario Oficial',
  'consulta-publica': 'Consulta pública cerrada — decreto en elaboración',
  'en-tramitacion': 'En tramitación',
}

export function ProductoDetalle() {
  const { id } = useParams()
  const pp = productosPrioritarios.find((p) => p.id === id)

  if (!pp) return <Navigate to="/" replace />

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: pp.color }}
        />
        <h2 className="text-2xl font-bold">{pp.nombre}</h2>
      </div>

      <p className="text-stone-400 mb-6">{pp.descripcion}</p>

      <div className="space-y-4">
        <div className="p-4 rounded-lg border border-stone-800">
          <p className="text-xs text-stone-500 mb-1">Estado normativo</p>
          <p className="font-medium">{estadoLabel[pp.estadoDecreto]}</p>
          {pp.decreto && <p className="text-sm text-stone-400 mt-1">{pp.decreto}</p>}
          {pp.fechaVigencia && (
            <p className="text-sm text-stone-400">Vigencia: {pp.fechaVigencia}</p>
          )}
        </div>

        {pp.sistemasGestion.length > 0 && (
          <div className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500 mb-3">Sistemas de Gestión</p>
            <div className="space-y-2">
              {pp.sistemasGestion.map((sg) => (
                <div key={sg.nombre} className="flex items-center gap-3">
                  <span className="font-medium">{sg.nombre}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                    {sg.tipo}
                  </span>
                  {sg.estado === 'en-formacion' && (
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-900/50 text-amber-300">
                      en formación
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-stone-600 mt-8">
        Datos en construcción. Esta sección se enriquecerá con información de RETC, SNIFA y fuentes oficiales.
      </p>
    </div>
  )
}
