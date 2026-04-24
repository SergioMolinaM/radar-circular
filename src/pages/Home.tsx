// src/pages/Home.tsx
import { productosPrioritarios } from '../data/productos-prioritarios'
import { ProductoCard } from '../components/ProductoCard'

const cifrasEcosistema = [
  { label: 'Productos prioritarios', valor: '6', detalle: '3 con metas vigentes' },
  { label: 'Sistemas de Gestión', valor: '35', detalle: '12 EyE · 23 NFU (RETC oct 2025)' },
  { label: 'Empresas reguladas', valor: '~40.000', detalle: 'EyE ~17k · P+AEE ~20,5k · NFU ~475' },
  { label: 'Fondo para el Reciclaje', valor: '$2.700M', detalle: '140 proyectos · 12 convocatorias desde 2018' },
]

export function Home() {
  return (
    <div className="p-8 max-w-5xl">
      <h2 className="text-2xl font-bold mb-2">Ley REP en Chile</h2>
      <p className="text-stone-400 mb-8 max-w-2xl">
        Estado de implementación de la Ley 20.920 de Responsabilidad Extendida
        del Productor. Datos públicos, trazables a fuente oficial.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {cifrasEcosistema.map((c) => (
          <div key={c.label} className="p-4 rounded-lg border border-stone-800">
            <p className="text-xs text-stone-500">{c.label}</p>
            <p className="text-xl font-bold">{c.valor}</p>
            <p className="text-xs text-stone-500">{c.detalle}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4">Productos prioritarios</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productosPrioritarios.map((pp) => (
          <ProductoCard key={pp.id} producto={pp} />
        ))}
      </div>

      {/* Qué es Radar Circular */}
      <div className="mt-10 p-6 rounded-xl border border-stone-800 bg-stone-900/30 space-y-4">
        <h3 className="text-lg font-semibold">¿Qué es Radar Circular?</h3>
        <p className="text-sm text-stone-400 leading-relaxed">
          La información pública sobre la Ley REP en Chile está dispersa en múltiples
          plataformas estatales: RETC (MMA), SNIFA (SMA), SISREP (SMA), SINADER, Ventanilla
          Única, Fondo para el Reciclaje y el portal de Economía Circular del MMA. Los estudios
          sectoriales (Kyklos, ANIR) se publican como documentos extensos de difícil acceso.
        </p>
        <p className="text-sm text-stone-400 leading-relaxed">
          Radar Circular reúne, visualiza y contextualiza estos datos en un solo lugar. No
          reemplaza las fuentes oficiales — las complementa con análisis, trazabilidad de fuentes
          y una capa analítica basada en las Mesas de Economía Popular convocadas por CORFO
          y en estudios académicos como el del Instituto de Economía de la PUC.
        </p>
        <p className="text-sm text-stone-400 leading-relaxed">
          Está diseñado para regulados que necesitan entender sus obligaciones, consultores
          que asesoran a empresas, periodistas que cubren medio ambiente, académicos que
          investigan la implementación REP, y ciudadanía informada que quiere saber qué pasa
          con los residuos que genera.
        </p>
      </div>

      <div className="mt-10 p-5 rounded-xl border border-stone-800 text-sm text-stone-400 space-y-2">
        <p className="font-medium text-stone-300">Fuentes de datos</p>
        <p>
          RETC Open Data (MMA) · SNIFA (SMA) · Estudio Kyklos 2024 (ANIR-ReSimple) ·
          Mesas de Economía Popular CORFO 2025 · DS 12/2020, DS 8/2019, DS 47/2023 ·
          BCN Ley Chile · Comunicados SMA y MMA · País Circular.
        </p>
      </div>
    </div>
  )
}
