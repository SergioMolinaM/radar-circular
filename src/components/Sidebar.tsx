// src/components/Sidebar.tsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, BarChart3, Info, Menu, X, Shield, BookOpen, CalendarClock, Scale, Building2, Map } from 'lucide-react'
import { productosPrioritarios } from '../data/productos-prioritarios'
import { RadarLogo } from './RadarLogo'

const datosItems = [
  { to: '/panorama', label: 'Situación actual', icon: BarChart3 },
  { to: '/mapa', label: 'Mapa territorial', icon: Map },
  { to: '/fiscalizacion', label: 'Fiscalización', icon: Shield },
  { to: '/sistemas-gestion', label: 'Sistemas de Gestión', icon: Building2 },
  { to: '/hoja-de-ruta', label: 'Lo que viene', icon: CalendarClock },
]

const referenciaItems = [
  { to: '/ley-rep', label: 'La Ley REP', icon: Scale },
  { to: '/glosario', label: 'Glosario', icon: BookOpen },
  { to: '/acerca', label: 'Acerca de Radar Circular', icon: Info },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-150 ${
      isActive
        ? 'font-medium'
        : 'hover:translate-x-0.5'
    }`

  const linkStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? 'var(--bg-elevated)' : 'transparent',
    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
  })

  const handleNav = () => setOpen(false)

  const sidebarContent = (
    <>
      <div className="px-4 pt-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RadarLogo size={32} />
          <div>
            <h1 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Radar Circular
            </h1>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Inteligencia Ley REP Chile
            </p>
          </div>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="md:hidden hover:opacity-80 transition-opacity"
          style={{ color: 'var(--text-secondary)' }}
        >
          <X size={20} />
        </button>
      </div>

      {/* Home */}
      <nav className="flex flex-col gap-1">
        <NavLink
          to="/"
          className={linkClass}
          style={({ isActive }) => linkStyle(isActive)}
          end
          onClick={handleNav}
        >
          <Home size={18} />
          Inicio
        </NavLink>
      </nav>

      {/* Datos */}
      <div className="flex flex-col gap-1">
        <span className="px-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          Datos
        </span>
        {datosItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass}
            style={({ isActive }) => linkStyle(isActive)}
            onClick={handleNav}
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Productos Prioritarios */}
      <div className="flex flex-col gap-1">
        <span className="px-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          Productos Prioritarios
        </span>
        {productosPrioritarios.map((pp) => (
          <NavLink
            key={pp.id}
            to={`/producto/${pp.id}`}
            className={linkClass}
            style={({ isActive }) => linkStyle(isActive)}
            onClick={handleNav}
          >
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: pp.color }} />
            <span className="truncate">{pp.nombre}</span>
          </NavLink>
        ))}
      </div>

      {/* Referencia */}
      <div className="flex flex-col gap-1">
        <span className="px-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
          Referencia
        </span>
        {referenciaItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass}
            style={({ isActive }) => linkStyle(isActive)}
            onClick={handleNav}
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="mt-auto">
        <p className="px-4 mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          Tercera Letra · 2026
        </p>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile header */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 px-4 py-3 flex items-center gap-3"
        style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
      >
        <button onClick={() => setOpen(true)} className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)' }}>
          <Menu size={22} />
        </button>
        <RadarLogo size={24} />
        <span className="font-bold text-sm" style={{ fontFamily: "'DM Serif Display', serif" }}>Radar Circular</span>
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
          p-4 flex flex-col gap-6 overflow-y-auto
          transition-transform duration-200
          ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRight: '1px solid var(--border)',
        }}
      >
        {sidebarContent}
      </aside>
    </>
  )
}
