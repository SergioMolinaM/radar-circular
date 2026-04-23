const TYPE_CONFIG = {
  publico: {
    label: 'PÚBLICO',
    dot: 'bg-dato-publico',
    text: 'text-dato-publico',
    bg: 'bg-dato-publico/10',
  },
  sectorial: {
    label: 'SECTORIAL',
    dot: 'bg-dato-sectorial',
    text: 'text-dato-sectorial',
    bg: 'bg-dato-sectorial/10',
  },
  interno: {
    label: 'INTERNO',
    dot: 'bg-dato-interno',
    text: 'text-dato-interno',
    bg: 'bg-dato-interno/10',
  },
  proyeccion: {
    label: 'PROYECCIÓN',
    dot: 'bg-dato-proyeccion',
    text: 'text-dato-proyeccion',
    bg: 'bg-dato-proyeccion/10',
  },
}

function DataTypeBadge({ type, tooltip }) {
  const config = TYPE_CONFIG[type]
  if (!config) return null

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded ${config.bg} ${config.text} font-sans text-[10px] tracking-wider font-medium`}
      title={tooltip}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}

export default DataTypeBadge
