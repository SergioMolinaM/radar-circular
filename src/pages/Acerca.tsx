// src/pages/Acerca.tsx

export function Acerca() {
  return (
    <div className="p-8 max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">Acerca de Radar Circular</h2>
      <div className="space-y-4 text-stone-400 leading-relaxed">
        <p>
          Radar Circular es una plataforma pública de inteligencia sobre la implementación
          de la Ley 20.920 de Responsabilidad Extendida del Productor en Chile.
        </p>
        <p>
          El objetivo es hacer visible, con datos reales y trazables a fuente oficial,
          el estado de avance del sistema REP: productos prioritarios, sistemas de gestión,
          metas de recolección y valorización, fiscalización y cumplimiento.
        </p>
        <p>
          Todos los datos presentados provienen de fuentes públicas: RETC (Registro de
          Emisiones y Transferencias de Contaminantes), SNIFA (Sistema Nacional de
          Información de Fiscalización Ambiental), BCN (Biblioteca del Congreso Nacional),
          estudios sectoriales publicados y documentación oficial del MMA y la SMA.
        </p>
        <p className="text-stone-500 text-sm pt-4">
          Desarrollado por Tercera Letra — Narrativa · Evidencia · Tecnología.
        </p>
      </div>
    </div>
  )
}
