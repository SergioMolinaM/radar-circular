const NAV_ITEMS = [
  { id: 'visibilidad', number: '01', label: 'Visibilidad consolidada' },
  { id: 'inteligencia', number: '02', label: 'Inteligencia comparativa' },
  { id: 'narrativa', number: '03', label: 'Narrativa de impacto' },
  { id: 'ingreso-afiliados', number: '04', label: 'Ingreso afiliados', href: '/afiliado/login' },
]

function Sidebar({ activePage, onNavigate, onBack }) {
  return (
    <aside className="w-64 h-screen flex flex-col bg-crema border-r border-cafe/10 shrink-0">
      {/* Logo */}
      <div className="px-6 py-8">
        <span className="font-serif text-xl text-cafe">
          Radar Circular
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-musgo ml-1 align-middle" />
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activePage === item.id
          const className = `w-full text-left px-6 py-3 flex items-center gap-3 font-sans text-sm transition-colors duration-150 ${
            isActive
              ? 'bg-musgo/10 border-l-[3px] border-musgo text-cafe font-medium'
              : 'border-l-[3px] border-transparent text-cafe/70 hover:bg-cafe/5'
          }`

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <span className={`text-xs font-mono text-cafe/40`}>{item.number}</span>
                {item.label}
              </a>
            )
          }

          return (
            <button
              key={item.id}
              onClick={() => (onNavigate || (() => console.log(item.id)))(item.id)}
              className={className}
            >
              <span className={`text-xs font-mono ${isActive ? 'text-musgo' : 'text-cafe/40'}`}>
                {item.number}
              </span>
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Back button */}
      <div className="px-6 py-6">
        <button
          onClick={onBack || (() => console.log('Volver al inicio'))}
          className="font-sans text-xs text-cafe/50 hover:text-cafe transition-colors duration-150"
        >
          ← Volver al inicio
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
