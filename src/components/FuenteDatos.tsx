// src/components/FuenteDatos.tsx

type TipoDato = 'oficial' | 'estimacion' | 'sectorial' | 'declaracion-actor'

const tipoConfig: Record<TipoDato, { label: string; className: string }> = {
  oficial: {
    label: 'Dato oficial',
    className: 'bg-emerald-900/40 text-emerald-300 border-emerald-800/50',
  },
  estimacion: {
    label: 'Estimación sectorial',
    className: 'bg-amber-900/40 text-amber-300 border-amber-800/50',
  },
  sectorial: {
    label: 'Dato sectorial',
    className: 'bg-blue-900/40 text-blue-300 border-blue-800/50',
  },
  'declaracion-actor': {
    label: 'Declaración de actor',
    className: 'bg-stone-800 text-stone-400 border-stone-700',
  },
}

interface FuenteDatosProps {
  fuente: string
  tipo: TipoDato
  fecha?: string
  nota?: string
}

export function FuenteDatos({ fuente, tipo, fecha, nota }: FuenteDatosProps) {
  const config = tipoConfig[tipo]
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs mt-3">
      <span className={`px-2 py-0.5 rounded border ${config.className}`}>
        {config.label}
      </span>
      <span className="text-stone-500">
        {fuente}{fecha ? ` · ${fecha}` : ''}
      </span>
      {nota && <span className="text-stone-600 italic">— {nota}</span>}
    </div>
  )
}
