// src/components/Sidebar.tsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, BarChart3, Info, Menu, X, Shield, FileText, BookOpen } from 'lucide-react'
import { productosPrioritarios } from '../data/productos-prioritarios'

const navItems = [
  { to: '/', label: 'Inicio', icon: Home },
  { to: '/panorama', label: 'Panorama REP', icon: BarChart3 },
  { to: '/fiscalizacion', label: 'Fiscalización', icon: Shield },
  { to: '/analisis', label: 'Análisis', icon: FileText },
  { to: '/glosario', label: 'Glosario', icon: BookOpen },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
      isActive
        ? 'bg-stone-800 text-stone-100'
        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
    }`

  const handleNav = () => setOpen(false)

  const sidebarContent = (
    <>
      <div className="px-4 pt-2 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold tracking-tight">Radar Circular</h1>
          <p className="text-xs text-stone-500 mt-0.5">Inteligencia Ley REP Chile</p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="md:hidden text-stone-400 hover:text-stone-200"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass}
            end={item.to === '/'}
            onClick={handleNav}
          >
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
            onClick={handleNav}
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
        <NavLink to="/acerca" className={linkClass} onClick={handleNav}>
          <Info size={18} />
          Acerca de
        </NavLink>
        <p className="px-4 mt-3 text-xs text-stone-600">
          Tercera Letra · 2026
        </p>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-stone-950 border-b border-stone-800 px-4 py-3 flex items-center gap-3">
        <button onClick={() => setOpen(true)} className="text-stone-400 hover:text-stone-200">
          <Menu size={22} />
        </button>
        <span className="font-bold text-sm">Radar Circular</span>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/60"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar — mobile drawer / desktop fixed */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50 h-screen w-64
          bg-stone-950 border-r border-stone-800
          p-4 flex flex-col gap-6 overflow-y-auto
          transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
