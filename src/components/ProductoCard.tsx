// src/components/ProductoCard.tsx
import { Link } from 'react-router-dom'
import type { ProductoPrioritario } from '../data/productos-prioritarios'

const estadoLabel: Record<string, { text: string; className: string }> = {
  vigente: { text: 'Vigente', className: 'bg-emerald-900/50 text-emerald-300' },
  'pre-publicacion': { text: 'Pre-publicación', className: 'bg-amber-900/50 text-amber-300' },
  'consulta-publica': { text: 'Consulta pública', className: 'bg-blue-900/50 text-blue-300' },
  'en-tramitacion': { text: 'En tramitación', className: 'bg-stone-800 text-stone-400' },
}

export function ProductoCard({ producto }: { producto: ProductoPrioritario }) {
  const estado = estadoLabel[producto.estadoDecreto]

  return (
    <Link
      to={`/producto/${producto.id}`}
      className="block p-5 rounded-xl border border-stone-800 hover:border-stone-700 transition-colors"
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: producto.color }}
        />
        <h3 className="font-semibold">{producto.nombreCorto}</h3>
        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${estado.className}`}>
          {estado.text}
        </span>
      </div>
      <p className="text-sm text-stone-400 line-clamp-2">{producto.descripcion}</p>
      {producto.decreto && (
        <p className="text-xs text-stone-500 mt-3">{producto.decreto}</p>
      )}
      {producto.sistemasGestion.length > 0 && (
        <div className="flex gap-1.5 mt-3 flex-wrap">
          {producto.sistemasGestion.map((sg) => (
            <span
              key={sg.nombre}
              className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400"
            >
              {sg.nombre}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
