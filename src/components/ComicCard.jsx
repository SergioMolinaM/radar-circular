import { useState } from 'react'
import DataTypeBadge from './DataTypeBadge'

const TYPE_COLORS = {
  publico: { bg: 'bg-dato-publico/[0.08]', border: 'border-dato-publico' },
  sectorial: { bg: 'bg-dato-sectorial/[0.08]', border: 'border-dato-sectorial' },
  interno: { bg: 'bg-dato-interno/[0.08]', border: 'border-dato-interno' },
  proyeccion: { bg: 'bg-dato-proyeccion/[0.08]', border: 'border-dato-proyeccion' },
}

function ComicCard({ type, title, children, dismissible }) {
  const [dismissed, setDismissed] = useState(false)
  if (dismissed) return null

  const colors = TYPE_COLORS[type] || TYPE_COLORS.publico

  return (
    <div className={`relative p-5 rounded-xl border-l-4 shadow-sm ${colors.bg} ${colors.border}`}>
      {dismissible && (
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 text-cafe/40 hover:text-cafe transition-colors duration-150 font-sans text-sm leading-none"
        >
          ✕
        </button>
      )}
      <DataTypeBadge type={type} />
      <h3 className="font-serif text-lg text-cafe mt-2">{title}</h3>
      <div className="font-sans text-sm text-cafe/80 mt-2">{children}</div>
    </div>
  )
}

export default ComicCard
