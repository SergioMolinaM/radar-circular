// src/components/Sidebar.tsx
import { NavLink } from 'react-router-dom'
import { Home, BarChart3, Info } from 'lucide-react'
import { productosPrioritarios } from '../data/productos-prioritarios'

const navItems = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/panorama', label: 'Panorama REP', icon: BarChart3 },
]

export function Sidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
      isActive
        ? 'bg-stone-800 text-stone-100'
        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
    }`

  return (
    <aside className="w-64 border-r border-stone-800 p-4 flex flex-col gap-6 shrink-0 sticky top-0 h-screen overflow-y-auto">
      <div className="px-4 pt-2">
        <h1 className="text-lg font-bold tracking-tight">Radar Circular</h1>
        <p className="text-xs text-stone-500 mt-0.5">Inteligencia Ley REP Chile</p>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === '/'}>
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col gap-1">
        <span className="px-4 text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
          Productos Prioritarios
        </span>
        {productosPrioritarios.map((pp) => (
          <NavLink
            key={pp.id}
            to={`/producto/${pp.id}`}
            className={linkClass}
          >
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: pp.color }}
            />
            {pp.nombreCorto}
          </NavLink>
        ))}
      </div>

      <div className="mt-auto">
        <NavLink to="/acerca" className={linkClass}>
          <Info size={18} />
          Acerca de
        </NavLink>
        <p className="px-4 mt-3 text-xs text-stone-600">
          Tercera Letra · 2026
        </p>
      </div>
    </aside>
  )
}
