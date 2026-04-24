// src/components/Layout.tsx
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export function Layout() {
  return (
    <div className="min-h-screen md:flex" style={{ backgroundColor: 'var(--bg-deep)', color: 'var(--text-primary)' }}>
      <Sidebar />
      <main className="flex-1 overflow-y-auto pt-14 md:pt-0">
        <Outlet />
        <footer
          className="mt-16 p-8 text-xs max-w-3xl space-y-2"
          style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)' }}
        >
          <p className="font-medium" style={{ color: 'var(--text-secondary)' }}>Sobre los datos</p>
          <p>
            Radar Circular utiliza tres tipos de datos: (1) datos oficiales del Estado de Chile
            (decretos, RETC, SNIFA, comunicados MMA y SMA), (2) estimaciones sectoriales de estudios
            publicados (Kyklos/ANIR), y (3) declaraciones de actores del ecosistema en instancias
            públicas (Mesas Ejecutivas para la Productividad CORFO, medios de prensa). Cada dato
            está marcado con su tipo y fuente.
          </p>
          <p>
            Este sitio no es un medio oficial del Gobierno de Chile. Los datos estimados no reemplazan
            la información oficial de la SMA y el MMA.
          </p>
        </footer>
      </main>
    </div>
  )
}
