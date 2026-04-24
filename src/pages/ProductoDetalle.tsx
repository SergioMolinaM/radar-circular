// src/pages/ProductoDetalle.tsx
import { useParams, Navigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { FuenteDatos } from '../components/FuenteDatos'
import { productosPrioritarios } from '../data/productos-prioritarios'

const estadoLabel: Record<string, { text: string; className: string }> = {
  vigente: { text: 'Decreto vigente', className: 'bg-emerald-900/50 text-emerald-300' },
  'pre-publicacion': { text: 'Pre-publicación DO', className: 'bg-amber-900/50 text-amber-300' },
  'consulta-publica': { text: 'Consulta pública cerrada', className: 'bg-blue-900/50 text-blue-300' },
  'en-tramitacion': { text: 'En tramitación', className: 'bg-stone-800 text-stone-400' },
}

// Contexto adicional por PP (datos oficiales que no justifican una página propia aún)
const contextoAdicional: Record<string, { items: { titulo: string; texto: string }[]; enlaces?: { label: string; url: string }[]; atribucion?: { fuente: string; tipo: 'oficial' | 'estimacion' | 'sectorial' | 'declaracion-actor'; fecha?: string } }> = {
  alu: {
    items: [
      {
        titulo: 'Cifras actuales (pre-decreto)',
        texto: 'Según el Estudio ANIR/Kyklos 2024, los aceites lubricantes usados ya tienen una tasa de valorización del 47,6%, con 57.438 toneladas gestionadas sobre 120.748 disponibles. La industria de re-refinación opera con alta capacidad antes de la entrada en vigor de las metas REP.',
      },
      {
        titulo: 'Estado del decreto',
        texto: 'El DS 47/2023 fue publicado en el Diario Oficial en noviembre de 2024. Las obligaciones de recolección y valorización entran en vigor en enero de 2027, dando un plazo de más de dos años a los productores para constituir Sistemas de Gestión y obtener las autorizaciones correspondientes.',
      },
      {
        titulo: 'Antecedentes',
        texto: 'Los aceites lubricantes usados son residuos peligrosos con alto potencial de valorización mediante re-refinación o uso como combustible alternativo. Chile cuenta con experiencia previa en gestión de ALU a través del DS 148/2003 (Reglamento Sanitario de Residuos Peligrosos), pero sin metas de valorización obligatorias hasta ahora.',
      },
      {
        titulo: 'Próximos pasos',
        texto: 'Los productores (importadores y fabricantes) deben inscribirse en el RETC, constituir Sistemas de Gestión (individuales o colectivos), y presentar planes de gestión al MMA antes de enero de 2027.',
      },
    ],
    enlaces: [
      { label: 'Expediente ALU en MMA', url: 'https://economiacircular.mma.gob.cl/aceites-y-lubricantes/' },
      { label: 'DS 47/2023 en BCN', url: 'https://www.bcn.cl/leychile/navegar?idNorma=1204037' },
    ],
    atribucion: { fuente: 'ANIR/Kyklos Estudio Comparativo de Materiales 2024', tipo: 'estimacion', fecha: 'Diciembre 2025' },
  },
  bfu: {
    items: [
      {
        titulo: 'Cifras actuales (pre-decreto)',
        texto: 'Las baterías fuera de uso alcanzaron 74,5% de valorización en 2023 y 52% en 2024 (ANIR/Kyklos). El alto valor del plomo facilita el reciclaje informal y formal. Es el producto prioritario con mayor tasa de valorización antes de tener decreto vigente.',
      },
      {
        titulo: 'Estado del decreto',
        texto: 'La consulta pública del anteproyecto de decreto de metas para Baterías Fuera de Uso cerró en abril de 2026. El MMA trabaja en la elaboración del decreto definitivo. Las baterías de menos de 5 kg quedan cubiertas por el decreto de P+AEE (pilas).',
      },
      {
        titulo: 'Alcance',
        texto: 'El decreto cubrirá baterías de vehículos (plomo-ácido), baterías industriales y otras baterías de más de 5 kg. Las baterías de litio de vehículos eléctricos representan un desafío emergente por su crecimiento acelerado y la complejidad de su valorización.',
      },
      {
        titulo: 'Relación con P+AEE',
        texto: 'El decreto P+AEE (Contraloría tomó razón el 20 de abril de 2026) cubre pilas y baterías de menos de 5 kg. BFU es el complemento para baterías de mayor envergadura.',
      },
    ],
    enlaces: [
      { label: 'Expediente BFU en MMA', url: 'https://economiacircular.mma.gob.cl/baterias/' },
    ],
    atribucion: { fuente: 'ANIR/Kyklos Estudios 2023-2024', tipo: 'estimacion', fecha: 'Diciembre 2024-2025' },
  },
  textiles: {
    items: [
      {
        titulo: 'Magnitud del problema',
        texto: 'Chile genera más de 572 mil toneladas de residuos textiles al año, equivalentes al 7% de los residuos sólidos urbanos per cápita. Es uno de los países con mayor consumo de ropa por persona, con un aumento de 13 a más de 50 prendas por persona en las últimas décadas. La tasa de valorización es aún muy baja.',
      },
      {
        titulo: 'Estado normativo',
        texto: 'El MMA incorporó textiles como producto prioritario e inició la elaboración del decreto de metas. Hay una convocatoria abierta de antecedentes técnicos, económicos y sociales hasta el 18 de mayo de 2026 (enviar a reptextiles@mma.gob.cl). Una consultoría del BID (enero 2026) está analizando experiencia internacional y datos de importación/exportación.',
      },
      {
        titulo: 'Referencia internacional',
        texto: 'Francia lidera con la Ley AGEC 2020 y el eco-organismo Refashion (ex Eco-TLC), que gestiona residuos textiles desde 2007. La Unión Europea prepara la Directiva de Residuos Textiles con obligaciones de recogida separada desde 2025. Chile sería pionero en Latinoamérica.',
      },
      {
        titulo: 'APL vigente',
        texto: 'Existe un Acuerdo de Producción Limpia "Economía Circular en prendas de vestir de primera mano", liderado por la Cámara Diseña Sustentable con patrocinio del MMA, que está piloteando modelos de gestión de residuos textiles.',
      },
    ],
    enlaces: [
      { label: 'Expediente Textiles en MMA', url: 'https://economiacircular.mma.gob.cl/textiles/' },
      { label: 'Convocatoria antecedentes (hasta 18 mayo 2026)', url: 'https://economiacircular.mma.gob.cl/textiles/' },
    ],
  },
}

export function ProductoDetalle() {
  const { id } = useParams()
  const pp = productosPrioritarios.find((p) => p.id === id)

  if (!pp) return <Navigate to="/" replace />

  const estado = estadoLabel[pp.estadoDecreto]
  const contexto = id ? contextoAdicional[id] : undefined

  return (
    <div className="p-8 max-w-3xl space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: pp.color }} />
          <h2 className="text-2xl font-bold">{pp.nombre}</h2>
          <span className={`text-xs px-2 py-0.5 rounded-full ${estado.className}`}>
            {estado.text}
          </span>
        </div>
        <p className="text-stone-400">{pp.descripcion}</p>
      </div>

      {/* Estado normativo */}
      <div className="p-5 rounded-xl border border-stone-800">
        <p className="text-xs text-stone-500 mb-1">Estado normativo</p>
        <p className="font-medium">{estado.text}</p>
        {pp.decreto && <p className="text-sm text-stone-400 mt-1">{pp.decreto}</p>}
        {pp.fechaVigencia && (
          <p className="text-sm text-stone-400">Vigencia: {pp.fechaVigencia}</p>
        )}
      </div>

      {/* SIG */}
      {pp.sistemasGestion.length > 0 && (
        <div className="p-5 rounded-xl border border-stone-800">
          <p className="text-xs text-stone-500 mb-3">Sistemas de Gestión</p>
          <div className="space-y-2">
            {pp.sistemasGestion.map((sg) => (
              <div key={sg.nombre} className="flex items-center gap-3">
                <span className="font-medium">{sg.nombre}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-800 text-stone-400">
                  {sg.tipo}
                </span>
                {sg.estado === 'en-formacion' && (
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-900/50 text-amber-300">
                    en formación
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contexto adicional */}
      {contexto && (
        <div className="space-y-4">
          {contexto.items.map((item) => (
            <div key={item.titulo} className="p-5 rounded-xl border border-stone-800">
              <p className="text-sm font-medium text-stone-300 mb-2">{item.titulo}</p>
              <p className="text-sm text-stone-400 leading-relaxed">{item.texto}</p>
            </div>
          ))}
          {contexto.atribucion && (
            <FuenteDatos fuente={contexto.atribucion.fuente} tipo={contexto.atribucion.tipo} fecha={contexto.atribucion.fecha} />
          )}
        </div>
      )}

      {/* Enlaces oficiales */}
      {contexto?.enlaces && (
        <div className="p-5 rounded-xl border border-stone-800">
          <p className="text-xs text-stone-500 mb-3">Enlaces oficiales</p>
          <div className="space-y-2">
            {contexto.enlaces.map((e) => (
              <a
                key={e.url}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-stone-400 hover:text-stone-200 transition-colors"
              >
                <ExternalLink size={14} />
                {e.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {!contexto && (
        <p className="text-xs text-stone-600">
          Datos en construcción. Esta sección se enriquecerá con información de RETC, SNIFA y fuentes oficiales.
        </p>
      )}
    </div>
  )
}
