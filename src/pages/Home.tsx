// src/pages/Home.tsx
import { productosPrioritarios } from '../data/productos-prioritarios'
import { ProductoCard } from '../components/ProductoCard'

export function Home() {
  return (
    <div className="p-8 max-w-5xl">
      <h2 className="text-2xl font-bold mb-2">Ley REP en Chile</h2>
      <p className="text-stone-400 mb-8 max-w-2xl">
        Estado de implementación de la Ley 20.920 de Responsabilidad Extendida
        del Productor. Datos públicos, trazables a fuente oficial.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosPrioritarios.map((pp) => (
          <ProductoCard key={pp.id} producto={pp} />
        ))}
      </div>
    </div>
  )
}
