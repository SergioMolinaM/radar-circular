// src/components/UltimaActualizacion.tsx

interface UltimaActualizacionProps {
  fecha: string // formato legible: "24 de abril de 2026"
}

export function UltimaActualizacion({ fecha }: UltimaActualizacionProps) {
  return (
    <p className="text-xs text-stone-600 mb-6">
      Última actualización de esta página: {fecha}
    </p>
  )
}
